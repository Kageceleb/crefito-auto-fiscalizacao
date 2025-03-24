import { questionarieAnswer } from "./types/answerType";

export const mockAnswer: questionarieAnswer[] = [

  {
    "id": 1,
    "answer": "Apure se o hospital possui registro junto:\n <p> a) ao CREFITO-5; e </p> \n <p>b) à Vigilância Sanitária.</p>\n\n Para verificar se o local possui registro no CREFITO-5, acesse a página da “Consulta de Inscritos” do <a href=\"https://crefito-rs.implanta.net.br/servicosonline/Publico/ConsultaInscritos/\"> CREFITO-5 </a> e pesquise se o hospital em questão possui registro ativo e regular junto ao Conselho. Se encontrar dificuldades, entre em contato com a nossa equipe de atendimento através do <a href=\"https://wa.me/555133346586\">Whatsapp: (51) 3334-6586</a> ou por e-mail: <a href=\"mailto:atendimento@crefito5.org.br\">atendimento@crefito5.org.br. </a>\n\nLembramos que, é obrigatório o registro das entidades que prestam serviços de fisioterapia e terapia ocupacional junto ao CREFITO, conforme dispõe o parágrafo único do art. 12 da Lei 6.316/1975 e Lei 6.839/1980, bem como, é indispensável o registro junto à Vigilância Sanitária, nos termos previstos no art. 8º da Resolução ANVISA RDC nº 7/2010.",

    "shouldAnswer": (answers) => { return answers[1] === "Não" || answers[1] === "Não Sei" },
  },
  {
    "id": 2,
    "answer": "Assegure-se de que o hospital tenha instituído as normas e rotinas de procedimentos assistenciais e administrativos para a unidade, com aprovação da coordenação do serviço de fisioterapia, e que elas estejam à disposição dos profissionais que lá atuam, em cumprimento ao estabelecido no art. 8º da RDC nº 7/2010 da Anvisa.\n\nCaso haja desconformidade, isto pode gerar uma autuação por parte do CREFITO e/ou Vigilância Sanitária, portanto, cobre os gestores para que isto seja providenciado e disponibilizado aos profissionais o mais breve possível."
    ,
    "shouldAnswer": (answers) => { return answers[2] === "Não" || answers[3] === "Não" || answers[4] === "Não" },
  },
  {
    "id": 3,
    "answer": "É dever dos profissionais registrar a evolução do estado clínico, as intercorrências e os cuidados prestados no prontuário do paciente, em cada turno, conforme regulamentado pela Resolução COFFITO nº 414/2012 e normas do hospital, nos termos do o art. 22 da RDC nº 7/2010 da Anvisa.\n\nCaso haja desconformidade, isto pode gerar uma autuação por parte do CREFITO e/ou Vigilância Sanitária, portanto, cobre os gestores para que seja exigido esses registros o mais breve possível.",
    "shouldAnswer": (answers) => { return answers[5] === "Não" },
  },
  {
    "id": 4,
    "answer": "É dever do hospital designar um profissional fisioterapeuta especialista em UTI ou em modalidade relacionada à assistência de paciente grave para figurar como coordenador dos serviços de fisioterapia na UTI, bem como, o(s) seu(s) respectivo(s) substituto(s), conforme prevê o art. 13 da RDC nº 7/2010 da Anvisa.\n\nAssegure-se de que o hospital tenha nomeado esses profissionais e que eles tenham habilitação, com registro das especialidades previstas na RDC nº7, junto ao CREFITO-5, para o exercício dessas funções.\n\nPara verificar se o profissional possui registro da especialidade no CREFITO-5, acesse a página da <a href=\"https://crefito-rs.implanta.net.br/servicosonline/Publico/ConsultaInscritos\">Consulta de Inscritos</a> do CREFITO-5 e pesquise se o profissional coordenador possui registro ativo e regular junto ao Conselho. Se encontrar dificuldades, entre em contato com a nossa equipe de atendimento através do <a href=\"https://wa.me/555133346586\">Whatsapp: (51) 3334-6586</a> ou por e-mail: <a href=\"mailto:atendimento@crefito5.org.br\">atendimento@crefito5.org.br. </a> \n\nCaso haja desconformidade, isto pode gerar uma autuação por parte do CREFITO e/ou Vigilância Sanitária, portanto, cobre os gestores para que isto seja providenciado e disponibilizado aos profissionais o mais breve possível.",
    "shouldAnswer": (answers) => { return answers[6] === "Não" || answers[7] === "Não" || answers[8] === "Não" || answers[9] === "Não" },
  },
  {
    "id": 6,
    "answer": "É dever do hospital assegurar a disponibilidade de atendimento aos pacientes por profissionais fisioterapeutas, legalmente habilitados, durante os turnos matutino, vespertino e noturno, perfazendo um total de 18 horas diárias de atuação, observada a proporção de 1 profissional para até 10 (dez) leitos ou fração, conforme estabelecido no art. 14 caput e inciso IV, da Resolução Anvisa RDC nº7/2010.\n\nA disponibilização dos serviços em desconformidade com o estabelecido pela Anvisa constitui infração administrativa e pode gerar uma autuação por parte do CREFITO e/ou Vigilância Sanitária, portanto, comunique os gestores para que possam realizar as devidas adequações o mais breve possível.",
    "shouldAnswer": (answers) => { return answers[10] === "Não" },
  },
  {
    "id": 7,
    "answer": "Conforme os dados fornecidos, identificamos: \n\n",
    "shouldAnswer": (answers) => {
      return (
        (Number(answers[11]) / Number(answers[12]) < 10) ||
        (Number(answers[12]) * Number(answers[13]) < 18)
      );
    },
  },
  {
    "id": 8,
    "answer": "que o local está com um número de profissionais insuficiente para a quantidade de leitos ativos.",
    "shouldAnswer": (answers) => { return (Number(answers[11]) / Number(answers[12]) < 10) },
  },
  {
    "id": 9,
    "answer": "que o local está disponibilizando os atendimentos por um período menor do que o devido.",
    "shouldAnswer": (answers) => { return Number(answers[12]) * Number(answers[13]) <= 18 },
  },
]

