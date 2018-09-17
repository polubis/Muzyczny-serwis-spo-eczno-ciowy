
export const validate = (value, validationSetting) => {
    const { required, minLength, maxLength, regexExpression } = validationSetting;

    const valueWithoutEmptyCharsLength = value.replace(/ /g, "").length;

    if(required && valueWithoutEmptyCharsLength === 0){
        return true;
    }

    if(minLength && valueWithoutEmptyCharsLength < minLength && valueWithoutEmptyCharsLength !== 0){
        return true;
    }

    if(maxLength && valueWithoutEmptyCharsLength > maxLength && valueWithoutEmptyCharsLength !== 0){
        return true;
    }

    if (regexExpression && !regexExpression.test(value)) 
        return true;

    return false;
}

export const validateTwoItems = (firstItem, secondItem) => {
    if(firstItem !== secondItem)
        return true;

    return false;
}

export const validateAllRules = (value, validationSetting, currentErrors) => {
    const settingKeys = Object.keys(validationSetting);

    for(let i = 0; i < settingKeys.length; i++)
        currentErrors[i].isError = validate(value, validationSetting);
    
    return currentErrors;
}