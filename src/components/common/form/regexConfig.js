export const config = {
    username: /^[a-zA-Z0-9_-]+$/i,
    number: /[0-9]/,
    firstName: /^[A-Z][a-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/i,
    lastName: /^[-a-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/i,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phoneNumber: /^(?=.*\d)[\d ]+$/
};

export const getRegexStructure = regex => {
    const regexTranslations = {
        [config.username]: "nazwy użytkownika",
        [config.number]: "liczby",
        [config.firstName]: "imienia",
        [config.lastName]: "nazwiska",
        [config.email]: "adresu mailowego",
        [config.phoneNumber]: "numeru telefonu",
    }

    return regexTranslations[regex];
}