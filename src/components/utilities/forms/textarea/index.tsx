import { forwardRef } from "react";
import { TextAreaProps } from "./type";

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
    return (
        <textarea
            ref={ref}
            id={props.id}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            rows={6}
            className={`textarea textarea-lg focus:border-transparent focus:ring-0 !outline-none resize-none p-5 bg-gray-100 dark:bg-darklight dark:text-dark dark:placeholder-dark text-sm w-full ${props.className}`}
        />
    )
})

export default TextArea;