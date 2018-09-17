import React from 'react'
import './register.scss';
import Form from '../common/form/form';
import { registerSettings, registerValidationSettings } from '../common/form/settings.js';


class Register extends React.PureComponent{
    onSubmitHigherHandler = formValues => {
        // handle REgister
        console.log(formValues);
    }

    render(){
        return (
            <div className="register-form-container">
                <h2>
                    <i className="fa fa-registered"></i>
                    <div>
                        <span>Rejestracja</span>
                        <span>wypełnij formularz i zostań kolejnym użytkownikiem</span>
                    </div>
                </h2>
                    <Form validationSettings={registerValidationSettings} indexesForValidateTwoItems={[2,3]} 
                    formItems={registerSettings} onSubmitHigherHandler={this.onSubmitHigherHandler}/> : 
            </div>
        );  
    }
}

export default Register;