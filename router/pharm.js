import Pharmacy from "../controller/pharm.js";
import express from "express"
const pharmRouter = express.Router()
pharmRouter.post("/newDrug", Pharmacy.createPharm)
pharmRouter.get("/drugs", Pharmacy.getAllPharm)
pharmRouter.get("/drug/:id", Pharmacy.getpharm)
pharmRouter.put("/update/drug/:id", Pharmacy.updatePharm)
pharmRouter.delete("/delete/drug/:id", Pharmacy.deletePharm)
pharmRouter.delete("/delet/drugs", Pharmacy.deleteDrugs)

export default pharmRouter