import Divider from "../../../components/utilities/styles/divider"
import useDynamicTitle from "../../../hooks/dynamic-title.hook"

export default function TermAndConditionPage() {
    useDynamicTitle()
    return (
        <div className="w-full container flex flex-col items-center gap-5 my-10">
            <p className="text-3xl font-medium">Term of Service</p>
            <Divider/>
        </div>
    )
}