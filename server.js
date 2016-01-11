
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Ws Test Node.js');
});
app.get('/ws',function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ ws: 'wsNodeJS',listObj:[{nombre:'item 1','Descripcion':'des 1'},{nombre:'item 2','Descripcion':'des 2'}],error:0,errorMsg:'Sin error' }));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})

