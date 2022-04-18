-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: hospital_management_system
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `active_patient_tb`
--

DROP TABLE IF EXISTS `active_patient_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `active_patient_tb` (
  `pat_id` int NOT NULL AUTO_INCREMENT,
  `doctor_id` int DEFAULT NULL,
  `ward_bed_id` varchar(100) DEFAULT NULL,
  `pres_id` int DEFAULT '0',
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `phone_no` varchar(45) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `blood_gr` varchar(45) DEFAULT NULL,
  `date_of_admission` date DEFAULT NULL,
  `date_of_release` date DEFAULT NULL,
  `patient_problem` varchar(45) DEFAULT NULL,
  `payment_status` varchar(45) DEFAULT NULL,
  `bill_amount` int DEFAULT NULL,
  PRIMARY KEY (`pat_id`),
  KEY `fk_doctor_id_idx` (`doctor_id`),
  KEY `fk_ward_bed_id_idx` (`ward_bed_id`),
  KEY `fk_pres_id_idx` (`pres_id`),
  CONSTRAINT `fk_doctor_id` FOREIGN KEY (`doctor_id`) REFERENCES `doctor_tb` (`doctor_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_pres_id` FOREIGN KEY (`pres_id`) REFERENCES `prescription_tb` (`pres_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_ward_bed_id` FOREIGN KEY (`ward_bed_id`) REFERENCES `ward_bed_charges_tb` (`ward_bed_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `active_patient_tb`
--

LOCK TABLES `active_patient_tb` WRITE;
/*!40000 ALTER TABLE `active_patient_tb` DISABLE KEYS */;
INSERT INTO `active_patient_tb` VALUES (20,101,'C-201',83,'prakash@gmail.com','123','9874563210','Prakash Kadam','1997-04-08','A+','2022-04-22','2022-04-23','Cancer','paid',0),(21,101,'C-201',84,'kiran@gmail.com','123','9874563210','Kiran Desale','1997-02-06','Ab+','2022-04-16','2022-04-30','Cancer','paid',0),(22,101,'C-201',85,'deepak@gmail.com','123','9923319410','deepak Jadhav','1997-05-01','AB+','2022-04-30','2022-04-23','Cancer','unpaid',0),(23,101,'C-201',88,'prasad@gmail.com','123','9923319410','Prasad Gumati','1997-02-06','Ab+','2022-04-16','2022-04-23','Cancer','unpaid',0);
/*!40000 ALTER TABLE `active_patient_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor_tb`
--

DROP TABLE IF EXISTS `doctor_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor_tb` (
  `doctor_id` int NOT NULL AUTO_INCREMENT,
  `emp_id` int DEFAULT NULL,
  `charges` int DEFAULT NULL,
  `specialization` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`doctor_id`),
  KEY `fk_emp_id_idx` (`emp_id`),
  CONSTRAINT `fk_emp_id` FOREIGN KEY (`emp_id`) REFERENCES `emp_tb` (`emp_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor_tb`
--

LOCK TABLES `doctor_tb` WRITE;
/*!40000 ALTER TABLE `doctor_tb` DISABLE KEYS */;
INSERT INTO `doctor_tb` VALUES (101,15,5000,'Cancer');
/*!40000 ALTER TABLE `doctor_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emp_tb`
--

DROP TABLE IF EXISTS `emp_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emp_tb` (
  `emp_id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(45) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL,
  `security_question` varchar(200) DEFAULT NULL,
  `security_answer` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `hire_date` date DEFAULT NULL,
  `phone_no` varchar(45) DEFAULT NULL,
  `salary` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emp_tb`
--

LOCK TABLES `emp_tb` WRITE;
/*!40000 ALTER TABLE `emp_tb` DISABLE KEYS */;
INSERT INTO `emp_tb` VALUES (7,'receptionist','rec@gmail.com','$2a$10$TBqBKIKYHS9rH6vOO/7.I.X6R4WF3wJuEBV/bXNnf3Lx3wHo7X28u','How are you?','Good','Davinder','1997-04-21','2017-04-22','9874563210','45000'),(9,'admin','adm@gmail.com','$2a$10$TBqBKIKYHS9rH6vOO/7.I.X6R4WF3wJuEBV/bXNnf3Lx3wHo7X28u','How are you?','Good','Amit','1998-05-06','2018-04-22','9874563210','45000'),(10,'accountant','acc@gmail.com','$2a$10$TBqBKIKYHS9rH6vOO/7.I.X6R4WF3wJuEBV/bXNnf3Lx3wHo7X28u','How are you?','Good','Kiran','1997-03-30','2019-04-13','9874563210','45000'),(15,'doctor','doc@gmail.com','$2a$10$TBqBKIKYHS9rH6vOO/7.I.X6R4WF3wJuEBV/bXNnf3Lx3wHo7X28u','How are you?','Good','Chinmay','1997-08-13','2020-02-18','9874556321','45000');
/*!40000 ALTER TABLE `emp_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicine_tb`
--

DROP TABLE IF EXISTS `medicine_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicine_tb` (
  `medicine_name` varchar(100) NOT NULL,
  `price` int DEFAULT NULL,
  PRIMARY KEY (`medicine_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicine_tb`
--

LOCK TABLES `medicine_tb` WRITE;
/*!40000 ALTER TABLE `medicine_tb` DISABLE KEYS */;
INSERT INTO `medicine_tb` VALUES ('-',0),('Azol',80),('Levothyroxine ',150),('paracetamol',60),('Vicodin',120);
/*!40000 ALTER TABLE `medicine_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prescription_tb`
--

DROP TABLE IF EXISTS `prescription_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prescription_tb` (
  `pres_id` int NOT NULL AUTO_INCREMENT,
  `medicine_name` varchar(100) DEFAULT NULL,
  `no_of_days` int DEFAULT NULL,
  PRIMARY KEY (`pres_id`),
  KEY `fk_medicine_name_idx` (`medicine_name`),
  CONSTRAINT `fk_medicine_name` FOREIGN KEY (`medicine_name`) REFERENCES `medicine_tb` (`medicine_name`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prescription_tb`
--

LOCK TABLES `prescription_tb` WRITE;
/*!40000 ALTER TABLE `prescription_tb` DISABLE KEYS */;
INSERT INTO `prescription_tb` VALUES (0,'-',0),(83,'Azol',15),(84,'Levothyroxine ',18),(85,'paracetamol',15),(88,'Azol',78);
/*!40000 ALTER TABLE `prescription_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ward_bed_charges_tb`
--

DROP TABLE IF EXISTS `ward_bed_charges_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ward_bed_charges_tb` (
  `ward_bed_id` varchar(100) NOT NULL,
  `charges` int DEFAULT NULL,
  `status` int DEFAULT NULL,
  PRIMARY KEY (`ward_bed_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ward_bed_charges_tb`
--

LOCK TABLES `ward_bed_charges_tb` WRITE;
/*!40000 ALTER TABLE `ward_bed_charges_tb` DISABLE KEYS */;
INSERT INTO `ward_bed_charges_tb` VALUES ('C-201',5000,1);
/*!40000 ALTER TABLE `ward_bed_charges_tb` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-15 20:44:07
