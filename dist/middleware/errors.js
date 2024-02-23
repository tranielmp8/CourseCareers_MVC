const errorHandler = (err, req, res, next) => {
    console.log('Error Message', err.message);
    console.log('Error Code', err.code);
    console.log('Error Stack', err.stack);
    // res.status(500).json({error: 'something went wrong'})
    next(err);
};
export default {
    errorHandler
};
