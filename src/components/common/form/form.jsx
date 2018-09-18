import React from 'react'
import './form.scss';
import { validate, validateTwoItems } from './validation.js';
import Input from '../input/input';

const addValueAndErrorsAttributes = formItems => {
    const newFormItems = [];
    for(let key in formItems){
        const value = formItems[key].mode === "check" ? false : "";
        newFormItems.push({value: value, error: "", ...formItems[key]});
    }
    
    return newFormItems;
}

class Form extends React.PureComponent{
    state = {
        formItems: addValueAndErrorsAttributes(this.props.formItems),
        isFormDirtyByErrors: false
    }

    onChangeInputHandler = (e, index) => {
        const { validationSettings, indexesForValidateTwoItems } = this.props;
        const newFormItems = [...this.state.formItems];
        const { value } = e.target;

        newFormItems[index].value = value;
        
        const settingName = newFormItems[index].validationSetting;

        const firstValue = newFormItems[indexesForValidateTwoItems[0]];
        const secondValue = newFormItems[indexesForValidateTwoItems[1]];

        const itemsContainsValuesForTwoItems = indexesForValidateTwoItems !== undefined && 
            firstValue.value !== "" && secondValue.value !== "" && (index === indexesForValidateTwoItems[0] || 
                index === indexesForValidateTwoItems[1]);


        if(itemsContainsValuesForTwoItems){
            const validateTwoItemsResult = validateTwoItems(firstValue.value, 
                secondValue.value, `Wartości dla pól ${firstValue.label} oraz ${secondValue.label} są różne`);
            newFormItems[indexesForValidateTwoItems[0]].error = validateTwoItemsResult;
            newFormItems[indexesForValidateTwoItems[1]].error = validateTwoItemsResult;
        }
        else{
            newFormItems[index].error = validate(value, validationSettings[settingName], newFormItems[index].label);
        }

        this.setState({formItems: newFormItems, isFormDirtyByErrors: this.checkIsFormDirty(newFormItems)});
    }

    onChangeCheckboxHandler = index => {
        const newFormItems = [...this.state.formItems];
        newFormItems[index].value = !newFormItems[index].value;

        this.setState({formItems: newFormItems});
    }

    validateAllItems = () => {
        const newFormItems = [...this.state.formItems];
        const { validationSettings, indexesForValidateTwoItems } = this.props;
        
        for(let i = 0; i < newFormItems.length; i++){
            const settingName = newFormItems[i].validationSetting;
            const numberOfSettings = Object.keys(validationSettings[settingName]);

            if(numberOfSettings.length > 0){
                const firstValue = newFormItems[indexesForValidateTwoItems[0]];
                const secondValue = newFormItems[indexesForValidateTwoItems[1]];

                const itemsContainsValuesForTwoItems = indexesForValidateTwoItems !== undefined && 
                firstValue.value !== "" && secondValue.value !== "" && (i === indexesForValidateTwoItems[0] || 
                    i === indexesForValidateTwoItems[1]);

                if(itemsContainsValuesForTwoItems){
                    const validateTwoItemsResult = validateTwoItems(firstValue.value, 
                        secondValue.value, `Wartości dla pól ${firstValue.label} oraz ${secondValue.label} są różne`);
                    newFormItems[indexesForValidateTwoItems[0]].error = validateTwoItemsResult;
                    newFormItems[indexesForValidateTwoItems[1]].error = validateTwoItemsResult;
                }
                else{
                    newFormItems[i].error = validate(newFormItems[i].value, validationSettings[settingName], newFormItems[i].label);
                }  
            }
                      
        }

        return { formItems: newFormItems, isFormDirtyByErrors: this.checkIsFormDirty(newFormItems) };
    }

    onSubmit = e => {
        e.preventDefault();
        const validationResult = this.validateAllItems();
        this.setState({formItems: validationResult.formItems, 
            isFormDirtyByErrors: validationResult.isFormDirtyByErrors});
        
    
        this.props.onSubmitHigherHandler(validationResult.formItems);
    }

    checkIsFormDirty = formItems => {
        for(let key in formItems)
            if(formItems[key].error !== "")
                return true;
        
        return false;
    }

    render(){
        const { formItems, isFormDirtyByErrors } = this.state;
        const { validationSettings } = this.props;
        return (
            <form onSubmit={e => this.onSubmit(e)} className="form">
                <div className="inputs-container">
                    {formItems.map((item, index) => {
                        return (
                            <Input onChangeCheckboxHandler={this.onChangeCheckboxHandler}
                            setting={validationSettings[item.validationSetting]}
                            key={item.label} onChangeInputHandler={this.onChangeInputHandler}
                            inputObject={item} index={index}
                            />
                        );
                    })}
                </div>

                <input className="submit-btn" disabled={isFormDirtyByErrors} type="submit" value="Prześlij" />
            </form>
        );
    }
}

export default Form;