import express from "express"
import dotenv from "dotenv"
import ConnectedDb from "./config/db.js"
import pharmRouter from "./router/pharm.js"
import labRouter from "./router/lab_routes.js"
import cors from "cors"
import morgan from "morgan"
ConnectedDb()
dotenv.config()

const app = express()
const PORT = process.env.PORT || 4020

//middle wares
app.use(express.json())
app.use(morgan("dev"))
app.use(cors({origin:"*"}))
app.use("/pharm", pharmRouter)
app.use("/api", labRouter);

app.get("/",(req, res)=>{
    res.send("welcome to medLab")
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})