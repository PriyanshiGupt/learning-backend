export class ApiError extends Error {
  constructor(
    statusCode, 
    message="Something Went Wrong", 
    errors=[], 
    stack=""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.message = message;
    console.log(this.data)
    this.data = null;
    console.log(this)
    this.success = false;


    if(stack) { 
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}