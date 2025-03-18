import { question } from "./types/questionType"

export const calcQuestions: question[] = [

  {
    "id": 11,
    "question": "A UTI do hospital em questão possui registros junto ao CREFITO-5 e Vigilância Sanitária?",
    "type": "radio",
    "options": ["Sim", "Não", "Não sei responder"]
  },
  {
    "id": 12,
    "question": "Há normas e rotinas de procedimentos assistenciais e administrativos instituídos pelo hospital para a Unidade de Terapia Intensiva?",
    "type": "radio",
    "options": ["Sim", "Não"]
  },
  {
    "id": 13,
    "question": "As normas e rotinas de procedimentos assistenciais e administrativos para a unidade estão disponíveis a todos os profissionais que trabalham na UTI?",
    "type": "radio",
    "options": ["Sim", "Não"]
  }
]

