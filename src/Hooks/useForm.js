import { useState } from "react"
import { useEffect } from "react";
import { useMemo } from "react";

export const useForm=(initialState,formValidations={})=>{

    const [form, setform] = useState(initialState);
    const [formValidation, setformValidation] = useState({});

    useEffect(() => {
        createValidators();      
    }, [form])
    
    const isFormValid=useMemo(()=>{

        for (const formValue of Object.keys(formValidation)) {
            if(formValidation[formValue]!=null){
                return false
            }
        }
        return true

    } , [formValidation]);

    const onInputChange=({target})=>{
        const {name,value}=target;
        setform({
            ...form,
            [name]:value
        });
    }

    const onResetForm=()=>{
        setform(initialState);
    }

    const createValidators=()=>{

        const formCheckedValues={};

        for (const formField of Object.keys(formValidations)) {
            const [fnValidation,errorMessage]=formValidations[formField];

            formCheckedValues[`${formField}Valid`]=fnValidation(form[formField]) ? null :errorMessage;
        }

        setformValidation(formCheckedValues);
    };

    return {
        form,
        onInputChange,
        onResetForm,
        formValidation,
        isFormValid
    }

}