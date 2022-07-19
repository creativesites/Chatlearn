
const mongoose = require('mongoose');
try {
    mongoose.connect('mongodb+srv://admin:higibertigibet@cluster0.abb0bhi.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
        console.log('db connected') 
  } catch (error) {
    console.log(error)
  }
const User = require('./models/User');
