import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import useRouter from "./routes/user.js"
import cors from "cors"

dotenv.config();

const PORT = 5001;


const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", useRouter);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Database is connected");
    })
    .catch((error) => console.error("Error connecting to the database:", error));

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
