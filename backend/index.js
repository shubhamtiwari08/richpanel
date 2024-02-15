
const express = require("express")
const cors = require('cors')
const app = express()
require("dotenv").config()

const userRoutes = require("./routes/userRoutes")
const { initializeDatabase } = require("./db/db.connection");

initializeDatabase();


app.use(express.json());

app.use('/', userRoutes)

app.listen(3001, () => {
  console.log("listening to port 3001")
})
