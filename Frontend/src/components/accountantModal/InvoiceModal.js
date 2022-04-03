import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Modal,
  Table,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import axios from "axios";
import { URL } from "../../config";

const InvoiceModal = (props) => {
  const {
    handleClose,
    show,
    bill,
    setInvoiceToggleFlag,
    patient,
    ToggleDataChangelag,
  } = props;
  //to toggle the update buttons
  const [buttonToggleFlag, setButtonToggleFlag] = useState(false);
  //billing details
  const [pres, setPres] = useState([])
    const [doctorCharges, setDoctorCharges] = useState('')
    const [medicineCharges, setMedicineCharges] = useState('')
    const [dateDiff, setDateDiff] = useState('')
    const [wardCharges, setWardCharges] = useState('')
  //to send status to server
  const paymentStatus = {};
  const [patId, setPatId] = useState(patient.patId);
  const [tgflag, setTgflag] = useState(false);
  const [status, setStatus] = useState({});
  const [statusFlag, setStatusFlag] = useState(false);
  //to hide and show initial status
  const [initialFlag, setInitialFlag] = useState(true);

//load billing details from server
const loadDoctorChargesDetails = async () => {
  const url = `${URL}/patient/doctorCharges/${patient.doctorId}`   //to get the doctor charges
  await axios.get(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
          console.log(result['data']);
          setDoctorCharges(result['data'])
      }
  })
}
//load medicine charges
const loadMedicineChargesDetails = async () => {
  const url = `${URL}/patient/medicineCharges/${patient.presId}`   //to get the medicine charges
  await axios.get(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
          console.log(result['data']);
          setMedicineCharges(result['data'])
      }
  })
}
const loadDateDiffDetails = async () => {
  const url = `${URL}/patient/dateDiff/${patient.patId}`        //for date difference between admission and release
  await axios.get(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
          console.log(result['data']);
          setDateDiff(result['data'])
      }
  })
}

const loadWardChargesDetails = async () => {
  const url = `${URL}/patient/wardCharges/${patient.wardBedId}`  //for ward bed charges
  await axios.get(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
          console.log(result['data']);
          setWardCharges(result['data'])
      }
  })
}

  

  useEffect(() => {
    
        
        loadDoctorChargesDetails()
        loadMedicineChargesDetails()
        loadDateDiffDetails()
        loadWardChargesDetails()
  }, [tgflag]);

  //to update status to paid
  const SetPaid = () => {
    const url = `${URL}/patient/updateStatus`;

    const body = {
      patId,
      paymentStatus,
    };
    body.patId = patient.patId;
    body.paymentStatus = "paid";
    axios.post(url, body).then((res) => {
      const result = res.data;
      console.log(res);
      if (result.status == "success") {
        ToggleDataChangelag();
      }
    });

    setTgflag(true);
  };
  const SetUnPaid = () => {
    const url = `${URL}/patient/updateStatus`;

    const body = {
      patId,
      paymentStatus,
    };
    body.patId = patient.patId;
    body.paymentStatus = "unpaid";
    axios.post(url, body).then((res) => {
      const result = res.data;
      console.log(res);
      if (result.status == "success") {
        ToggleDataChangelag();
      }
    });
    setTgflag(true);
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ color: "green" }}>
          <h6>{patient.name}</h6> <h6>patient-id {patient.patId}</h6>
        </div>

        <hr />
        <h6>
          {initialFlag && bill.paymentStatus == "paid" && (
            <div>
              Initial Status :
              <Badge pill bg="success">
                PAID
              </Badge>
            </div>
          )}
          {initialFlag && bill.paymentStatus == "unpaid" && (
            <div>
              {" "}Initial Status :
              <Badge pill bg="danger">
                UNPAID
              </Badge>
            </div>
          )}
          Changed Status{" "}
          {statusFlag && status.paymentStatus == "paid" && (
            <Badge pill bg="success">
              PAID
            </Badge>
          )}
          {statusFlag && status.paymentStatus == "unpaid" && (
            <Badge pill bg="danger">
              UNPAID
            </Badge>
          )}
        </h6>
        <Table striped bordered hover variant="dark">
          <tbody>
            <tr>
              {" "}
              <td>Ward Bill</td>
              <td>₹{wardCharges * dateDiff}</td>
            </tr>
            <tr>
              <td>Doctor Charges</td>
              <td>₹{doctorCharges}</td>
              
            </tr>

            <tr>
              <td>Medicine Bill</td>
              <td>₹{medicineCharges}</td>
            </tr>
            <tr>
              <th>Total</th>
              <th>₹{wardCharges * dateDiff + doctorCharges + medicineCharges}</th>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            handleClose();
            setStatusFlag(false);
            setInitialFlag(true);
          }}
        >
          Close
        </Button>
        {buttonToggleFlag && (
          <div style={{ margin: "20px" }}>
            <Button
              variant="success"
              size="sm"
              onClick={() => {
                SetPaid();
                
                setStatusFlag(true);
                setInitialFlag(false);
              }}
            >
              Paid
            </Button>
            <Button
              variant="warning"
              size="sm"
              onClick={() => {
                SetUnPaid();
                setStatusFlag(true);
                setInitialFlag(false);
              }}
            >
              Unpaid
            </Button>
          </div>
        )}
        <Button
          variant="success"
          size="sm"
          onClick={() => {
            setButtonToggleFlag(!buttonToggleFlag);
          }}
        >
          Update Status
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InvoiceModal;
