const router = require("express").Router();
const {
  createUser,
  deleteUser,
  getAUser,
  getAllUsers,
  updateUser,
} = require("../controllers/UserController");



router.get("/users", getAllUsers);
router.get("/user/:id", getAUser);
router.post("/createuser", createUser);
router.patch("/user/:id", updateUser);
router.delete("/deleteuser", deleteUser);



module.exports = router;
