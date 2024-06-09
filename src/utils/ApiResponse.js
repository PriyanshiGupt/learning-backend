export class ApiResponse {
  constructor(statusCode, data, message="Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400
    // The Error Code sheet standards: 
    // Status Code >= 400 is an error response
  }
}