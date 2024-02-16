const passport = require('passport')
const session = require('express-session')
const express = require("express")
const cors = require('cors')
const app = express()
require("dotenv").config()

const userRoutes = require("./routes/userRoutes")
const { initializeDatabase } = require("./db/db.connection");
const { User } = require('./models/User.model')

initializeDatabase();

app.use(passport.initialize());
app.use(passport.session());
app.use(session({secret:"thisisecretekey"}));

app.use(express.json());
app.use(cors())

app.use('/auth', userRoutes)

app.get('/test', (req, res) => {
   res.json({name:"yeloow"})
})

// Creates the endpoint for our webhook 
app.post('/webhook', (req, res) => {  
 
    let body = req.body;
  
    // Checks this is an event from a page subscription
    if (body.object === 'page') {
  
      // Iterates over each entry - there may be multiple if batched
      body.entry.forEach(function(entry) {
  
        // Gets the message. entry.messaging is an array, but 
        // will only ever contain one message, so we get index 0
        let webhook_event = entry.messaging[0];
        console.log(webhook_event);
      });
  
      // Returns a '200 OK' response to all requests
      res.status(200).send('EVENT_RECEIVED');
    } else {
      // Returns a '404 Not Found' if event is not from a page subscription
      res.sendStatus(404);
    }
  
  });


// Adds support for GET requests to our webhook
app.get('/webhook', (req, res) => {

    // Your verify token. Should be a random string.
    let VERIFY_TOKEN = "test_taq_token"
      
    // Parse the query params
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];
      
    // Checks if a token and mode is in the query string of the request
    if (mode && token) {
    
      // Checks the mode and token sent is correct
      if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        
        // Responds with the challenge token from the request
        console.log('WEBHOOK_VERIFIED');
        res.status(200).send(challenge);
      
      } else {
        // Responds with '403 Forbidden' if verify tokens do not match
        res.sendStatus(403);      
      }
    }
  });


passport.serializeUser(function(user,done){
    done(null,user.id);
})

passport.deserializeUser(function(id,done){
    // User.findById(id,function(err,user){
    //     done(err,user);
   return done(null,id);
})



app.listen(3001, () => {
  console.log("listening to port 3001")
})
