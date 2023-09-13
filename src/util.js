import { BACKEND_URL } from "./constants";
import dayjs from "dayjs";

export const authValidator = (values) => {
    let errors = {};
    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be 6 or more characters';
    }
    return errors;
}

export const taskValidator = (values) => {

    let errors = {};
    if (!values.title) {
        errors.title = 'Title is required';
    }
    if(values.dueDate){
        const dueDate = dayjs(values.dueDate);
        const now = dayjs();

        if(dueDate.isBefore(now)){
            errors.dueDate = 'Due date cannot be in the past';
        }
    }
    console.log(errors)
    return errors;
}

export const taskManagementFetch = async (endpoint, method='GET', body) => {
    try {
        let options = {};
        if(method === 'GET'){
            options = {
                'credentials': 'include'
            }
        } else {
            options = {
                method: method,
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify(body)
            }
        }

        const res = await fetch(BACKEND_URL + endpoint, options)
        return res.json();
    } catch (error) {
        console.log(error);
    }

}