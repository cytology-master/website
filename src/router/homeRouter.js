import { Router } from "express"; //Express router class
import { index, about, links } from "../controller/homeController"; //controller

const router = Router() //Initialising router

//URLs
router.get("/", index)
router.get("/about", about)
router.get("/links", links)

export default router // Exporting