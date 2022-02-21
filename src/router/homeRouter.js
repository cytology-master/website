import { Router } from "express"; //Express router class
<<<<<<< HEAD
import { index, about } from "../../dist/controller/homeController"; //controller
=======
import { index, about } from "../controller/homeController"; //controller
>>>>>>> andrey

const router = Router() //Initialising router

//URLs
router.get("/", index)
router.get("/about", about)

export default router // Exporting