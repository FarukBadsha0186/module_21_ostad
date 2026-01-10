const express = require("express");
const {
  registerUser,
  loginUser,
  getProfile,
  getAllUsers,
  updateUser,
  deleteUser
} = require("../controllers/userController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getProfile);
router.get("/users", protect, getAllUsers);
router.put("/user/:id", protect, updateUser);
router.delete("/user/:id", protect, deleteUser);

module.exports = router;
