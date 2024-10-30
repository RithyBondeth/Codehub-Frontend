import { AnimationButton } from "../../utilities/buttons/animation";
import { SmallArticleCardProps } from "./type";

export default function SmallArticleCard(props: SmallArticleCardProps) {
    return (
        <div className="flex items-stretch gap-5 p-2 duration-300 shadow-normal hover:shadow-3d-primary tablet-sm:flex-col">
            <img src={props.poster} alt="article-poster" className="h-44 w-80 tablet-xl:w-60 tablet-sm:min-h-60 tablet-sm:min-w-full"/>
            <div className="flex flex-col gap-3">
                <p className="text-xl font-medium tablet-lg:text-lg">{props.title}</p>
                <p className="text-sm leading-6">{props.description}</p>
                <AnimationButton label={props.button.label} className="w-fit text-xs" onClick={props.button.onClick}/>
            </div>
        </div>
    )   
}