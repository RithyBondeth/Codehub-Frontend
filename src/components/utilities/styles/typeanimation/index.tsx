import { TypeAnimation } from "react-type-animation";
import { TextTypeAnimationProps } from "./type";

export default function TextTypeAnimation(props: TextTypeAnimationProps) {
    return (
        <TypeAnimation
            sequence={props.text}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1.8em', display: 'inline-block' }}
            repeat={Infinity}
            className={props.className}
        />
    )   
}