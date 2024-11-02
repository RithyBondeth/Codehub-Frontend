export type SmallArticleCardProps = {
    title: string 
    description: string
    thumbnail: string
    button: {
        label: string
        onClick: () => void
    }
}