import React, {FC, useState} from 'react';
import "./SelectLabel.css";

export type Props ={
    arr: any;
    label: string;
    name: string;
}

export const SelectLabel:FC<Props> = props => {
    const {arr, name, label} = props
    const [value, setValue] = useState('');
    const options = arr.map((text:string, index:number) => {
        return <option key={index}>{text}</option>;
    });
    return (
        <div className="SelectLabel__form-field">
            <select name={name} value={value} onChange={(event) => setValue(event.target.value)}>
                <option value=''>Пожалуйста выберите </option>
                {options}
            </select>
            <label>{label}</label>
        </div>
    )
}