export type questionarieAnswer = {
    id: number
    answer: string
    shouldAnswer?: (answers: { [key: number]: string }) => boolean
}