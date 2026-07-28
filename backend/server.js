const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/mongodb')
const userRoute = require("./routes/userRoute")
const productRoute = require('./routes/productRoute')
const orderRoute = require('./routes/orderRoute')

dotenv.config()


const app = express();
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5001;
connectDB()




app.get("/",(req,res)=>{
    res.send("Api is working");
})


//api endpoints
app.use('/api/users',userRoute)
app.use('/api/products',productRoute)
app.use("/api/orders", orderRoute);

// Serve static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.listen(PORT,()=>{
        console.log(`Server is running at http://localhost:${PORT}`);

})