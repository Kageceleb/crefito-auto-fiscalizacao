import { question } from "./types/questionType"

export const mockQuestions: question[] = [

  {
    "id": 1,
    "question": "A UTI do hospital em questão possui registros junto ao CREFITO-5 e Vigilância Sanitária?",
    "type": "radio",
    "options": ["Sim", "Não", "Não sei responder"]
  },
  {
    "id": 2,
    "question": "Há normas e rotinas de procedimentos assistenciais e administrativos instituídos pelo hospital para a Unidade de Terapia Intensiva?",
    "type": "radio",
    "options": ["Sim", "Não"]
  },
  {
    "id": 3,
    "question": "As normas e rotinas de procedimentos assistenciais e administrativos para a unidade estão disponíveis a todos os profissionais que trabalham na UTI?",
    "type": "radio",
    "options": ["Sim", "Não"]
  },
  {
    "id": 4,
    "question": "As normas e rotinas de procedimentos assistenciais e administrativos para a unidade foram assinadas por um profissional fisioterapeuta?",
    "type": "radio",
    "options": ["Sim", "Não"]
  },
  {
    "id": 5,
    "question": "São realizados todos os registros evolutivos dos pacientes em prontuário?",
    "type": "radio",
    "options": ["Sim", "Não", "Não sei responder"]
  },
  {
    "id": 6,
    "question": "Há designação, por parte do hospital, de um profissional fisioterapeuta como coordenador dos serviços de fisioterapia na UTI?",
    "type": "radio",
    "options": ["Sim", "Não"]

  },
  {
    "id": 7,
    "question": "Há profissional(is) igualmente habilidtado(s) previamente designado(s) para figurar como subistituto(s) na coordenação dos serviços de fisioterapia?",
    "type": "radio",
    "options": ["Sim", "Não"]
  },
  {
    "id": 8,
    "question": "Os profissionais coordenadores, titulares e substitutos, possuem especialidade em terapia intensiva ou relacionada à assistência ao paciente grave?",
    "type": "radio",
    "options": ["Sim", "Não"],
    "shouldSkip": (answers) => { return answers[6] === "Não" && answers[7] === "Não" },
  },
  {
    "id": 9,
    "question": "A especialidade dos profissionais coordenadores, titulares e substitutos, é condizente com a modalidade de atuação da UTI (adulto, pediátrica ou neonatal)?",
    "type": "radio",
    "options": ["Sim", "Não"],
    "shouldSkip": (answers) => { return answers[6] === "Não" && answers[7] === "Não" },
  },
  {
    "id": 10,
    "question": "O dimensionamento da equipe de fisioterapeutas está adequado?",
    "type": "radio",
    "options": ["Sim", "Não"]
  }
]

