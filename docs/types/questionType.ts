export type question = {
    id: number
    question: string
    type: string
    options: string[]
    shouldSkip?: (answers: { [key: number]: string }) => boolean
}