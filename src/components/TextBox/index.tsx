import React, { forwardRef, DetailedHTMLProps, InputHTMLAttributes, FC } from "react";
import { FieldError } from "react-hook-form";

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    error?: FieldError,
    errorMessage?: string;
    name: string;
};

export const TextBox: FC<Props> = forwardRef<HTMLInputElement, Props>(({ error, errorMessage, ...props }, ref) => {

    return (
        <div style={{ display: "w-full inline-block" }}> {/* Add display property */}
            <input
                className={`w-full p-2 border rounded-md focus:outline-none focus:ring ${error ? 'border-red-500' : 'focus:border-blue-300'}`}
                ref={ref}
                {...props}
            />
            {error && <span className="mt-1 text-red-500">{errorMessage}</span>}
        </div>
    )
});


TextBox.displayName='TextBox'