const express = require("express");
const router = express.Router();

//GET/api/v1/courses - Get all courses
router.get("/", getAllCourses);

//GET /api/v1/courses/:courseId - Get a course by Id
router.get("/:courseId", getCourseById);

//POST /api/v1/courses - Create new course
router.post("/", createNewCourse);

//PUT /api/v1/courses/:courseId - Update course by Id
router.put("/:courseId", updateCourseById);

//DELETE /api/v1/courses/:courseId - Delete course by Id
router.delete("/:courseId", deleteCourseById);

module.exports = router;
