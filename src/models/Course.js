const mongoose = require("mongoose");

const instructors = {
  jeremy: "Jeremy Davila",
  linnea: "Linnea Persson",
  sofia: "Sofia Dahlström",
  fredrica: "Fredrica Eurén",
  kevin: "Kevin Armas Letelier",
  hernan: "Hernan Martinez",
  linn: "Linn Adman",
  gabriel: "Gabriel Moraga",
  linda: "Linda Björkman",
};

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  previousKnowledge: {
    type: String,
    required: true,
  },
  instructors: {
    enum: [Object.values(instructors)],
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  daysOfWeek: {
    enum: [
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
      "SUNDAY",
    ],
    //required: true,
  },
  occasions: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  danceType: {
    enum: [
      "SALSA",
      "BACHATA",
      "CUBAN_SALSA",
      "LA_SALSA",
      "BACHATA_LADIES_STYLE",
    ],
    //required: true,
  },
  level: {
    enum: [0, 1, 2, 3, 4, 5],
    default: 0,
  },
  term: {
    enum: ["VT", "HT"],
    //required: true,
  },
  classLengthMins: {
    type: Number,
  },
  couplesDance: {
    type: Boolean,
    default: true,
  },
  maxParticipants: {
    type: Number,
    required: true,
  },

  booking: [
    {
      name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
      },
      partner: {
        type: String,
      },
      email: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
      },
      phoneNumber: {
        type: Number,
        minLength: 10,
        maxLength: 10,
      },
      danceRole: {
        enum: ["LEADER", "FOLLOWER"],
      },
      discount: {
        enum: ["STUDENT", "MULTIPLE_COURSE", "COUPLE", "LADY_STYLING"],
      },
    },
  ],
});

module.exports = mongoose.model("Course", CourseSchema);
