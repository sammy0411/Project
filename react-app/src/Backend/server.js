const express = require("express");
const userRoutes = require("./routes/userRoutes.js");

app.use("/api/user", userRoutes);
