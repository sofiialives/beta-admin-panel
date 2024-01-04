const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/usersCtrl");
const { schema } = require("../../models/usersModel");
const { validateBody, authenticate } = require("../../middlewares");

router.post("/register", validateBody(schema.registerSchema), ctrl.register);
router.post("/login", validateBody(schema.loginSchema), ctrl.login);
router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
