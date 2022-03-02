import { Router } from "express"; //Express router class
import { singup, dashboard } from "../controller/userController"; //controller

const router = Router() //Initialising router

//URLs
router.get("/singup", singup)
router.get("/", dashboard)

export default router // Exporting