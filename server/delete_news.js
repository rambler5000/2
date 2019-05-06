const mysql = require('mysql')

module.exports={
    delete:function(news_headline){
        return new Promise((resolve,require)=>{
  
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'news',
            port:'3306'
        })

      connection.connect();
      connection.query(`DELETE FROM news WHERE news_headline like '${news_headline}'`, function (error, results, fields) {
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