import { questionarieAnswer } from "./types/answerType";

export const mockAnswer: questionarieAnswer[] = [

  {
    "id": 1,
    "answer": "Apure se o hospital possui registro junto:\na) ao CREFITO-5; e\nb) à Vigilância Sanitária.\n\nPara verificar se o local possui registro no CREFITO-5, acesse a página da “Consulta de Inscritos” do CREFITO-5 < https://crefito-rs.implanta.net.br/servicosonline/Publico/ConsultaInscritos/ > e pesquise se o hospital em questão possui registro ativo e regular junto ao Conselho. Se encontrar dificuldades, entre em contato com a nossa equipe de atendimento através do Whatsapp: (51) 3334-6586 ou por e-mail: atendimento@crefito5.org.br.\n\nLembramos que, é obrigatório o registro das entidades que prestam serviços de fisioterapia e terapia ocupacional junto ao CREFITO, conforme dispõe o parágrafo único do art. 12 da Lei 6.316/1975 e Lei 6.839/1980, bem como, é indispensável o registro junto à Vigilância Sanitária, nos termos previstos no art. 8º da Resolução ANVISA RDC nº 7/2010.",

    "shouldAnswer": (answers) => { return answers[1] === "Não" || answers[1] === "Não Sei" },
  },
  {
    "id": 2,
    "answer": "reposta 2",
    "shouldAnswer": (answers) => { return answers[2] === "Não" || answers[3] === "Não" || answers[4] === "Não" },
  },
  {
    "id": 3,
    "answer": "reposta 3",
    "shouldAnswer": (answers) => { return answers[5] === "Não" },
  },
  {
    "id": 6,
    "answer": "reposta 4",
    "shouldAnswer": (answers) => { return answers[10] === "Não" },
  },
]

