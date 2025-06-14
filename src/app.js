import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
)

//common middelware
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())

// import routes
import healthcheckRouter from "./routes/healthcheck.routes.js"
import userRouter from "./routes/user.routes.js"

// routes
app.use("/app/v1/healthcheck", healthcheckRouter)
app.use("/app/v1/users", userRouter)

export { app }