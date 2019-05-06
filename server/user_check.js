const mysql = require('mysql');

module.exports={
    check:function(user,password){
        return new Promise((resolve, reject) => {
            var connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'news',
                port:'3306'
            });

            connection.connect();
            connection.query(`select user, password from users where user like '${user}' and password like '${password}'`, function (error, results, fields) {
                
                if (error) {
                    reject(error);
                    return;
                };
                console.log(results);
                console.log(`select user, password from users where user like '${user}' and password like '${password}'`);
                
                resolve(results);
            });
            connection.end();
        });
    }
}