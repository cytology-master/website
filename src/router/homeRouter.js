import { Router } from "express";
import { index, about } from "../../dist/controller/homeController";

const router = Router()

router.get("/", index)
router.get("/about", about)

export default router