import { InvalidPasswordError } from "../Errors/InvalidPasswordError";

import React, { Component } from 'react';


const minLengthRegexp = (minLength) => new RegExp(`.{${minLength},}`);
const maxLengthRegexp = (maxLength) => new RegExp(`^.{0,${maxLength}}$`);

class PasswordValidator extends Component   {

    constructor(props){
        super(props)

    }

    validate(text) {
        const errors = [
            // () => this.validateAlphaNumeric(text), 
            () => this.validateMinLength(7, text),
            () => this.validateMaxLength(15, text)
        ].reduce((accErrors, restriction) => {
            try {
                restriction()
            } catch (error) {   
                accErrors.push(error);
            }
            return accErrors;
        }, []);

       return errors.length > 0 ? errors[0] : undefined;

    }

    validateMinLength(minLength, text) {
        try {
            const minLengthPattern = minLengthRegexp(minLength);
            const isValid = minLengthPattern.test(text);

            if(isValid) {
                return true;
            }
            throw new InvalidPasswordError('Password minimum length is 8')
        } catch (error) {
            throw error;
        }
    }

    validateMaxLength(maxLength, text) {
        try {
            const maxLengthPattern =  maxLengthRegexp(maxLength);
            const isValid = maxLengthPattern.test(text);
            if(isValid) {
                return true;
            }
            throw new InvalidPasswordError('Password maximum length is 16')
        } catch (error) {
            throw error;
        }
    }

    validateAlphaNumeric(text) {
        try {
            const isValid = /[a-zA-Z0-9]+/.test(text);
            
            if(!isValid) {
                return true;
            }
            throw new InvalidPasswordError('Password must contain numbers or regular characters')
        } catch (error) {
            throw error;
        }
    }
}

export { PasswordValidator }

