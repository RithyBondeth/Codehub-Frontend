export type VisibilityStoreState = {
    visibility: boolean
    newVisibility: boolean
    confirmVisibility: boolean
    setVisibility: () => void
    setNewVisibility: () => void
    setConfirmVisibility: () => void
}