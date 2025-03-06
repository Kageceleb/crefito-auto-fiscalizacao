import { questionarieAnswer } from "./types/answerType";

export const mockAnswer: questionarieAnswer[]  = [

  {
    "id": 1,
    "answer": "",
    "shouldAnswer": (answers) => { return answers[1] === "Não" && answers[2] === "Não" },
  },
]

