import osFile from "../utils/fileSystem.js";

const addNewOrder = (req, res) => {
  const { count, foodId } = req.body;
  const { userId } = req.params;

  let foods = osFile.read("foods");

  let findedFood = foods.find((food) => food.foodId == foodId);

  let orders = osFile.read("orders");

  if (count > 10) {
    return res.status(400).json({
      status: 400,
      message: "You cannot add ordedrs longer than 10",
    });
  }
  if (count < 0) {
    return res.status(400).json({
      status: 400,
      message: "You cannot add orders 0",
    });
  }

  if (!findedFood) {
    return res.status(404).json({
      status: 404,
      message: "Food not found",
    });
  }

  const newOrder = {
    orderId: orders.length ? orders.at(-1).orderId + 1 : 1,
    userId,
    foodId,
    food: findedFood,
    count,
  };
  orders.push(newOrder);
  osFile.write("orders", orders);

  res.status(201).json({
    status: 201,
    message: "Order successfully created",
    data: newOrder,
  });
};

const getUserOrders = (req, res) => {
  const { userId } = req.params;

  let orders = osFile.read("orders");

  console.log(orders);

  let foundedUser = orders.find((order) => order.userId == userId);

  res.status(200).json({
    status: 200,
    message: "Here is all ${user}'s orders",
    data: foundedUser,
  });
};

export default {
  addNewOrder,
  getUserOrders,
};
