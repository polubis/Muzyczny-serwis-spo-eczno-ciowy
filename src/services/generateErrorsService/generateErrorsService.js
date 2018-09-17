import { getRegexStructure } from '../../components/common/form/regexConfig';
import { translateKeys } from '../../components/common/form/settings';

export const generateErrors = (formItem, setting, index) => {
    const validators = Object.keys(setting);
    const errors = [];

    for(let key in validators){
        errors.push({isError: false, 
            description: generateDescription(validators[key], setting[validators[key]])});
    }
    return errors;    
}

const generateDescription = (validator, valueToReach) => {
    switch(validator){
        case "required":
            return "To pole jest wymagane";     
        case "minLength":
            return "To pole musi posiadać conajmniej " + valueToReach + " znaki";
        case "maxLength":
            return "To pole może posiadać maksymalnie " + valueToReach + " znaki";
        case "regexExpression":
            return "To pole musi posiadać stukturę " + getRegexStructure(valueToReach);
        case "mustBeLike":
            return "To pole musi posiadać taką samą wartość co pole " + translateKeys(valueToReach);
    }
}