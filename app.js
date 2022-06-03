const express = require ('express')
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
const port= process.env.PORT || 3000;
app.use( express.static(publicPath) );

app.listen(port, () => {
    console.log(`servidor corriendo en el puerto ${port} `);
 });
 app.get("/",(req,res)=> { 
     res.sendFile(path.join(__dirname,"views/home.html"))
      })