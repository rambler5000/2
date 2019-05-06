module.exports={
    give:function(User){
      var mysql = require('mysql')
  
      var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'news',
        port:'3306'
      })

      connection.connect();
      connection.query(`insert into users(user, password, access_level,email) values ('${User.user}', '${User.password}', 0,'${User.email}');`, function (error, results, fields) {
        if (error) throw error;
        
      });
      connection.end();
      
  }

}
