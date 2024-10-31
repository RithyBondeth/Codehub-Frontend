export type InputFieldProps = {
    preffixIcon?: string
    suffixIcon?: string 
    suffixClick?: () => void
    type: string
    id: string 
    name?: string
    value?: string | number | readonly string[]
    placeholder?: string
    required?: boolean
    disabled?: boolean
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
    className?: string
}