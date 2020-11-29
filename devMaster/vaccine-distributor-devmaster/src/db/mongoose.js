const mongoose=require('mongoose');
// module.exports = {
//     database:'mongodb://localhost:27017/nodekb',
//     secret: 'yoursecret'
//   }
  
const url='mongodb://localhost:27017/nodekb';
const connect=mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
connect.then((db)=>{
    console.log('database is connected correctly to server!');
}).catch((err)=>{
    console.log(err)
})
