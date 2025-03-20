export type question = {
    id: number
    question: string
    type: string | number
    options?: string[]
    shouldSkip?: (answers: { [key: number]: string }) => boolean
}