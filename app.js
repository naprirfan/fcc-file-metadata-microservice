//setup variables & modules
var express = require("express");
var app = express();
var multer = require("multer");
var upload = multer({ dest: './uploads' })
app.use('/public', express.static(__dirname + '/public'));

//define view engine
app.set("views", __dirname + "/views");
app.set("view engine", "pug");

/*
-------------
ROUTES
-------------
*/
app.get("/", function(req,res){
	res.render("index");
});

app.post('/api/getfilemetadata', upload.single('upl'), function (req, res, next) {
	res.writeHead(200, {"Content-Type" : "application/json"});
	res.end(JSON.stringify({size: req.file.size}));
})

app.get("*", function(req,res){
	res.end("404!");
});

//start server
app.listen(process.env.PORT || 5000);
console.log("I'm listening...");