const express = require("express");
const bodyParser=require('body-parser')
const app = express();

const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')
app.use('/admin',adminRoutes)
app.use(shopRoutes)

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not foud</h1>')
})

app.use(bodyParser.urlencoded({extended:false}))

app.listen(3000);
