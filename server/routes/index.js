const router = require("express").Router();
import { join } from "path";
import apiRoutes from "./api";

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(join(__dirname, "../../graph/build/index.html"));
});



export default router;