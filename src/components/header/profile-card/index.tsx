import { useNavigate } from "react-router-dom";
import { ProfileCardProps } from "./type";

export default function ProfileCard(props: ProfileCardProps) {

 const navigate = useNavigate()

 return (
    <div className="flex flex-row-reverse justify-center items-center gap-1 tablet-sm:p-1 cursor-pointer" onClick={() => navigate("/profile")}>
        <p className="text-sm tablet-md:hidden">{props.name}</p>
        {props.avatar && <img src={props.avatar} alt="user profile" className="rounded-full size-12 tablet-md:min-w-12 tablet-sm:min-size-10"/>}
    </div> 
 )   
}