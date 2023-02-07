import { useState } from "react"

export const useForm=(initialState)=>{

    const [form, setform] = useState(initialState);

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

    return {
        form,
        onInputChange,
        onResetForm
    }

}