import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    error?: FieldError,
    errorMessage?: string;
    name: string;
};

export const TextBox: FC<Props> = ({ error, errorMessage, ...props }) => {

    const inputClassName = `w-full p-2 border rounded-md focus:outline-none focus:ring ${error ? 'border-red-500' : 'focus:border-blue-300'}`;

    return (
        <>
            <input
                className={inputClassName}
                {...props}
            />
            {error && <span className="mt-1 text-red-500">{errorMessage}</span>}
        </>
    )
}