const express = require('express');
const path = require ('path')
const app = express();

const publicFolderPath = path.resolve('public');

app.use(express.static(publicFolderPath));


app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'/views/index.html'))
})



app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor corriendo en puerto 3000');
})
