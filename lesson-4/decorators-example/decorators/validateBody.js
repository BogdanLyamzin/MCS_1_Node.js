import HttpError from "../helpers/HttpError.js";

const validateBody = (movieAddSchema) => {
  const func = (req, _, next) => {
    const { error } = movieAddSchema.validate(req.body);
    if (error) {
      return next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

export default validateBody;
