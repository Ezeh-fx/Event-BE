import mongoose from "mongoose";


const uri = "mongodb://127.0.0.1/eventdb"

export const dbconnect = () => {
    try {
        const connect = mongoose.connect(uri);

        console.log("Db is connected successfully");
    } catch (error) {
        console.log(error);
    }
};

