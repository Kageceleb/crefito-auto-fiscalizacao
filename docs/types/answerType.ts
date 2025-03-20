export type questionarieAnswer = {
    id: number
    answer: string|number
    shouldAnswer?: (answers: { [key: number]: string }) => boolean
}