const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/prac', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(res=>{
    console.log('connected to database')
}).catch(e=>{
    console.log(e)
})