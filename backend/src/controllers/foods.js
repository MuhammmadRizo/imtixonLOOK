import osFile from "../utils/fileSystem.js";

const getAllFoods = (req, res) => {
  let foods = osFile.read("foods");

  res.status(200).json({
    status: 200,
    message: "All Foods",
    data: foods,
  });
};

export default {
  getAllFoods,
};
