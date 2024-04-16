import { Control, Controller, FieldValues } from "react-hook-form";
import Select from "react-select";

import { Option } from "@/types";

type Props = {
    control: Control<FieldValues> | undefined;
    options: Option[];
    name: string;
    rules: { required: boolean };
    multiple?: boolean;
    onValueChange?: (val: Option) => void;
    disabled?: boolean;
    isClearable?: boolean;
    label?: string | null;
    placeholder?: string;
};

export const  SelectBox=({
    control,
    options,
    name,
    rules,
    multiple = false,
    disabled = false,
    onValueChange,
    isClearable = true,
    placeholder = "Select",
}: Props) =>{
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field, fieldState: { error } }) => (
                <>
                    <Select
                        isDisabled={disabled}
                        isMulti={multiple}
                        isClearable={isClearable}
                        instanceId={`select-box-${name}`}
                        options={options}
                        placeholder={placeholder}


                        {...field}
                        onChange={(val: Option) => {
                            field.onChange(val);
                            if (onValueChange) onValueChange(val);
                        }}
                    />
                    {error && <span className="mt-1 text-red-500">{error.message}</span>}
                </>
            )}
        />
    );
}