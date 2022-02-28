import { Router } from "express"; //Express router class
import { login, singup } from "../controller/serverController"; //controller

const router = Router() //Initialising router

//URLs
router.use("/singup", singup)
router.use("/login", login)

export default router // Exporting