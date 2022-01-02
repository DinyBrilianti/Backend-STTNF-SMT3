const Student = require("../modules/student.js");

class StudentController{

async all(req, res){
    const student = await Student.all();
    const respon = {
        "Message": "Menampilkan Seluruh Data Student",
        "Data" : student
    };
    res.json(respon);
}
async store(req, res){
    const student = await Student.create(req.body);
    const respon = {
        "Message": "Menambahkan Data Student",
        "Data" : student
    };
    res.json(respon);
}

}
const object = new StudentController();

module.exports = object;

//controler fungsi edit
//controler fungsi tambah 