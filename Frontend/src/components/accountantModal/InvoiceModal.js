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
import { toast } from "react-toastify";

const InvoiceModal = (props) => {
  const {
    handleClose,
    show,
    setInvoiceToggleFlag,
    patient,
    ToggleDataChangelag,
  } = props;
  //to toggle the update buttons
  const [buttonToggleFlag, setButtonToggleFlag] = useState(false);
  //billing details
  const [doctorCharges, setDoctorCharges] = useState("");
  const [medicineCharges, setMedicineCharges] = useState("");
  const [dateDiff, setDateDiff] = useState("");
  const [wardCharges, setWardCharges] = useState("");
  //to send status to server
  const paymentStatus = {};
  const [patId, setPatId] = useState(patient.patId);
  const [tgflag, setTgflag] = useState(false);
  const [loadBillFlag, setLoadBillFlag] = useState(false);
  const [loadBillButtonFlag, setLoadBillButtonFlag] = useState(false);
  //st release date
  const [relaseDate, setRelaseDate] = useState("");

  //load billing details from server
  const loadDoctorChargesDetails = async () => {
    const url = `${URL}/patient/doctorCharges/${patient.doctorId}`; //to get the doctor charges
    await axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        console.log(result["data"]);
        setDoctorCharges(result["data"]);
      }
    });
  };
  //load medicine charges
  const loadMedicineChargesDetails = async () => {
    const url = `${URL}/patient/medicineCharges/${patient.presId}`; //to get the medicine charges
    await axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        console.log(result["data"]);
        setMedicineCharges(result["data"]);
      }
    });
  };
  const loadDateDiffDetails = async () => {
    const url = `${URL}/patient/dateDiff/${patient.patId}`; //for date difference between admission and release
    await axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        console.log(result["data"]);
        setDateDiff(result["data"]);
      }
    });
  };

  const loadWardChargesDetails = async () => {
    const url = `${URL}/patient/wardCharges/${patient.wardBedId}`; //for ward bed charges
    await axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        console.log(result["data"]);
        setWardCharges(result["data"]);
      }
    });
  };
  const SetRealeseDate = async () => {
    const body = {
      relaseDate,
      patId,
    };
    const url = `${URL}/patient/updateRelaseDate`; //for ward bed charges
    if (relaseDate != "") {
      await axios.post(url, body).then((response) => {
        const result = response.data;
        if (result["status"] == "success") {
          if (result.data == 1) {
            setLoadBillButtonFlag(true);
            toast.success("date updated");
          }
        }
      });
    }
  };
  
  const LoadBill = () => {
    loadDoctorChargesDetails();
    loadMedicineChargesDetails();
    loadDateDiffDetails();
    loadWardChargesDetails();

    setLoadBillFlag(true);
  };

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
        setTgflag(!tgflag);
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
          <h3>
            {patient.name}({patient.patId})
          </h3>
        </div>

        <hr />
        <h6></h6>
        <div>
          <label htmlFor="inputPassword5" className="form-label">
            Release Date 
          </label>
          <input
            type="Date"
            className="form-control"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => {
              setLoadBillButtonFlag(false);
              setLoadBillFlag(false);
              setRelaseDate(e.target.value);
            }}
          />
        </div>
        <Button variant="success" size="sm" onClick={SetRealeseDate}>
          Set ReleaseDate
        </Button>
        {loadBillButtonFlag && (
          <Button variant="warning" size="sm" onClick={LoadBill}>
            Load Bill
          </Button>
        )}  

        {loadBillFlag && (
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
                <th>
                  ₹{wardCharges * dateDiff + doctorCharges + medicineCharges}
                </th>
              </tr>
            </tbody>
          </Table>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            handleClose();
            setLoadBillFlag(false);
            setLoadBillButtonFlag(false)
            //to delete
            console.log("------patt---" + relaseDate);
            setRelaseDate("");
          }}
        >
          Close
        </Button>
        {buttonToggleFlag && loadBillFlag && (
          <div style={{ margin: "20px" }}>
            <Button
              variant="success"
              size="sm"
              onClick={() => {
                SetPaid();
              }}
            >
              Paid
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
