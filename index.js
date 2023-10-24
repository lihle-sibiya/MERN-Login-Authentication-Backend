const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");


//Connect to database
mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
.then(()=>console.log(`Connected to MongoDB`))
.catch(err=>console.log(err));

app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/userRoute"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));