import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"

import clientRoutes from "./routes/client.js"
import commonRoutes from "./routes/common.js"
import managementRoutes from "./routes/management.js"
import salesRoutes from "./routes/sales.js"

// data import

import User from "./models/User.js"
import Product from "./models/Product.js"
import ProductStat from "./models/ProductStat.js"
import Transactions from "./models/Transaction.js"
import OverallStat from "./models/OverallStat.js"
import AffiliateStat from "./models/AffiliateStat.js"
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "./data/index.js"
// configurations
dotenv.config()

const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// routes
app.use("/client", clientRoutes)
app.use("/management", managementRoutes)
app.use("/sales", salesRoutes)
app.use("/general", commonRoutes)

// Mongoose Setup

const PORT = process.env.PORT || 9000

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server is currently on port ${PORT}`))
    // add data once
    // User.insertMany(dataUser)
    // Product.insertMany(dataProduct)
    //ProductStat.insertMany(dataProductStat)
    // Transactions.insertMany(dataTransaction)
    //OverallStat.insertMany(dataOverallStat)
    //AffiliateStat.insertMany(dataAffiliateStat)
  })
  .catch((error) => console.log(`${error} did not connect`))
