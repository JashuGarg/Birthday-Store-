# 🎂 Birthday Store – Practice Project (JWT + Cookies + Server-Side Rendering)

A mini backend project built for **practicing authentication** using **JWT tokens**, **cookies**, and **server-side rendering with EJS**.  
The project focuses on clean file structure, route protection, and user-specific data handling using MongoDB.

---

## 📌 What is this?

This is a personal practice project to explore:
- How authentication works with JWT and cookies
- How to manage users and protect routes
- How to organize backend files cleanly using Express
- How server-side rendering works with EJS templates
- How to show only logged-in user's data
- storing hash password using bcrypt

---

## 🚀 Pages

| Route        | Page              | Description                              |
|--------------|------------------|------------------------------------------|
| `/signup`    | Signup            | Register new users                       |
| `/login`     | Login             | Login and receive JWT in cookie          |
| `/`          | Birthday Form     | Add birthdays (protected route)          |
| `/dashboard` | User Dashboard    | See birthdays added by logged-in user    |

---

## 🔐 Auth Flow (Simplified)

1. **Signup/Login** → Create JWT token with user's `_id`
2. **Store token in cookie** (HTTP-only)
3. Middleware checks for cookie on each protected route
4. Token is verified, user is attached to `req.user`
5. You can only access your own data

---

## 🧱 Tech Stack

- **Node.js** + **Express.js**
- **MongoDB** (via Compass)
- **Mongoose**
- **EJS** (Embedded JS templates)
- **JWT** (`jsonwebtoken`)
- **cookie-parser**
- **brypt**

---

## ✅ What’s Implemented
- User login/signup
- Token generation using JWT
- Cookies for session
- Middleware for route protection
- Filtered data (only your birthdays)
- Separate views using EJS
- Modular file structure

---

## 🛠️ Future Add-ons
# These are improvements planned for future versions of the project:

- .env File Setup using dotenv to safely manage secrets and database URLs

- Logout Route with res.clearCookie()

- Form Validations to check email format, password strength, etc

---

## 👨‍💻 About Me
**Jashu Garg**
, B.Tech CSE – 2nd Year
- Learning backend development, one step at a time 🚀
