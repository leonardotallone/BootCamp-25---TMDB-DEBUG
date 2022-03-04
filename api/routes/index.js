const express = require("express");
const router = express.Router();

const searchRoutes = require("./search");
const discoverRoutes = require("./discover");

router.use("/search", searchRoutes);
router.use("/discover", discoverRoutes);

module.exports = router;
