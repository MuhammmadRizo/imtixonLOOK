import Joi from "joi";

export default {
  userAdd: (req, res, next) => {
    let userAddSchema = Joi.object({
      username: Joi.string().min(4).required(),
      telephone: Joi.number().min(12).required(),
    });

    next();
  },
};
