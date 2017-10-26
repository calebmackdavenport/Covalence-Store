import * as mysql from 'mysql';

// export let pool = mysql.createPool({
//     connectionLimit: 10,
//     host: process.env.DATABASE_URL,
//     user: process.env.DATABASE_USERNAME,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE_NAME
// });
// export DATABASE_URL=“us-cdbr-iron-east-05.cleardb.net”
// export DATABASE_USERNAME=“bbe5ba8c7cbbbb”
// export DATABASE_PASSWORD=“6e653efc”
// export DATABASE_NAME=“heroku_b20e8a811fe750d”

export let pool = mysql.createPool({
    connectionLimit: 10,
    host: "us-cdbr-iron-east-05.cleardb.net",
    user: "bbe5ba8c7cbbbb",
    password: "6e653efc",
    database: "heroku_b20e8a811fe750d"
});

// SQL procedures

function callProcedure(procedureName: string, args: Array<any> = []): Promise<Array<Array<any>>> {
    return new Promise(function(resolve, reject) {
        pool.getConnection(function(err, connection) {
            if(err) {
                reject(err);
            } else {
                var placeholders = '';
                if (args && args.length > 0) { // if args exists and its array length > 1
                    for (var i = 0; i < args.length; i++) {
                        if (i === args.length - 1) { // if on last argument in array
                            placeholders += '?'; // last one
                        } else {
                            placeholders += '?,'; // before 
                        }
                    }
                }
                var callString = 'CALL ' + procedureName + '(' + placeholders + ')'; 
                connection.query(callString, args, function(err, resultsets) { 
                    if (err) {
                        reject(err);
                    } else {
                        resolve(resultsets);
                    }
                });
            }
        });
    });
}

// Basic return procedure template
export function rows(procedureName: string, args: Array<any> = []) { 
    return callProcedure(procedureName, args) 
        .then(function(resultsets) {
        return resultsets[0];
        });
}

// Return a single row template
export function row(procedureName: string, args: Array<any> = []) {
    return callProcedure(procedureName, args)
        .then(function(resultsets) {
            return resultsets[0][0];
        });
}

// Return when expecting a blank entry
export function empty(procedureName: string, args: Array<any> = []) { 
    return callProcedure(procedureName, args)
        .then(function() {
            return;
        });
}
