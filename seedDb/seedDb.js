require("dotenv").config();
const mongoose = require("mongoose");
const Course = require("../src/models/Course");
const Event = require("../src/models/Event");
// const { mockModelsData } = require("../models");
const { faker } = require("@faker-js/faker");
const {
  randomItemFromArray,
  capitalizeFirstLetter,
  getRandomBetween,
} = require("./seedDbUtils");
const { mockCourseData } = require("./courses");
//const { instructors } = require("../src/models/Course");

// const ticketType = {
//   BUG: "BUG",
//   NEW_FEATURE: "NEW_FEATURE",
//   OTHER: "OTHER",
// };

// const ticketPriority = {
//   CRITICAL: "CRITICAL",
//   HIGH: "HIGH",
//   MEDIUM: "MEDIUM",
//   LOW: "LOW",
// };

// const ticketStatus = {
//   NEW: "NEW",
//   IN_DEVELOPMENT: "IN_DEVELOPMENT",
//   IN_REVIEW: "IN_REVIEW",
//   READY_FOR_TEST: "READY_FOR_TEST",
//   COMPLETED: "COMPLETED",
// };

const createMockCourse = () => {
  //   return {
  //     name: 'bachata',
  //     type: randomItemFromArray(Object.values(ticketType)),
  //     priority: randomItemFromArray(Object.values(ticketPriority)),
  //     status: randomItemFromArray(Object.values(ticketStatus)),
  //     title: `${capitalizeFirstLetter(
  //       faker.word.adjective()
  //     )} ${capitalizeFirstLetter(faker.color.human())} ${faker.animal.cat()}`,
  //     description: capitalizeFirstLetter(
  //       faker.lorem.words(getRandomBetween(5, 15))
  //     ),
  //   };
  return mockCourseData;
};

const populateDbWithMockData = async (connectionString) => {
  try {
    mongoose.set("strictQuery", false); // https://stackoverflow.com/questions/74747476/deprecationwarning-mongoose-the-strictquery-option-will-be-switched-back-to
    const conn = await mongoose.connect(connectionString);
    console.log(`MongoDB connected: ${conn.connection.host}`);

    await Course.deleteMany();

    const courseRes = await Course.create(mockCourseData);

    const coursesToCreate = [];
    // @ts-ignore
    courseRes.forEach((course) => {
      for (let i = 0; i < getRandomBetween(1, 4); i++) {
        coursesToCreate.push(createMockCourse(course.id));
      }
    });

    courseRes = await Course.create(coursesToCreate);

    // @ts-ignore
    /* for (const project of projectRes) {
			const tickets = ticketRes.filter((ticket) => project._id.equals(ticket.project)).map((ticket) => ticket._id)
			await Project.findByIdAndUpdate(project._id, {
				tickets: tickets,
			})
		} */

    console.log("Database successfully populated with test data");
  } catch (error) {
    console.error(error);
  } finally {
    process.exit(0);
  }
};

populateDbWithMockData(process.env.CONNECTION_STRING);
