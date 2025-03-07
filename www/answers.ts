import { questionarieAnswer } from "./types/answerType";

export const mockAnswer: questionarieAnswer[]  = [

  {
    "id": 1,
    "answer": "",
    "shouldAnswer": (answers) => { return answers[1] === "Não" || answers[1] === "Não Sei" },
  },
  {
    "id": 2,
    "answer": "",
    "shouldAnswer": (answers) => { return answers[2] === "Não" || answers[3] === "Não" || answers[4] === "Não" },
  },
  {
    "id": 3,
    "answer": "",
    "shouldAnswer": (answers) => { return answers[5] === "Não" },
  },
  {
    "id": 6,
    "answer": "",
    "shouldAnswer": (answers) => { return answers[10] === "Não" },
  },
]

