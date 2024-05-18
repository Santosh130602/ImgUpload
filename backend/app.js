
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const cloudinary = require("./config/cloudinary")

const app = express();
app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
const fileUpload = require("express-fileupload");
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

// Routes
const userRoutes = require("./routes/authRoutes");
const imageRoutes = require('./routes/imageRoutes');
app.use("/auth", userRoutes);
app.use("/upload", imageRoutes);

require("./config/database").connect();
cloudinary.cloudinaryConnect();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});








