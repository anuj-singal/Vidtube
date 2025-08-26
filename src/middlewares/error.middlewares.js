import mongoose from "mongoose";

import { ApiError } from "../utils/ApiError.js";

const errorHandler = (err, req, res, next) =>{
    let error = err
    
    if(!(error instanceof ApiError)) {
        const statusCode = error.statusCode || error instanceof mongoose.Error ? 400 : 500;

        const message = error.message || "Something went wrong";
        error = new ApiError(statusCode, message, error?.errors || [], err.stack)
    }

    const response = {
        ...err,
        message : error.message,
        ...(process.env.NODE_ENV === "development" ? { stack : error.stack} : {})
    }

    return res.status(error.statusCode).json(response);
}

export{
    errorHandler
} 

//*************************not needed as error was resolved ***********************************/
//***********it works as a middleware as if ApiError not worked as that was extended from Error class
// so created this method .....I can copy it to some other project if needed ,if error occured.............
// **************as this code will remains same no such changes needed */