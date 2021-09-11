import React from 'react'
import { FormField,Label } from 'semantic-ui-react'
import { useField } from 'formik'


export default function HRMSSelect({...props}) {
    const [field,meta]=useField(props)
    return (
        <div>
            <FormField error={meta.touched && !!meta.error}>
                <select {...field} {...props}>
                <option defaultValue value="">{props.placeholder}</option>
                    {props.options.map((option)=>(
                       
                        <option key={option.key} value={option.value}>{option.text}</option>
                    ))}
                </select>
                {meta.touched && !!meta.error ? (<Label pointing basic color="red" content={meta.error}></Label>) : null}
            </FormField>
        </div>
    )
}
