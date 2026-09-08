import express from 'express';
import userRoute from './routes/users.js';
import postRoute from './routes/post.js';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { logger } from './middlewares/logger.js';
import { notfound } from './middlewares/notfound.js';
import { errprHandler } from './middlewares/errorHandler.js';
const PORT = process.env.PORT || 4000;
dotenv.config();
const app = express();
//middle wire
app.use(express.json())
//custom middleware
app.use(logger);
//connecting mongoos
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected locally"))
  .catch((err) => console.log(" ❌Connection error", err));
  
  
// app.use(morgan('common'))
// app.use(cors({
//     origin:["http://localhost:5879","http://dugsiiye.com"]
// }
// ))
//wuxu u shaqeeyaa sida diwaan galiye dadka kala hagaa
app.use('/users', userRoute);
app.use("/posts", postRoute);
//last ware must be
app.use(notfound)
app.use(errprHandler)
app.listen(PORT, () => {
  console.log(`running server is ${PORT}`);
});
// console.log(process.env.PORT);