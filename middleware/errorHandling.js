import {StatusCodes} from 'http-status-codes'

const errorHandling = (error, req, res, next) => {
  console.log(error);
  const defaultError = {
    statusCode:StatusCodes.INTERNAL_SERVER_ERROR,
    msg:'Something went wrong. Try again later'
  }
  res.status(defaultError.statusCode).json({meg:error})
}

export default errorHandling