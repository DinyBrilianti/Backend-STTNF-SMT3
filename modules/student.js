const db = require ("../config/database.js");

const { get } = require ("../routes/api.js");

class Student{
    static all(){
        const sql = "select * from students";
        return Student.query (sql, null, (result)=>result);
    }
    static async create(body){
        const sql = "insert into students set ?";
        const id = await Student.query (sql, body, (result)=>result.insertId);
        return Student.find(id);
    }
    
    static find(id){
        const sql = "select * from students where id = ?";
        return Student.query(sql, id, (result)=>result);
  
    }
    static query(sql, body, callback){
        return new Promise ((resolve, reject)=>{
            db.query(sql, body, (error, result)=>{ 
                
                resolve (callback(result));
            });
        });
  
    }
}
module.exports = Student;

// fungsi edit
// fungsi tambah