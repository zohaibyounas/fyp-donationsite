const joi = require("joi");


function regValidation(data){
    const schema = joi.object({
        name:joi
        .string()
        .required()
        .min(3)
        .max(20),
        email:joi
        .string()
        .email()
        .required(),
        password:joi
        .string()
        .required(),
        address:joi
        .string()
        .min(5)
        .max(100)
        
    })
  const valid =  schema.validate(data);
  return valid;
}

function loginValidation (data){
    const schema = joi.object({
        email:joi
        .string()
        .email()
        .required(),
        password:joi
        .string()
        .required()
    })
    const valid = schema.validate(data);
    return valid;
}

module.exports.regValidation= regValidation;
module.exports.loginValidation=loginValidation;