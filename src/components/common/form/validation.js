
export const validate = (value, validationSetting, inputName) => {
    const { required, minLength, maxLength, regexExpression } = validationSetting;

    const valueWithoutEmptyCharsLength = value.replace(/ /g, "").length;

    if(required && valueWithoutEmptyCharsLength === 0){
        return "Pole " + inputName + " nie może być puste";
    }

    if(minLength && valueWithoutEmptyCharsLength < minLength && valueWithoutEmptyCharsLength !== 0){
        return `Za mała ilość znaków w polu ${inputName}`;
    }

    if(maxLength && valueWithoutEmptyCharsLength > maxLength && valueWithoutEmptyCharsLength !== 0){
        return `Za dużo znaków w polu ${inputName}`;
    }

    if (regexExpression && !regexExpression.test(value)) 
        return "Nieprawidłowy format pola " + inputName;

    return "";
}

export const validateTwoItems = (firstItem, secondItem, comunicate) => {
    if(firstItem !== secondItem)
        return comunicate;

    return "";
}