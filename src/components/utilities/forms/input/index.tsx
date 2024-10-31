import { InputFieldProps } from "./type"
import { forwardRef } from "react";

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => {
    return (
        <div className="w-full flex items-center p-4 rounded-xl bg-gray-100 dark:bg-darklight dark:text-dark">
            {props.preffixIcon && (
                <span className="material-symbols-outlined mr-2">{props.preffixIcon}</span>
            )}
            <input 
                ref={ref} 
                type={props.type} 
                id={props.id}
                name={props.name} 
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
                required={props.required}
                disabled={props.disabled ? props.disabled : false} 
                className={`outline-none bg-transparent w-full text-sm ${props.className} dark:placeholder-dark`}
            />
            {props.suffixIcon && (
                <span className="material-symbols-outlined mr-2 cursor-pointer" onClick={props.suffixClick}>{props.suffixIcon}</span>
            )}
        </div>
    );
});
