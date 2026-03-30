# 💉 Vaccination Drive Management System

## 📌 Overview
A full-stack web application that allows citizens to book vaccination slots, health workers to record doses, and automatically generates QR-based vaccination certificates.

---

## 🚀 Features

### 👤 Citizen Module
- Register and book vaccination slots
- Select center by ID
- Download vaccination certificate

### 🏥 Health Worker Module
- Record vaccine doses
- Auto-generate certificate PDF

### 🔐 Certificate Verification
- QR code-based verification
- Public endpoint to validate certificates

### 📊 Admin Dashboard
- View daily dose counts
- Center-wise vaccination stats

### 📦 Inventory Management
- Track vaccine stock
- Monitor doses administered

---

## 🛠️ Tech Stack

### Frontend
- React.js
- CSS

### Backend
- Node.js
- Express.js

### Database
- MySQL

### Libraries Used
- uuid
- qrcode
- pdfkit (for certificate generation)

---


Backend Setup
cd backend
npm install
node server.js

Frontend Setup
cd frontend
npm install
npm start
