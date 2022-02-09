import { Router } from "express"; //Express router class
import { index, about } from "../controller/homeController"; //controller

const router = Router() //Initialising router

//URLs
router.get("/", index)
router.get("/about", about)

export default router // Exporting