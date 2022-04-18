const { model, Schema } = require("mongoose");

const postJobSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["remote", "hybride", "full-time", "part-time", "contract",],
      default: "full-time",
    },
    salary: {
      type: Number,
      default: "",
    },
    recruiter_Name: {
      type: String,
      required: true,
    },
    recruiter_email: {
      type: String,
      required: true,
    },

    company_Name: {
      type: String,
      required: true,
    },
    company_Location: {
        type: String,
        required: true,
    }
  },

  { timestamps: true }
);

module.exports = model("PostJob", postJobSchema);
