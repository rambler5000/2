
      var mysql = require('mysql')
  
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'news',
    port:'3306'
  })
  var arr = [];
  connection.connect();
  connection.query('select * from news', function (error, results, fields) {
    if (error) throw error;
    arr=results;
    console.log(arr);
    console.log(results);

  });
  connection.end();

  module.exports={
      news:function(){
          return arr;
      }
    }
