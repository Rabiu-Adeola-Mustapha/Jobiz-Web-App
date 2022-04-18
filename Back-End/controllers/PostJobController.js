const PostJob = require("../models/postJobModel");
const createError = require("http-errors");
const mongoose = require("mongoose");

const getAllJobPost = async (req, res, next) => {
  try {
    const job = await PostJob.find();
    res.status(200).json({ data: job });
  } catch (error) {
    next();
  }
};

const getAJobPost = async (req, res, next) => {
  try {
    const id = req.params.id;

    const job = await PostJob.findById(id);

    if (!job) {
      throw createError(404, "Request can not be found");
    }
    res.status(200).json({ data: job });
  } catch (error) {
    if (error instanceof mongoose.CastError) {
      next(createError(400, "Inavalid request"));
      return;
    }
    next(error);
  }
};

const createJobPost = async (req, res, next) => {
  try {
    // const job = await PostJob.create({
    //   title: req.body.title,
    //   type: req.body.type,
    //   salary: req.body.salary,
    //   recruiter_Name: req.body.recruiter_Name,
    //   recruiter_email: req.body.recruiter_email,
    //   company_Name: req.body.company_Name,
    //   company_Location: req.body.company_Location,
    // });

    const job = new PostJob(req.body);
    const savedJob = await PostJob.create(job);
    res.status(400).json({ data: savedJob });
  } catch (error) {
    if (error.name === "validationEror") {
      return next(createError(422, error.message));
    }
    next(error);
  }
};

const deleteJobPost = async (req, res, next) => {
  try {
    const id = req.params.id;

    const jobdelete = await PostJob.findByIdAndDelete(id);

    if (!jobdelete) {
      throw createError(404, "Request does not Exist");
    }
    res
      .status(200)
      .json({ data: jobdelete, message: "Request deleted successfully" });
  } catch (error) {
    if (error instanceof mongoose.CastError) {
      next(createError(400, "Invalid Request"));
      return;
    }
    next(error);
  }
};

const updateJobPost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const update = req.body;
    const job = PostJob.findByIdAndUpdate(id, update, { new: true });

    if (!job) {
      throw createError(404, "Invalid request");
    }

    res.status(200).json({ data: job, message: "Updated sucessfully" });
  } catch (error) {
    if (error instanceof mongoose.CastError) {
      return next(createError(400, "Invalid Request"));
    }
    next(error);
  }
};

module.exports = {
  getAllJobPost,
  getAJobPost,
  createJobPost,
  deleteJobPost,
  updateJobPost,
};
