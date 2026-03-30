-- Create Database
CREATE DATABASE vaccination_db;
USE vaccination_db;

-- ================= USERS (LOGIN) =================
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50),
  password VARCHAR(50),
  role VARCHAR(20)
);

-- ================= CITIZENS =================
CREATE TABLE citizens (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  aadhaar_number VARCHAR(20) UNIQUE,
  dob DATE
);

-- ================= VACCINATION CENTERS =================
CREATE TABLE vaccination_centers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  pincode VARCHAR(10)
);

-- ================= APPOINTMENTS =================
CREATE TABLE appointments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  citizen_id INT,
  center_id INT,
  date DATE,
  status VARCHAR(20)
);

-- ================= DOSE RECORDS =================
CREATE TABLE dose_records (
  id INT AUTO_INCREMENT PRIMARY KEY,
  citizen_id INT,
  dose_number INT,
  date_administered DATETIME,
  center_id INT
);

-- ================= CERTIFICATES =================
CREATE TABLE certificates (
  id INT AUTO_INCREMENT PRIMARY KEY,
  citizen_id INT,
  dose_record_id INT,
  certificate_uuid VARCHAR(100),
  issued_at DATETIME
);

-- ================= INVENTORY =================
CREATE TABLE vaccine_inventory (
  id INT AUTO_INCREMENT PRIMARY KEY,
  center_id INT,
  vaccine_name VARCHAR(50),
  vials_received INT,
  vials_used INT,
  date DATE
);

-- ================= SAMPLE DATA =================

-- Login user
INSERT INTO users (username, password, role)
VALUES ('admin', '1234', 'admin');

-- Vaccination center
INSERT INTO vaccination_centers (name, pincode)
VALUES ('Center 1', '500001');