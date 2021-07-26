import React from 'react';
import Styles from './TextInput.module.scss';

interface ITextInputProps {
    id: string;
    label: string;
}

const TextInput = (props: ITextInputProps) => {

    const [data, setdata] = React.useState('');

    return (
        <div className={Styles.input}>
            <label>{props.label}</label>
            <input type={'text'} value={data} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setdata(event.target.value)}/>
        </div>
    )
}

export default TextInput