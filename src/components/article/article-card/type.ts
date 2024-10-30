export type SmallArticleCardProps = {
    title: string 
    description: string
    poster: string
    button: {
        label: string
        onClick: () => void
    }
}