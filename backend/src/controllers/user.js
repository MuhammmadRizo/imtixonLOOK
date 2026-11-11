import osFile from "../utils/fileSystem.js";

const getAllUsers = (req, res) => {
  let data = osFile.read("users");

  res.status(200).json({
    status: 200,
    message: "All Users",
    data: data,
  });
};

const addNewUser = (req, res) => {
  const { username, telephone } = req.body;

  let data = osFile.read("users");

  const newUser = {
    userId: data.length ? data.at(-1).userId + 1 : 1,
    username,
    telephone,
  };

  data.push(newUser);
  osFile.write("users", data);

  res.status(201).json({
    status: 201,
    message: "User succesfully added to DB",
  });
};

export default {
  getAllUsers,
  addNewUser,
};
