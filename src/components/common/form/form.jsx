import React from 'react'
import './form.scss';
import { validate, validateTwoItems, validateAllRules } from './validation.js';
import Input from '../input/input';
import { generateErrors } from '../../../services/generateErrorsService/generateErrorsService.js';

const addValueAndErrorsAttributes = (formItems, settings) => {
    const newFormItems = [];
    for(let i = 0; i < formItems.length; i++){
        const setting = settings[formItems[i].validationSetting];
        newFormItems.push({value: "", errors: generateErrors(formItems[i], setting, i), ...formItems[i]});
    }
    
    return newFormItems;
}


class Form extends React.PureComponent{
    state = {
        formItems: addValueAndErrorsAttributes(this.props.formItems, this.props.validationSettings),
        isFormDirtyByErrors: false
    }
    onChangeInputHandler = (e, index) => {
        const { validationSettings, indexesForValidateTwoItems } = this.props;
        const newFormItems = [...this.state.formItems];
        const { value } = e.target;

        newFormItems[index].value = value;
        
        const settingName = newFormItems[index].validationSetting;

        newFormItems[index].errors = validateAllRules(value, validationSettings[settingName], newFormItems[index].errors);

        this.setState({formItems: newFormItems, isFormDirtyByErrors: this.checkIsFormDirty(newFormItems)});
    }

    validateAllItems = () => {
        const newFormItems = [...this.state.formItems];
        const { validationSettings, indexesForValidateTwoItems } = this.props;

        for(let i = 0; i < newFormItems.length; i++){
            const settingName = newFormItems[i].validationSetting;
            newFormItems[i].errors = validateAllRules(newFormItems[i].value, validationSettings[settingName], newFormItems[i].errors);
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
        for(let key in formItems){
            const isError = formItems[key].errors.find(i => {
                return i.isError === true
            });

            if(isError)
                return true;
        }
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
                            <Input setting={validationSettings[item.validationSetting]}
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