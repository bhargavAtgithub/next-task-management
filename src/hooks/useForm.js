import dayjs from "dayjs";
import { useEffect, useState } from "react";

const useForm = (callback, validator, defaultValues = {}) => {
    const [values, setValues] = useState(defaultValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback(values);
            setIsSubmitting(false);
            setValues(defaultValues)
            setErrors({});
        }  
    }, [errors]);
    
    const handleSubmit = (e) => {
        if(e) e.preventDefault();
        setErrors(validator(values));
        setIsSubmitting(true); 
    }

    const handleChange = (e) => {
        e.persist();
        setValues(values => ({...values, [e.target.name]: e.target.value}));
    }

    const handleDateChange = (newDate) => {
        setValues(values => ({...values, dueDate: newDate.endDate}));
    }

    const setNewValues = (newValues) => {
        if(newValues !== null){
            setValues({ ...newValues });
        } else {
            setValues({
                title: '',
                description: '',
                dueDate: ''
            })
        }
    }

    return {
        handleChange,
        handleDateChange,
        handleSubmit,
        setNewValues,
        values,
        errors
    }
};

export default useForm;