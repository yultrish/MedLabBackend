
import express from "express";
import lab_controller from "../controller/lab_controller.js";

const labRouter = express.Router();
labRouter.post("/", lab_controller.createLabItem);
labRouter.get("/", lab_controller.fetchLabItems);
labRouter.get("/:id", lab_controller.fetchLabItem);
labRouter.put("/:id", lab_controller.updateLabItem);
labRouter.delete("/:id", lab_controller.deleteLabItem);

export default labRouter;