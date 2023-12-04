const express = require("express");
const app = express();
const router = require ("./router/auth-router");
const connectWithDb = require("./utils/db");
connectWithDb();

app.use(express.json());
app.use("/api/auth", router);

const PORT = 3000;


app.listen(PORT,()=>{
    console.log('serevr is running port:3000');
});

