const router = require("express").Router();
const {
  createJobPost,
  deleteJobPost,
  getAJobPost,
  getAllJobPost,
  updateJobPost,
} = require("../controllers/PostJobController");




router.get("/jobs", getAllJobPost);
router.get("/job/:id", getAJobPost);
router.post("/createjobpost", createJobPost);
router.patch("/upadatejobpost/:id", updateJobPost);
router.delete("/deletejobpost/:id", deleteJobPost);






module.exports = router;
