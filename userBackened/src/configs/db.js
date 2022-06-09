const mongoose = require('mongoose')

const connect = () =>{
    return mongoose.connect(
      "mongodb+srv://shubhamvumap123:12Shubh34@cluster0.sfaoo.mongodb.net/?retryWrites=true&w=majority"
    );
}

module.exports=connect;

