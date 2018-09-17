import { config as regexConfig } from './regexConfig';


export const translateKeys = value => {
    const translations = {
        "password": "Hasło",
        "repeatedPassword": "Powtórzone hasło"
    }

    return translations[value];
}

export const registerSettings = [
    {label: "Nazwa użytownika", mode: "input", type: "text", placeholder: "wpisz nazwę użytkownika...", validationSetting: "username"},
    {label: "Adres email", mode: "input", type: "email", placeholder: "wpisz adres email...", validationSetting: "email"},
    {label: "Hasło", mode: "input", type: "password", placeholder: "wpisz hasło...", validationSetting: "password"},
    {label: "Powtórzone hasło", mode: "password", type: "password", placeholder: "wpisz powtórzone hasło...", validationSetting: "repeatedPassword"},
    {label: "Imię", mode: "input", type: "text", placeholder: "wpisz imię...", validationSetting: "firstName"},
    {label: "Nazwisko", mode: "input", type: "text", placeholder: "wpisz nazwisko...", validationSetting: "lastName"},
    {label: "Data urodzenia", mode: "date-picker", type: "date", validationSetting: "birthDate"},
    {label: "Płeć", mode: "check", type: "checkbox", placeholder: "wybierz swoją płeć...", validationSetting: "sex"}
];

export const registerValidationSettings = {
    "username": {
        minLength: 5, maxLength: 25, regexExpression: regexConfig.username, required: true
    },
    "email": {
        minLength: 7, maxLength: 30, regexExpression: regexConfig.email, required: true
    },
    "password": {
        minLength: 5, maxLength: 20, mustBeLike: "repeatedPassword", required: true
    },
    "repeatedPassword": {
        minLength: 5, maxLength: 20, mustBeLike: "password", required: true
    },
    "firstName": {
        minLength: 3, maxLength: 30
    },
    "lastName": {
        minLength: 3, maxLength: 30
    },
    "birthDate": {
        
    },
    "sex": {
        
    }
}