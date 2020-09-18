var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

//Connect to Atlas
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://test:test@cluster0.a2zwt.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>console.log('MongoDB Connected'))
.catch(err=>console.log(err));

//Create schema for data
var listSchema = new mongoose.Schema({
  item: String
});

//Create model
var List = mongoose.model('shopping', listSchema);

//Controller functions
module.exports = function(app){
  app.get('/list', function(req, res){
    List.find({}, function(err, data){
      if (err) throw err;
      res.render('list', {items: data})
    });
  });

  app.post('/list', urlencodedParser, function(req, res){
    var newItem = List(req.body).save(function(err, data){
      if(err) throw err;
      res.render('list', {items: data});
    })
  });

  app.delete('/list/:item', function(req, res){
    List.find({item: req.params.item.replace(/-/g," ")}).deleteOne(function(err, data){
      if(err) throw err;
      res.render('list', {items: data});
    });
  });
};
