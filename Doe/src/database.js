const mongoose = require('mongoose')
const MONGODB_URI='mongodb+srv://cluster0.lwydv.mongodb.net/myFirstDatabase'
mongoose.connect(MONGODB_URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    //useCreateIndex:true
})
.then(db => console.log('Database is connected'))
.catch(err => console.log(err));