export type SelectProps = {
    id: string
    name?: string
    value?: string | null
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    disabledLabel?: string,
    reqiured?: boolean
    disabled?: boolean
    option: {
        id: number,
        label: string,
        value: string,
    }[],
    className?: string
}