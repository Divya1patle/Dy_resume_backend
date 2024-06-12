import express from "express";
import resumeController from "./controller.js";
const routes = express();

routes.post("/", resumeController.createResume);
routes.get("/:resumeid", resumeController.getResume);

export default routes;
