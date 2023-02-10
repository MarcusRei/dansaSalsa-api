const express = require("express");
const router = express.Router();

//GET/api/v1/events - Get all events
router.get("/", getAllEvents);

//GET /api/v1/events/:eventId - Get a event by Id
router.get("/:eventId", getEventById);

//POST /api/v1/events - Create new event
router.post("/", createNewEvent);

//PUT /api/v1/events/:eventId - Update event by Id
router.put("/:eventId", updateEventById);

//DELETE /api/v1/events/:eventId - Delete event by Id
router.delete("/:eventId", deleteEventById);

module.exports = router;
