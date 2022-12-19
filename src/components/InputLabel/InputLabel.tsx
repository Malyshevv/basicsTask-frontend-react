import React, {FC} from 'react';
import styles from "./InputLabel.css";

export type Props = {
    label: string;
    type: string;
    name: string;
    required: boolean;
}

export const InputLabel:FC<Props> = props => {
    const {label, type, name, required} = props
    return (
        <div className={styles.form_field}>
            <input type={type} placeholder=" " name={name} required={required}/>
            <label>{label}{required ? <span style={{color: 'red', fontSize: '16px'}}> *</span>: null}</label>
        </div>
    )
}