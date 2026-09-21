import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config()
const app = express();
mongoose.connect(process.env.MONGO_URI).then(()=>console.log("CONNECTED MONGODB")).catch(()=>console.log("NOT CONNECTED MONGODB"))
const port=process.env.PORT
app.get('/', (req, res) => {
    res.send("hello tast managment system")
})
app.listen(port, () => {
    
}).on("error", (error) => {
    console.log("❌ Server error:", err);
})