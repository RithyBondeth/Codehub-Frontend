import { SubmitHandler, useForm } from "react-hook-form";
import { AnimationButton } from "../../../../components/utilities/buttons/animation";
import { InputField } from "../../../../components/utilities/forms/input";
import { codeHubLogoPng } from "../../../../constants/header/header.constant";
import { NewPasswordFormFields, NewPasswordSchema } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";

export default function NewPasswordPage() {
    const { register, handleSubmit, formState } = useForm<NewPasswordFormFields>({ resolver: zodResolver(NewPasswordSchema) })

    const onSubmit: SubmitHandler<NewPasswordFormFields> = async (data) => {
        console.log(data)
    }

    return (
        <div className="h-screen w-screen flex justify-between items-center">
            {/* Logo Section */}
            <div className="h-full w-1/2 flex justify-center items-center bg-white dark:bg-dark tablet-xl:w-[40%] tablet-md:hidden">
            <div className="flex justify-center items-center">
                <img src={codeHubLogoPng} alt="codeHubLogo" className="w-1/3"/>
                <div className="flex flex-col items-start text-6xl [&>p]:font-bold">
                    <p>Code</p>
                    <p>Hub</p>
                </div>
            </div>
            </div>
            {/* Form Section */}
            <div className="relative h-full w-1/2 flex justify-center items-center bg-primary tablet-xl:w-[60%] tablet-md:min-w-full">
                <div className="w-3/4 p-7 flex flex-col items-center gap-3 rounded-lg bg-white dark:bg-dark tablet-lg:w-[85%] phone-lg:min-w-[95%]">
                    <div className="flex items-center justify-center gap-1 mb-2">
                        <img src={codeHubLogoPng} alt="Codehub Logo" className="size-10"/>
                        <p className="text-xl font-semibold">Create Your New Password</p> 
                    </div>
                    <p className="text-sm leading-6">You can create your new password of your account here</p>
                    <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <InputField type="text" id="passowrd" preffixIcon="lock" placeholder="Enter new passowrd" {...register("password")} />
                            {formState.errors.password && <div className="w-full flex justify-start mt-1">
                                <p className="text-xs text-primary">{formState.errors.password.message}</p>
                            </div>}
                        </div>
                        <div>
                            <InputField type="text" id="confirmPassword" preffixIcon="lock" placeholder="Enter confirm password" {...register("confirmPassword")} />
                            {formState.errors.confirmPassword && <div className="w-full flex justify-start mt-1">
                                <p className="text-xs text-primary">{formState.errors.confirmPassword.message}</p>
                            </div>}
                        </div>
                        <AnimationButton type="submit" label="Done"/>
                    </form>
                </div>
            </div>  
        </div>
    )   
}