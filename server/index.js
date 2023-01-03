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

// create a teacher
app.post("/teachers", async(req, res) => {
    try {
        const {firstname, lastname, title} = req.body;
        const newTeacher = await pool.query("INSERT INTO teacher (firstname, lastname, title) values ($1, $2, $3) RETURNING *", [firstname, lastname, title]);
        res.json(newTeacher.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

// create a subject
app.post("/subjects", async(req, res) => {
    try {
        const {subjectname, teacherid} = req.body;
        const newSubject = await pool.query("INSERT INTO subject (subjectname, teacherid) values ($1, $2) RETURNING *", [subjectname, teacherid]);
        res.json(newSubject.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

// create a participation
app.post("/participations", async(req, res) => {
    try {
        const {subjectid, studentid} = req.body;
        const newParticipation = await pool.query("INSERT INTO participation (subjectid, studentid) values ($1, $2) RETURNING *", [subjectid, studentid]);
        res.json(newParticipation.rows[0]);
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

// get all teachers
app.get("/teachers", async(req, res) => {
    try {
        const allTeachers = await pool.query("SELECT * FROM teacher ORDER BY teacherid");
        res.json(allTeachers.rows);
    } catch (err) {
        console.error(err.message);
    }
})

// get all subjects
app.get("/subjects", async(req, res) => {
    try {
        const allSubjects = await pool.query(
          "SELECT s.subjectid, s.subjectname, t.teacherid, t.firstname, t.lastname from teacher as t INNER JOIN subject as s on t.teacherid = s.teacherid ORDER BY subjectid;"
        );
        res.json(allSubjects.rows);
    } catch (err) {
        console.error(err.message);
    }
})

// get all participations
app.get("/participations", async(req, res) => {
    try {
        const allParticipations = await pool.query(
          "SELECT p.subjectid, sb.subjectname, p.studentid, st.firstname, st.lastname from subject as sb INNER JOIN participation as p on sb.subjectid = p.subjectid inner join student st on st.studentid = p.studentid ORDER BY p.subjectid;"
        );
        res.json(allParticipations.rows);
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

// get a teacher
app.get("/teachers/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const teacher = await pool.query("SELECT * FROM teacher WHERE teacherid = $1", [id]);
        res.json(teacher.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})
// get a subject
app.get("/subjects/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const subject = await pool.query("SELECT * FROM subject WHERE subjectid = $1", [id]);
        res.json(subject.rows[0]);
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

// update a teacher
app.put("/teachers/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { firstname, lastname, title } = req.body;
        const updateTeacher = await pool.query(
            "UPDATE teacher SET firstname = $1, lastname = $2, title = $3 WHERE teacherid = $4", 
        [firstname, lastname, title, id]
        );
        res.json("Teacher was updated!");
    } catch (err) {
        console.error(err.message);
    }
})
// update a subject
app.put("/subjects/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { subjectname, teacherid } = req.body;
        const updateSubject = await pool.query(
            "UPDATE subject SET subjectname = $1, teacherid = $2 WHERE subjectid = $3", 
        [subjectname, teacherid, id]
        );
        res.json("Subject was updated!");
    } catch (err) {
        console.error(err.message);
    }
})

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

// delete a teacher
app.delete("/teachers/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const deleteTeacher = await pool.query("DELETE FROM teacher WHERE teacherid = $1", [id]);
        res.json("Teacher was deleted");
    } catch (err) {
        console.error(err.message);
    }
})
// delete a subject
app.delete("/subjects/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const deleteSubject = await pool.query("DELETE FROM subject WHERE subjectid = $1", [id]);
        res.json("Subject was deleted");
    } catch (err) {
        console.error(err.message);
    }
})

// delete a participation
app.delete("/participations/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const deleteParticipation = await pool.query("DELETE FROM participation WHERE subjectid = $1", [id]);
        res.json("Participation was deleted");
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(5000, () => {
    console.log("server has started at port 5000");
})