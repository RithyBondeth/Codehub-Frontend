import { DividerProps } from "./type";

export default function Divider(props: DividerProps) {
    return <div id={props.id} className="w-full h-[2px] bg-gray-300"/>
}