import { Router } from "express"; //Express router class
import { singup } from "../controller/serverController"; //controller

const router = Router() //Initialising router

//URLs
router.use("/singup", singup)

export default router // Exporting