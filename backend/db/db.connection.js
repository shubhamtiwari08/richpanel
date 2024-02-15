const mongoose = require("mongoose")


const mySecret =  process.env.MONGO_URI


const initializeDatabase = async () => {
  try {
    const connection = await mongoose.connect(mySecret, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (connection) {
      console.log('Connected Successfully');
    }
  } catch (error) {
    console.log('Connection Failed', error);
  }
}



module.exports = { initializeDatabase };