export const dateFormatter = (date: string) => {
    const newDate = new Date(date)

    const formattedDate = newDate.toLocaleString("en-US", {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    })

    return formattedDate
}