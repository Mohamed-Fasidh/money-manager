#  Money Manager Web Application

A full-stack Money Manager application to track income, expenses, transfers, and analyze financial data with monthly, weekly, and yearly reports.

---

##  Problem Statement

Develop a Money Manager Web Application that helps users manage personal and business finances by recording income and expenses, generating spending reports, and tracking financial data over time.

---

##  Features Implemented

###  Core Features
- Add **Income** and **Expense** transactions
- Track transactions with:
  - Date & time
  - Category (Food, Fuel, Medical, Salary, etc.)
  - Division (Personal / Office)
  - Description
- **Edit transactions within 12 hours** (auto-restricted after 12 hours)
- View **transaction history**

###  Dashboard & Reports
- Monthly, Weekly, and Yearly report dropdown
- Dashboard summary:
  - Total Income
  - Total Expense
  - Balance
- **Category-wise summary chart**
- Filter transactions by:
  - Category
  - Division
  - Date range

###  Account Management
- Transfer money between accounts (Cash ↔ Bank)
- Each transfer creates:
  - Expense from source account
  - Income to destination account
- **Account-wise balance view**

---

##  Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- Chart.js

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

##  Project Architecture

money-manager-frontend/
├── src/
│ ├── components/
│ │ ├── AddModal.jsx
│ │ ├── EditModal.jsx
│ │ ├── TransferModal.jsx
│ │ ├── FilterBar.jsx
│ │ ├── ReportSelector.jsx
│ │ └── CategorySummaryChart.jsx
│ ├── App.jsx
│ └── main.jsx

money-manager-backend/
├── src/
│ ├── models/
│ │ └── Transaction.js
│ ├── routes/
│ │ └── transactionRoutes.js
│ ├── index.js
│ └── db.js


---

##  API Endpoints

### Transactions
| Method | Endpoint | Description |
|------|---------|-------------|
| GET | `/api/transactions` | Get transactions with filters |
| POST | `/api/transactions` | Add transaction |
| PUT | `/api/transactions/:id` | Edit transaction (12h rule) |
| POST | `/api/transactions/transfer` | Account transfer |

### Reports
| Method | Endpoint |
|------|---------|
| GET | `/api/reports/monthly` |
| GET | `/api/reports/weekly` |
| GET | `/api/reports/yearly` |

---

##  How to Run Locally

### Backend
```bash
cd money-manager-backend
npm install
npm start
```
### .env

Create .env file:
```bash
MONGO_URI=your_mongodb_atlas_url
PORT=5000
```

### Frontend
```bash
cd money-manager-frontend
npm install
npm run dev
```

### Live Deployment
# Frontend:



# Backend:



## Demo Video
# Demo Video Link:

