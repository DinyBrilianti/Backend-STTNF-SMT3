const express = require ("express");

const StudentController = require("../controllers/StudentController.js");

const router = express.Router();

router.get("/", (req, res)=>{ 
    });
    
router.get("/student", StudentController.all);
    
router.post("/student", StudentController.store);
    
// router.put("/student/:id", StudentController.update);
    
router.delete("/student/:id", StudentController.destroy);
    
router.get("/student/:id", StudentController.find);

module.exports = router;