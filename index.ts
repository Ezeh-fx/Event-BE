import express from 'express';
import {dbconnect} from "./config/db"


const app= express();

const port: number = 2006

app.use(express.json());

app.listen(port, () => {
    console.log("Server is connected");
    dbconnect()
});