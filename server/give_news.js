module.exports={
    give:function(News,user){
      var mysql = require('mysql')
  
      var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'news',
        port:'3306'
      })

      connection.connect();
      connection.query(`insert into news(news_headline,category,news_text,users) values ('${News.news_headline}','${News.category}','${News.news_text}','${user}');`, function (error, results, fields) {
        if (error) throw error;
        
      });
      connection.end();
      
  }

}