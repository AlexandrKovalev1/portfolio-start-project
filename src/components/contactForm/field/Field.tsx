import React from "react";
import {Styles} from "../ContactForm_Styled";

type FieldPropsType = {
    id: string,
    field: "input" | "textarea",
    placeholder?: string,
    name: string
};

 export const Field: React.FC<FieldPropsType> = ({id, field, placeholder, name}) => {
    return (
        <Styles.FieldWrapper field={field}>
            {field === "input" && <input type="text" id={id} placeholder={placeholder} name={name}/>}
            {field === "textarea" && <textarea id={id} placeholder={placeholder} name={name}/>}
            <label htmlFor={id}>{placeholder}</label>
        </Styles.FieldWrapper>
    )
};


