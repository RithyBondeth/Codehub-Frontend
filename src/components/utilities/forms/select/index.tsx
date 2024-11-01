import { forwardRef } from "react";
import { SelectProps } from "./type";
import { useLanguageStore } from "../../../../stores/language/language.store";

export const SelectField = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
    const language = useLanguageStore((state) => state.language)

    return (
        <select
            ref={ref}
            className={`select select-bordered w-full max-w-full ${props.className}`}
            id={props.id}
            name={props.name}
            value={props.value === null ? language === "kh" ? "មិនមាន" : "None" : props.value}
            onChange={props.onChange}
            required={props.reqiured}
            disabled={props.disabled ? props.disabled : false}
        >
            {props.disabledLabel &&  <option value="" disabled>{props.disabledLabel}</option>}
            {props.option.map((op) => (
                <option value={op.value} key={op.id}>{op.label}</option>
            ))}
        </select>
    );
})
