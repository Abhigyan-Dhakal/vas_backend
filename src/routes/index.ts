import { Router } from "express";
import userRoutes from "./userRoutes";
import loginRoutes from "./loginRoutes";
import vaccineRoutes from "./vaccineRoutes";

const router = Router();

router.use("/users", userRoutes);
router.use("/login", loginRoutes);
router.use("/vaccines", vaccineRoutes);

export default router;
