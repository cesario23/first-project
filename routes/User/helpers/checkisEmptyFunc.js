const {checkIsEmpty} = require("../Utils/authenMethods");

function checkIsEmptyFunc(req, res, next){
    let inComingData = req.body;
    const {errorObj} = res.locals;

    for(let key in inComingData){
        if(checkIsEmpty(inComingData[key])){
            errorObj[key]= `${key} cannot be empty`
        }
    }
    if (Object.keys(errorObj).length > 0){
        return res.json(500).json({message:"failed", payload: errorObj });
    }else {
        next();
    }
};

module.exports = {checkIsEmptyFunc};