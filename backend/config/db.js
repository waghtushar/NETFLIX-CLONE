import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const db = async () => {
    try {
        const connect = await mongoose.connect(ENV_VARS.MONGO_URL)
        console.log("Database connected : " + connect.connection.host)
    } catch (error) {
        console.error("Error connecting to MONGODB: " + error.message)
        process.exit(1) // 1 means there was an error and 0 means success
    }
}
