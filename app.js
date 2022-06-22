const express = require('express');
const app = express()
const dotenv = require('dotenv');
const path = require('path')


/*--config--*/
dotenv.config({ path: './config.env' });

app.use('/static', express.static('public'));
app.use(express.urlencoded({extended:true}));


/*--ejs config--*/
app.set("view engine", 'ejs');








app.get('/', (req, res)=>{
    res.render('index.ejs');
});





/*--Serve--*/
const server = app.listen(process.env.PORT, () => {
    console.log(`Server up over http://localhost:${process.env.PORT}`)
});