// const asyncHandler = (fn) => {
//   return async (req, res, next) => {
//     try{ 
//       await fn(req, res, next)
//     } catch(error) {
//       console.log(`utils::asyncHandler::${error}`)
//       res.status(error.code || 500).json({
//         success: false, 
//         message: error.message || 'Something went wrong'
//       })
//     }
//   }
// }


/**
 * Function same as above, just a more fancy and tricky way to return a function from a function 
 * () => () => {}
 */
// const asyncHandler = (func) => async (req, res, next) => {
//   try {
//     await func(req, res, next);
//   } catch(error) {
//     res.status(error.code || 500).json({
//       success: false, 
//       message: error?.message || 'Something went wrong'
//     })
//   }
// }


/**
 * 
 * @param requestHandler 
 * @returns function (req, res, next)
 * It is a wrapper that wraps the requestHandler function in a Promise Catch Block.
 */
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    return Promise.resolve(requestHandler(req, res, next)).catch(error => {
      // res.status(error.code || 500).json({
      //   success: false, 
      //   message: error.message || 'Something Went Wrong'
      // })
      next(error)
    })
  }
}



export { asyncHandler}