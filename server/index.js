const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

// ROUTES //

// create a student
app.post("/students", async(req, res) => {
    try {
        const { firstname, lastname, dateofbirth } = req.body;
        const newStudent = await pool.query("INSERT INTO student (firstname, lastname, dateofbirth) VALUES ($1, $2, $3) RETURNING *", [firstname, lastname, dateofbirth]);
        res.json(newStudent.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

// get all students
app.get("/students", async(req, res) => {
    try {
        const allStudents = await pool.query("SELECT * FROM student ORDER BY studentid");
        res.json(allStudents.rows);
    } catch (err) {
        console.error(err.message);
    }
})

// get a student
app.get("/students/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const student = await pool.query("SELECT * FROM student WHERE studentid = $1", [id]);
        res.json(student.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

// update a student 
app.put("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { firstname, lastname, dateofbirth } = req.body;
    const updateStudent = await pool.query(
      "UPDATE student SET firstname = $1, lastname = $2, dateofbirth = $3 WHERE studentid = $4",
      [firstname, lastname, dateofbirth, id]
    );

    res.json("Student was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

// delete a student
app.delete("/students/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const deleteStudent = await pool.query("DELETE FROM student WHERE studentid = $1", [id]);
        res.json("Student was deleted");
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(5000, () => {
    console.log("server has started at port 5000");
})