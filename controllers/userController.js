const Data = require("../model/data");


exports.createData = async (req, res, next) => {
    
    try {
        const newData = await Data.create(req.body);
        res.status(201).json(newData);
      } catch (error) {
        next(error);
      }
  };

exports.getData = async (req, res, next) => {
    
   
    try {
        const result = await Data.find();
       res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };