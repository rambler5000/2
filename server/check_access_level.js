const mysql = require('mysql');

module.exports={
    check:function(user){
        return new Promise((resolve, reject) => {
            var connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'news',
                port:'3306'
            });

            connection.connect();
            connection.query(`select access_level from users where user like '${user}'`, function (error, results, fields) {
                
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