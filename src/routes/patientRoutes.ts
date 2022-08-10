import { Router } from "express";
import * as patientController from "../controllers/patientController";

const router = Router();

router.post("/", patientController.createPatient);
router.get("/", patientController.getAllPatients);
router.get("/:patientId", patientController.getPatient);

export default router;
