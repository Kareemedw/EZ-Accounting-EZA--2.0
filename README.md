# EZ-Accounting (Mobile Wallet & Budgeting App)

EZ-Accounting is a full-stack web application designed to help users manage personal finances, track salary, organize expenses, and monitor spending in real time. The app allows users to manage mandatory bills, recurring subscriptions, and additional expenses while automatically calculating total expenditures and remaining salary balance.

The frontend provides an interactive budgeting interface, while the backend is built with Node.js and Express.js to support server-side functionality and future API/database integration.

## 🚀 Features

- **Salary Input:** Enter monthly salary details.
- **Utility Bills:** Add and track expenses such as mortgage/rent, electricity, water, gas, WiFi/phone, and groceries.
- **Recurring Subscriptions:** Manage recurring bills like Netflix, Hulu, and other subscriptions.
- **Dynamic Expense Management:** Add and remove expenses dynamically using HTML templates.
- **Automatic Calculations:**
  - Total mandatory bills
  - Total recurring subscriptions
  - Combined expenditure
  - Salary balance after deductions
  - Expense tracking for additional costs
- **Interactive UI:** Inline forms, delete buttons, expandable budget cards, and balance tracking inputs.
- **Backend Support:** Node.js and Express.js backend structure for handling server-side logic and future database/API features.

## 🛠️ Tech Stack

### Frontend

- **HTML5** – Structure of the app
- **CSS3** – Styling and responsive layout
- **Vanilla JavaScript (ES6)** – Core logic, DOM manipulation, calculations, and interactivity

### Backend

- **Node.js** – JavaScript runtime environment
- **Express.js** – Backend framework for creating routes, handling requests, and building server-side functionality

## 📂 Project Structure

```txt
.
├── index.html              # Main HTML file
├── pages/
│   └── index.css           # Stylesheet for layout and components
├── scripts/
│   └── index.js            # Frontend JavaScript logic
├── routes/                 # Express route files
├── controllers/            # Backend controller logic
├── models/                 # Data models for future database integration
├── app.js                  # Express server setup
└── README.md               # Project documentation
⚡ How It Works
Enter Salary – Add monthly salary in the Salary section.
Add Bills & Subscriptions – Use input fields to create expense items dynamically.
Automatic Totals – The app automatically updates total expenditures.
Salary Balance – Displays remaining salary after all deductions.
Expense Tracking – Lets users track additional expenses beyond mandatory bills.
Backend Structure – Express.js routes and controllers provide a foundation for server-side features.
📊 Example Flow
Input salary → $5000
Add utility bills → Electricity $200, Water $100
Add subscriptions → Netflix $15, Hulu $10
Total expenditure auto-calculated → $325
Salary balance auto-calculated → $4675
Track extra expenses, such as Uber $50
Final balance updates instantly
🧩 Key JavaScript Functions
calculateTotal() – Sums all utility bills and subscriptions
addExpenseTotal() – Adds utility and subscription totals together
balance() – Calculates salary minus total expenses
calculateTotalBalance() – Subtracts additional expenses from salary balance
balanceTrack() – Updates the final tracking balance
🖥️ Backend Overview

The backend is built with Node.js and Express.js. It is designed to support future full-stack features such as:

API routes for budget data
User authentication
Database storage
CRUD operations for bills, subscriptions, and expenses
Server-side validation

Example backend setup:

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "EZ-Accounting API is running" });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
✅ Future Improvements
Add database support with MongoDB.
Add local storage or backend persistence to save budget data.
Implement user authentication for multiple users.
Add charts for income vs expenses.
Create REST API endpoints for expenses and budgets.
Export financial reports to CSV or PDF.
Add mobile wallet integration features.
Improve deployment with separate frontend and backend hosting.
🚀 Deployment

Live Project:

This webpage is deployed using GitHub Pages.

👤 Author

Kareem Edwards – Software Engineer
GitHub: https://github.com/Kareemedw
```
