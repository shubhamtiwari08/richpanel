
const express = require("express")
const cors = require('cors')
const app = express()
require("dotenv").config()

const userRoutes = require("./routes/userRoutes")
const { initializeDatabase } = require("./db/db.connection");

initializeDatabase();


app.use(express.json());

app.use('/', userRoutes)

app.get('/test', (req, res) => {
   res.json({name:"yeloow"})
})

app.get("/webhook", (req, res) => {
    // Parse the query params
    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];
  
    // Check if a token and mode is in the query string of the request
    if (mode && token) {
      // Check the mode and token sent is correct
      if (mode === "subscribe" && token === config.verifyToken) {
        // Respond with the challenge token from the request
        console.log("WEBHOOK_VERIFIED");
        res.status(200).send(challenge);
      } else {
        // Respond with '403 Forbidden' if verify tokens do not match
        res.sendStatus(403);
      }
    }
  });

app.listen(3001, () => {
  console.log("listening to port 3001")
})
