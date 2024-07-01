const express=require('express');
const app=express();
const router=require('./router');
app.use(express.json());
const port=3001;
app.use('/router',router);

app.listen(port ,()=>{
console.log("hello");
 });