const mysql = require ("mysql");

const db = mysql.createConnection({
    host: "localhost", 
    user: "root",
    password : "", 
    database: "db_student",
});

db.connect((error)=>{
    if(error){
        console.log("db Connection failed "+error.stack);
        return;
    } else{
        console.log("db Connection Success ");
        return; 
    }
});

module.exports = db;
