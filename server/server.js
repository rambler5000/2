// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
var jwtDecode = require('jwt-decode');




//CREATE EXPRESS APP
const app = express();
app.use(cors());
 
// DECLARE JWT-secret
const JWT_Secret = 'your_secret_key';
var testUser = { email: 'zxc', password: '1234'};


var news_take = require('../server/take_news.js');
var news_give = require('../server/give_news.js');
var news_category = require('../server/take_news_category.js'); 
var user_give = require('../server/give_user.js'); 
var login_check = require('../server/login_check.js'); 
var user_check = require('../server/user_check.js'); 
var check_access_level = require('../server/check_access_level');
var delete_news = require('../server/delete_news');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist/my-app/')));



app.post('/api/authenticate', async function(req, res)  { //аунтефикация
 console.log(req.body);
 let foo = await user_check.check(req.body.user,req.body.password);
 //console.log(foo);
 //console.log(foo[0].user);
 //console.log(foo[0].password);

  if (req.body) {
    var user = req.body;
    //console.log(user)
 console.log(user);
 console.log('dgfsdfs');
 console.log(foo[0]);
    if (foo[0].user===req.body.user && foo[0].password === req.body.password) {
      var token = jwt.sign(user, JWT_Secret);
      console.log(token);
      res.status(200).send({
        signed_user: user,
        token: token
      });
    } else {
      res.status(403).send({
        errorMessage: 'Authorisation required!'
      });
    }
  } else {
    res.status(403).send({
      errorMessage: 'Please provide email and password'
    });
  }
 
});



//var test1 = require('../bd/conect_bd.js');
//test1.test();


//var misc = require('../routes/routes.js');

//console.log(misc.say());
//console.log(misc.num());



//var news = require('../server/take_news.js');
//news.take();

//var news = require('../server/give_news.js');
//news.give();



//let val = myModule.hello();

// Set our api routes
//app.use('/routes', api);


app.post('/give_user', bodyParser.json(),async function (req, res)  { //добавление нового пользователя в БД
  console.log(req.body);

  //console.log(foo);

  user_give.give(req.body);
    
  });

  app.post('/user_check', bodyParser.json(),async function (req, res)  { //проверка существования пользователя
    let foo=await login_check.check(req.body.user);

    let n=Object.keys(foo).length;
    //console.log(String(n));
    res.send(String(n));
      
    });

    app.get('/access_check', bodyParser.json(),async function (req, res)  { //проверка уровня доступа
      console.log(req.query)
      let user = jwtDecode(req.query.token);

      let access = await check_access_level.check(user.user);
      console.log(access[0].access_level);
      res.send(access[0].access_level);
        
      });


app.get('/take_news_categor', async function(req, res,category) {//получение новостей по категорирям из БД

  //console.log(req.query)
  let foo = await news_category.category(req.query.category);
  let n=Object.keys(foo).length;
  let arr=[];
  for(let i=0;i<n;i++)
  {
    arr[i]=foo[i].news_headline
  }

  res.send(arr);


});

app.get('/server_test', async function(req, res,id) {//получение новости из БД
  
  let foo = await news_take.take(req.query.category);
  res.send(foo[req.query.id]);

});


app.get('/delete_news_check', async function(req, res) {//проверка возможности удалить новость

  let check = false;
  //console.log(req.query)
  //console.log(req.query);
  //console.log(req.query.token);
  let user = jwtDecode(req.query.token);
  //console.log(user);
  //console.log(user.user);
  let access = await check_access_level.check(user.user);
  //console.log(access[0].access_level);

  if(access[0].access_level==1 && user.user==req.query.user){
    console.log("est dostyp");
    check = true;
  }
  if(access[0].access_level==2){
    console.log("est dostyp");
    check = true;
  }

  res.send(check);

});

app.get('/delete_news', async function(req, res) {//удаление новости из БД

  //console.log(req.query.news_headline);
  delete_news.delete(req.query.news_headline);


});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

app.post('/give_news', bodyParser.json(), (req, res) => { //добавление новости в БД
//console.log(req.body);
let user = jwtDecode(req.body.token);
  //console.log(user);
  //console.log(user.user);
  news_give.give(req.body,user.user);
  
});

// respond with "hello world" when a GET request is made to the homepage


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/my-app/index.html'));
});