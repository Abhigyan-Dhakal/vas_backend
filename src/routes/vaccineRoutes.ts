import { Router } from "express";
import * as vaccineController from "../controllers/vaccineController";

const router = Router();

router.get("/", vaccineController.getAllVaccines);
router.get("/:vaccineId", vaccineController.getVaccine);
router.post("/", vaccineController.addVaccine);
router.put("/:vaccineId", vaccineController.updateVaccine);
router.delete("/:vaccineId", vaccineController.deleteVaccine);

export default router;
