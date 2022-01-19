import { Router } from "express";
import { index } from "../../dist/controller/homeController";

const router = Router()

router.get("/", index)

export default router