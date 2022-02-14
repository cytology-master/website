import { Router } from "express"; //Express router class
import { singup } from "../controller/userController"; //controller

const router = Router() //Initialising router

//URLs
router.get("/singup", singup)

export default router // Exporting