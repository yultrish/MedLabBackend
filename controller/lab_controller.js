import Lab from "../model/lab_model.js";

const createLabItem = async (req, res) => {
  const { labItem, labType, mainCategory, subCategory, labCode, labPrice } =
    req.body;

  try {
    const labItemExists = await Lab.findOne({ labItem });
    if (labItemExists) {
      return res.status(409).json({ message: "this item exists" });
    }
    const item = new Lab({
      labItem,
      labType,
      mainCategory,
      subCategory,
      labCode,
      labPrice,
    });
    const itemSaved = await item.save();
    return res.status(201).send();
  } catch (error) {
    console.log(error);
    // return res.status(500).json({ message: "internal server error" });
  }
};

// get lab items
const fetchLabItems = async (req, res) => {
  try {
    const lab = await Lab.find();
    res.status(200).send(lab);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: error.message})
  }
}


//fetch lab item
const fetchLabItem = async (req, res) => {
  const { id } = req.params;
  try {
    const lab = await Lab.findById(id);
    res.status(200).send(lab);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: error.message})
  }
}


// update lab item
const updateLabItem = async (req, res) => {
  const { id } = req.params;
  try {
    const lab = await Lab.findByIdAndUpdate(id, req.body);
    if(!lab) {
      return res.status(404).json({message: `cannot find lab item with ID ${id}`})
    }
    res.status(200).json(lab)
  } catch(error) {
    console.log(error);
    res.status(500).json({message: error.message});
  }
}

// delete lab item
const deleteLabItem = async (req, res) => {
  const { id } = req.params;
  try {
    const lab = await Lab.findByIdAndDelete(id);
    if(!lab) {
      return res.status(404).json({message: `cannot find item with ID ${id}`})
    }
    res.status(200).json(lab);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: error.message})
  }
};


export default {
  createLabItem,
  fetchLabItems,
  fetchLabItem,
  updateLabItem,
  deleteLabItem
};