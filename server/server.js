const path = require('path');
const publicPath = path.join(__dirname, '../angular');
console.log(publicPath);
const cors = require('cors');
const express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Message} = require('./models/message');
var app = express();
app.use(cors());

const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use("/", express.static(publicPath));


app.post('/api/content', (req, res) => {
  console.log("got content", req.body);
  res.status(200).send(JSON.stringify(req.body));
  // var message = new Message({ text: req.body.text });
  // message.save().then((doc) => { res.send(doc); }, 
		// (error) => { res.status(400).send(error);});
});


app.use((req, res, next) => {
    res.sendFile(path.join(publicPath, "index.html")); 
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
