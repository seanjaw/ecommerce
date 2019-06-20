const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const app = express(); 
console.log('CORS', cors());
app.use(cors());

app.get('/api/test', (request, response) => {
    response.send('<h1>API Status [<span style = "color:green">OK</span>]</h1>')
});

app.listen(PORT, () =>{
    console.log('Server Running at localhost: ', + PORT);
}).on('error', (err) =>{
    console.log('Server listen error, your probably already have a aserve on PORT:' + PORT)
})