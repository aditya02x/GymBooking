const express = require('express');
const cors = require('cors');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

const connectToDatabase = require('./src/Db/db.js');
const userRoutes = require("./src/routes/User.Route.js");

// ✅ Middleware FIRST
app.use(cors());
app.use(express.json());

// ✅ Then Routes
app.use("/api/users", userRoutes);

connectToDatabase();

app.get("/", (req, res) => {
    res.send("gym booking is live on server");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});