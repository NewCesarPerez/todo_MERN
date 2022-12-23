import { Router } from "express";
import taskRoutes from "./task.routes.js";
import methodOverride from "method-override";

const router = Router();
router.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);
router.get("/", (req, res) => {
  res.send("Probando routes.");
});
router.use("/task", taskRoutes);
export default router;
