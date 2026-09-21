import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';

import { errprHandler } from "./middleWare/globalError.js";

import taskRoute from './route/task.js'
import authRoute from "./route/auth.js";
import adminRoute from "./route/authorize.js";

dotenv.config()
const app = express();
mongoose.connect(process.env.MONGO_URI).then(()=>console.log("CONNECTED MONGODB")).catch(()=>console.log("NOT CONNECTED MONGODB"))
const port=process.env.PORT
app.get('/', (req, res) => {
    res.send("hello tast managment system")
})
app.use(express.json());

app.use("/task", taskRoute);
app.use("/auth", authRoute);
app.use("/admin", adminRoute);

app.use(errprHandler);


app.listen(port, () => {
    console.log(`✅ Server is listening on port ${port}`);
}).on("error", (error) => {
    console.log("❌ Server error:", err);
})