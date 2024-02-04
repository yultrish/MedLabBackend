import Pharmacy from "../model/pharm.js";

// create new drug
const createPharm = async (req, res) => {
  try {
    const { name, description, unitPricing, price, drugCode } = req.body;
    const pharmExist = await Pharmacy.findOne({ name });
    if (pharmExist) {
      return res.status(409).json({ message: "The Drug Already Exist" });
    }
    const pharm = new Pharmacy({
      name,
      description,
      unitPricing,
      price,
      drugCode,
    });
    const savedpharm = await pharm.save();
    return res
      .status(201)
      .json({ message: "Drug Added Successful", savedpharm });
  } catch (error) {
    console.log(error);
    res.status(500).send("This drug cannot be saved ")
  }
};

//fetch all drugs
const getAllPharm = async (req, res) => {
  try {
    const pharm = await Pharmacy.find();
    if(!pharm){
        return res.status(404).json({message:"These drugs do not exist"})
    }
    return res.send(pharm);
  } catch (error) {
    res.status(500), json({ message: "Unable to get these drugs" });
  }
};

//fetch a drug 
const getpharm = async (req, res) => {
  try {
    const { id } = req.params;
    const pharm = await Pharmacy.findById(id);
    if (!pharm) {
      return res.status(404).json({ message: `Drug with id ${id} does not exist` });
    }
    return res.send(pharm);
  } catch (error) {
    return res.status(500).json({ message: "unable to get the drug with the specified id" });
  }
};

// update drug
const updatePharm = async (req, res) => {
  try {
    const { name, description, unitPricing, price, drugCode } = req.body;
    const { id } = req.params;
    const updatedPharm = await Pharmacy.findByIdAndUpdate(
      id,
      { name, description, unitPricing, price, drugCode },
      { new: true }
    );
    return res.send({message:"Drug updated successfully", updatedPharm});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "unable to update the drug with the specified id" });
  }
};

//delete a drug
const deletePharm = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPharm = await Pharmacy.findByIdAndDelete(id);
    return res
      .status(201)
      .json({ message: "Drug Deleted Successfully", deletedPharm });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "unable to delete this drug" });
  }
};

//delete all drugs
const deleteDrugs = async (req, res) => {
  try {
    const deletedDrugs = await Pharmacy.deleteMany({});
    if (!deletedDrugs) {
      res.status(404).json({ message: "These drugs cannot be deleted" });
    }
    res
      .status(201)
      .json({ message: "Drugs Deleted Successfully", deletedDrugs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to delete these drugs" });
  }
};

export default {
  createPharm,
  getAllPharm,
  getpharm,
  updatePharm,
  deletePharm,
  deleteDrugs,
};
