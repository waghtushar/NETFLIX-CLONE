import express from "express";
import path from "path"
import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvShowRoutes from "./routes/tv.route.js";
import searchRoutes from "./routes/search.route.js";

import { ENV_VARS } from "./config/envVars.js";
import { db } from "./config/db.js";

import { protectRoute } from "./middlewares/proctectRoute.middleware.js";
import cookieParser from "cookie-parser";


const app = express()

const PORT = ENV_VARS.PORT
const __dirname=path.resolve
app.use(express.json())

app.use(express.json()) 
app.use(cookieParser())

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/movie", protectRoute, movieRoutes)
app.use("/api/v1/tv", protectRoute, tvShowRoutes)
app.use("/api/v1/search", protectRoute, searchRoutes)

app.listen(PORT, () => {
    db()
    console.log(`server started at http://localhost:${PORT}`)
})