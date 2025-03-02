export type question = {
    id: number
    question: string
    type: string
    options: string[]
    dependsOn?: {
        questionId: number
        answer: string
    }
}