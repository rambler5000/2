const mysql = require('mysql');

module.exports={
    take:function(category){
        return new Promise((resolve, reject) => {
            var connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'news',
                port:'3306'
            });

            connection.connect();
            connection.query(`select * from news where category like '${category}'`, function (error, results, fields) {
                
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