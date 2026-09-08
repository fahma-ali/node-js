export const errprHandler = (error, req, res, next) => {
    const status = error.statusCode || 500;
    res.status(status).json({
        success: false,
        message: error.message,
        status
    })
    
}