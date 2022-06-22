const app = require('./app');
const dotenv = require('dotenv');




// /*--config--*/
// dotenv.config({path:'/config.env'})













app.listen(3300 || process.env.PORT, ()=>{
    console.log(`Server working over PORT No: ${process.env.PORT}`)
});