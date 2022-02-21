import { Router } from "express"; //Express router class
import { lesson } from "../controller/lessonController"; //controller

const router = Router() //Initialising router

//URLs
router.get("/", lesson)

export default router // Exporting