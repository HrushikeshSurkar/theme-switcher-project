import express from "express";
import themeController from "../controlers/themeController.js";

const router = express.Router();

router.get("/", themeController.getAllThemes);

router.post("", themeController.addNewThemes);

router.put("/:id", themeController.updateTheme);

router.delete("/:id", themeController.deleteTheme);

export default router;
