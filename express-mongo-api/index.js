const express = require('express');
const PORT = process.env.PORT || 3000;
const userRoute = require('./routes/users');
const postRoute = require('./routes/post');
require('dotenv').config();
const cors = require('cors')
const morgan = require('morgan');
const mongoos = require('mongoose');

//connecting mongoos
mongoos
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected locally"))
  .catch((err) => console.log(" ❌Connection error", err));
  
  
const app = express();
//middle wire
app.use(express.json())
// app.use(morgan('common'))
// app.use(cors({
//     origin:["http://localhost:5879","http://dugsiiye.com"]
// }
// ))
//wuxu u shaqeeyaa sida diwaan galiye dadka kala hagaa
app.use('/users', userRoute);
app.use("/posts", postRoute);
app.listen(PORT, () => {
  console.log(`running server is ${PORT}`);
});
// console.log(process.env.PORT);