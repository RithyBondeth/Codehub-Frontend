export type AnimationButtonProps = {
    icon?: string
    label: string
    type?: "submit" | "reset" | "button"
    onClick?: () => void
    className?: string
}