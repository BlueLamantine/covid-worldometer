import './Input.scss';
import { FormEvent } from 'react';

type Props = {
    type: string;
    onChange: (e: FormEvent<HTMLInputElement>) => void;
    placeholder?: string;
    name?: string;
    value?: string;
};
export const Input = ({
    type,
    onChange,
    name,
    placeholder,
    value = '',
}: Props) => {
    return (
        <div className="input-wrapper">
            <input
                className="input"
                type={type}
                onChange={onChange}
                name={name}
                placeholder={placeholder}
                value={value}
            />
        </div>
    );
};
