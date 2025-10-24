
# 🧳 Tour Buddy

**Tour Buddy** is a full-stack MERN web application designed to simplify the process of finding and booking tours online. It features a user-friendly interface, admin management panel, and robust backend integration.

This project was developed as part of our **Third Year Engineering Academic Project**.

---

## 🚀 Features

- 🌍 **Browse Tours** – Explore a wide range of exciting tours across multiple destinations  
- 🔍 **Smart Search** – Filter tours by location, price range, and category  
- 📆 **Easy Booking** – Book tours with real-time availability updates  
- 🔐 **Secure Authentication** – JWT-based user login and signup system  
- 🛠 **Admin Dashboard** – Manage tours, bookings, and users efficiently  
- 📩 **Stay Connected** – Contact form and newsletter subscription support  
- 📱 **Responsive UI** – Optimized for both mobile and desktop devices  
  

---

## 🛠 Tech Stack

- **Frontend**: React.js, Tailwind CSS, Vite  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Auth**: JWT-based Authentication  

---

## 👨‍💻 Project Contributors

This project was developed as part of a college academic project by:

- **Nandish N** – Full Stack Development (Frontend + Backend), Project Lead  
- **Aravind R** – Frontend Development, UI Components  
- **Ashok MN** – Frontend Development, Page Integration  
- **Mohammad Irfan** – Database Models, Admin Dashboard  

---

## 📂 Folder Structure

```

Tour-Buddy/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── shared/
│   │   └── ...
├── README.md
└── package.json

````

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Nandishreddy2903/Tour-Buddy.git
cd Tour-Buddy
````

### 2. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3. Set up Environment Variables

Create a `.env` file inside the `backend/` folder with:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Run the Project

```bash
# Start Backend
cd backend
npm run dev

# Start Frontend
cd ../frontend
npm run dev
```

