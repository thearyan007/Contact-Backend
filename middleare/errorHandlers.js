import { constants } from "../utils/constants.js";

export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found!!",
        message: err.message,
        stackTree: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden!!",
        message: err.message,
        stackTree: err.stack,
      });
      break;
    case constants.UNAUTHORIZE:
      res.json({
        title: "Unauthorize!!",
        message: err.message,
        stackTree: err.stack,
      });
      break;
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation error!!",
        message: err.message,
        stackTree: err.stack,
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        title: "Server error!!",
        message: err.message,
        stackTree: err.stack,
      });
      break;
    default:
      console.log("No error found!!");
      break;
  }
};
