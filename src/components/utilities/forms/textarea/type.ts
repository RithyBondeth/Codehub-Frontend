export type TextAreaProps = {
    id: string
    name: string 
    value?: any 
    placeholder: string
    className?: string
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}