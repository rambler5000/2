const mysql = require('mysql')

module.exports={
    category:function(category){
        return new Promise((resolve,require)=>{
  
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'news',
            port:'3306'
        })

      connection.connect();
      connection.query(`select news_headline from news where category like '${category}' `, function (error, results, fields) {
        if (error) {
            reject(error);
            return;
        };
        resolve(results);
      });
      connection.end();

      
    });
  }

}