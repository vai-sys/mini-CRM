const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv=require("dotenv")
const contactsRouter = require('./routes/contacts');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());


mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("Error connecting to MongoDB:", err));

app.use('/api/contacts', contactsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});