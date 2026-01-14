
# 🚀 Node.js Complete Guide

> **From Basics to Production – Master Backend Development**

Welcome to the ultimate Node.js learning repository! This guide is designed for beginners, students, and developers who want to master backend development using Node.js, Express, MongoDB, and more.

---

## 📚 What You'll Learn

- **Core Node.js Concepts**
- **Express.js Framework**
- **REST API Development**
- **MongoDB Integration**
- **Authentication & Authorization (JWT)**
- **Real-time Communication (Socket.IO)**
- **Security & Best Practices**
- **Production Deployment with Nginx**
- **Scalable Project Architecture**

---

## 🛠️ Tech Stack

| Technology      | Description                |
|----------------|----------------------------|
| Node.js        | JavaScript runtime         |
| Express.js     | Web framework              |
| MongoDB        | NoSQL database             |
| Mongoose       | MongoDB ODM                |
| JWT            | Auth tokens                |
| Socket.IO      | Real-time communication    |
| Nginx          | Reverse proxy/deployment   |
| JavaScript ES6+| Modern JS features         |
| dotenv         | Env variable management    |
| Postman        | API testing                |

---


## 📌 Node.js Fundamentals

### 🔹 What is Node.js?
- JavaScript runtime built on Chrome’s V8 engine
- Runs JavaScript outside the browser
- Non-blocking, event-driven architecture

### 🔹 Key Concepts
- Single-threaded
- Event Loop
- Asynchronous programming
- Fast & scalable


### 📦 Core Node.js Modules

| Module  | Description                |
|---------|----------------------------|
| fs      | File system operations     |
| http    | Create web servers         |
| path    | Handle file paths          |
| os      | OS-related utilities       |
| events  | Event-driven programming   |

### 🔄 Event Loop (Important)
- Handles async operations
- Executes callbacks without blocking main thread
- **Phases:** Timers → I/O callbacks → Poll → Check → Close callbacks


### ⚡ Asynchronous Programming
- **Callbacks**
- **Promises**
- **Async/Await** (recommended)

```js
async function getData() {
  const data = await fetchData();
  console.log(data);
}
```


## 🌐 Express.js (Core Framework)

### 🔹 What is Express?
- Minimal & fast Node.js framework
- Build APIs and web apps
- Simplifies routing, middleware, and requests

### 🔹 Basic Express Server
```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(5000, () => console.log("Server running"));
```

### 🔗 Routing in Express
```js
app.get("/users", getUsers);
app.post("/users", createUser);
app.put("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);
```


## 🧩 Middleware (Very Important)

**What is Middleware?**

Middleware functions execute between request and response.

**Types:**
- Built-in middleware
- Custom middleware
- Third-party middleware

```js
app.use((req, res, next) => {
  console.log("Request received");
  next();
});
```


## 🗄️ MongoDB & Mongoose

### 🔹 MongoDB
- NoSQL database
- Stores data in JSON-like documents

### 🔹 Mongoose
- ODM (Object Data Modeling)
- Schema-based data modeling

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

module.exports = mongoose.model("User", userSchema);
```


## 🔐 Authentication & Authorization (JWT)

### 🔹 What is JWT?
- Secure way to transmit user data
- Stateless authentication
- Token-based system

**JWT Flow:**
1. User logs in
2. Server generates token
3. Client stores token
4. Token sent with requests

```js
jwt.sign({ id: user._id }, process.env.JWT_SECRET);
```


### 🛡️ Protected Routes (JWT Middleware)
```js
const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).send("Access Denied");
  next();
};
```


## 🔄 Socket.IO (Real-Time Communication)

### 🔹 What is Socket.IO?
- Enables real-time, bidirectional communication
- Used for:
  - Chat apps
  - Live notifications
  - Online games

```js
io.on("connection", (socket) => {
  socket.on("message", (data) => {
    io.emit("message", data);
  });
});
```


## ⚠️ Error Handling
```js
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});
```


## 🌱 Environment Variables

```env
PORT=5000
MONGO_URI=your_mongo_url
JWT_SECRET=your_secret
```

Use with dotenv:
```js
require("dotenv").config();
```


## 🏗️ MVC Architecture

```
├── controllers
├── models
├── routes
├── middleware
├── config
├── app.js
```


## 🚀 Deployment & Nginx

### 🔹 Why Nginx?
- Reverse proxy
- Load balancing
- Better performance
- SSL handling

**Typical Flow:**
```
Client → Nginx → Node.js App
```


## 🧠 Best Practices

- Use async/await
- Centralized error handling
- Environment variables
- Modular folder structure
- Input validation
- Secure headers
- Rate limiting


## 📦 Installation & Setup

```bash
git clone https://github.com/yourusername/nodejs-complete-guide
cd nodejs-complete-guide
npm install
npm run dev
```


## 📬 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## ⭐ Support

If you find this repo helpful, please **star** ⭐ the repository and share it with others!