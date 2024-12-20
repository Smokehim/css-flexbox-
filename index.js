const express = require("express")
const app = express()
const mongoose = require("mongoose")

let port =4000
app.listen((port), () => {
    console.log(`connected to port`);
});
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
const URL = 'mongodb://127.0.0.1:27017/marketing'
mongoose.connect(URL).then(result=>console.log("connected to database"))
.catch(err=>console.log(err))

app.get('/', (req, res)=>{
    res.render('html', {title:'JuiceInk'});

})
app.post('/post', (req,res)=>{
    const {password, email, fname} = req.body
})