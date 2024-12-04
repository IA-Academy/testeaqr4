import { Question } from '../types/archetype';

export const questions: Question[] = [

  {
    id: 1,
    text: "Cultiva a ideia de que o mundo é um lugar seguro e devemos acreditar nas coisas e nas pessoas.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'innocent', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'innocent', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'innocent', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'innocent', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'innocent', weight: 0.25 }] }
    ]
  },
  {
    id: 2,
    text: "Incentiva as pessoas a sempre superar seus limites.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'hero', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'hero', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'hero', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'hero', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'hero', weight: 0.25 }] }
    ]
  },
  {
    id: 3,
    text: "Tem um propósito, uma causa, que vai além de números e vendas.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'caregiver', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'caregiver', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'caregiver', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'caregiver', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'caregiver', weight: 0.25 }] }
    ]
  },
  {
    id: 4,
    text: "É um símbolo da busca por uma vida mais realizada.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'explorer', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'explorer', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'explorer', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'explorer', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'explorer', weight: 0.25 }] }
    ]
  },
  {
    id: 5,
    text: "Acredita e comunica o aperfeiçoamento como propósito de vida.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'explorer', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'explorer', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'explorer', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'explorer', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'explorer', weight: 0.25 }] }
    ]
  },
  {
    id: 6,
    text: "Gosta da sensualidade do prazer hedonista.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'lover', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'lover', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'lover', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'lover', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'lover', weight: 0.25 }] }
    ]
  },
  {
    id: 7,
    text: "Comunica a simplicidade, 'preferi mos estar em casa com nossos amigos do que ir para uma balada'.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'self', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'self', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'self', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'self', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'self', weight: 0.25 }] }
    ]
  },
  {
    id: 8,
    text: "Mostra às pessoas que às vezes é preciso correr riscos para defender as ideias nas quais acreditam.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'hero', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'hero', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'hero', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'hero', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'hero', weight: 0.25 }] }
    ]
  },
  {
    id: 9,
    text: "Conversa de modo coloquial e não gosta de elitismo.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'everyman', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'everyman', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'everyman', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'everyman', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'everyman', weight: 0.25 }] }
    ]
  },
  {
    id: 10,
    text: "Diz que é mais importante dar do que receber, doar-se aos outros e ajudá-los.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'caregiver', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'caregiver', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'caregiver', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'caregiver', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'caregiver', weight: 0.25 }] }
    ]
  },
  {
    id: 11,
    text: "É feita para pessoas que sentem certa inquietação com a situação que passam em suas vidas atualmente.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'explorer', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'explorer', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'explorer', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'explorer', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'explorer', weight: 0.25 }] }
    ]
  },
  {
    id: 12,
    text: "Cultiva nas pessoas o sentimento de se apaixonar à vida plenamente.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'lover', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'lover', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'lover', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'lover', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'lover', weight: 0.25 }] }
    ]
  },
  // Continuing with remaining questions...
  {
    id: 13,
    text: "Acredita que as pessoas não cometem erros por mal, ela acredita que as pessoas podem ser boas.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'innocent', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'innocent', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'innocent', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'innocent', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'innocent', weight: 0.25 }] }
    ]
  },
  {
    id: 14,
    text: "Concorda com a seguinte afirmação: 'é melhor ter amado e perdido o objetivo desse amor do que nunca ter amado'.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'lover', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'lover', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'lover', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'lover', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'lover', weight: 0.25 }] }
    ]
  },
  {
    id: 15,
    text: "É apaixonada por relacionamentos pessoais.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'lover', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'lover', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'lover', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'lover', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'lover', weight: 0.25 }] }
    ]
  },
  {
    id: 16,
    text: "Ama a liberdade.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'rebel', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'rebel', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'rebel', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'rebel', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'rebel', weight: 0.25 }] }
    ]
  },
  {
    id: 17,
    text: "Quando não está de acordo, não entra em conformidade.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'rebel', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'rebel', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'rebel', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'rebel', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'rebel', weight: 0.25 }] }
    ]
  },
  {
    id: 18,
    text: "Nunca está satisfeita totalmente com o que já existe hoje, criando sempre novas situações e produtos que podem ajudar o mundo.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'creator', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'creator', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'creator', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'creator', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'creator', weight: 0.25 }] }
    ]
  },
  {
    id: 19,
    text: "Se esforça por ser objetiva.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'sage', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'sage', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'sage', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'sage', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'sage', weight: 0.25 }] }
    ]
  },
  {
    id: 20,
    text: "É otimista e pura.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'innocent', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'innocent', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'innocent', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'innocent', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'innocent', weight: 0.25 }] }
    ]
  },
  {
    id: 21,
    text: "Acredita que a manutenção da independência das pessoas é fundamental à suas vidas",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'explorer', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'explorer', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'explorer', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'explorer', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'explorer', weight: 0.25 }] }
    ]
  },
  {
    id: 22,
    text: "Crê que a ajuda espiritual é responsável pela eficiência das pessoas.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'magician', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'magician', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'magician', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'magician', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'magician', weight: 0.25 }] }
    ]
  },
  {
    id: 23,
    text: "A modificação dos pensamentos altera a vida.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'magician', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'magician', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'magician', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'magician', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'magician', weight: 0.25 }] }
    ]
  },
  {
    id: 24,
    text: "Estimula o desejo de ser bem sucedido e tornar-se um líder.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'ruler', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'ruler', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'ruler', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'ruler', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'ruler', weight: 0.25 }] }
    ]
  },
  {
    id: 25,
    text: "Orienta as pessoas com seu conhecimento.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'ruler', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'ruler', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'ruler', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'ruler', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'ruler', weight: 0.25 }] }
    ]
  },
  {
    id: 26,
    text: "Sempre tem um ponto de vista nos assuntos modernos e busca sempre pensar no futuro.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'sage', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'sage', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'sage', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'sage', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'sage', weight: 0.25 }] }
    ]
  },
  {
    id: 27,
    text: "É divertida.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'jester', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'jester', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'jester', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'jester', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'jester', weight: 0.25 }] }
    ]
  },
  {
    id: 28,
    text: "Gosta de fazer as pessoas rirem.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'jester', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'jester', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'jester', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'jester', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'jester', weight: 0.25 }] }
    ]
  },
  {
    id: 29,
    text: "Gosto de momentos simples e familiares.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'everyman', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'everyman', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'everyman', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'everyman', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'everyman', weight: 0.25 }] }
    ]
  },
  {
    id: 30,
    text: "É para pessoas que acham mais fácil fazer as coisas para os outros do que para elas mesmas.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'caregiver', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'caregiver', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'caregiver', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'caregiver', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'caregiver', weight: 0.25 }] }
    ]
  },
  {
    id: 31,
    text: "Gosta de pessoas que são criativas e que buscam fazer algo significativo.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'creator', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'creator', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'creator', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'creator', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'creator', weight: 0.25 }] }
    ]
  },
  {
    id: 32,
    text: "É para pessoas que deixam o medo de lado e fazem o que precisa ser feito.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'hero', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'hero', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'hero', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'hero', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'hero', weight: 0.25 }] }
    ]
  },
  {
    id: 33,
    text: "Choca com suas expressões.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'rebel', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'rebel', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'rebel', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'rebel', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'rebel', weight: 0.25 }] }
    ]
  },
  {
    id: 34,
    text: "Se mostra sempre muito inspirada e adora ter novas ideias.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'creator', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'creator', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'creator', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'creator', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'creator', weight: 0.25 }] }
       ]
  },
  {
    id: 35,
    text: "Acredito que uma mesma coisa pode ser considerada a partir de diferentes ângulos.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'sage', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'sage', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'sage', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'sage', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'sage', weight: 0.25 }] }
    ]
  },
  {
    id: 36,
    text: "Não leva as regras muito a sério.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'jester', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'jester', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'jester', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'jester', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'jester', weight: 0.25 }] }
    ]
  },
  {
    id: 37,
    text: "Acredita que um pouco de bagunça é bom para a alma.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'jester', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'jester', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'jester', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'jester', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'jester', weight: 0.25 }] }
    ]
  },
  {
    id: 38,
    text: "Acredita na capacidade humana para aprender e crescer",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'sage', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'sage', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'sage', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'sage', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'sage', weight: 0.25 }] }
    ]
  },
  {
    id: 39,
    text: "Quer de volta os prazeres simples e valores básicos das pessoas.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'innocent', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'innocent', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'innocent', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'innocent', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'innocent', weight: 0.25 }] }
    ]
  },
  {
    id: 40,
    text: "Atua, muitas vezes, como um catalisador para a realização de mudanças.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'magician', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'magician', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'magician', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'magician', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'magician', weight: 0.25 }] }
    ]
  },
  {
    id: 41,
    text: "Prefere o status e estar no comando das situações.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'ruler', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'ruler', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'ruler', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'ruler', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'ruler', weight: 0.25 }] }
    ]
  },
  {
    id: 42,
    text: "É grandiosa. (imponente, nobre)",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'ruler', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'ruler', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'ruler', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'ruler', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'ruler', weight: 0.25 }] }
    ]
  },
  {
    id: 43,
    text: "Acredita que todas as pessoas e todas as coisas do mundo estão interligadas.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'magician', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'magician', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'magician', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'magician', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'magician', weight: 0.25 }] }
    ]
  },
  {
    id: 44,
    text: "Acredita que a criatividade seja um de seus maiores dons.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'creator', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'creator', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'creator', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'creator', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'creator', weight: 0.25 }] }
    ]
  },
  {
    id: 45,
    text: "Segue suas próprias leis e não o que o sistema diz que ela precisa seguir.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'rebel', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'rebel', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'rebel', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'rebel', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'rebel', weight: 0.25 }] }
    ]
  },
  {
    id: 46,
    text: "É para pessoas que tem prazer em cuidar das outras pessoas.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'caregiver', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'caregiver', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'caregiver', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'caregiver', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'caregiver', weight: 0.25 }] }
    ]
  },
  {
    id: 47,
    text: "É para quem precisa de disciplina para alcançar as próprias metas.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'hero', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'hero', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'hero', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'hero', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'hero', weight: 0.25 }] }
    ]
  },
  {
    id: 48,
    text: "Tem a palavra 'verdadeira'... como uma das que melhor a define.",
    options: [
      { text: "Muito relevante", relevance: 5, archetypes: [{ type: 'everyman', weight: 2 }] },
      { text: "Relevante", relevance: 4, archetypes: [{ type: 'everyman', weight: 1.5 }] },
      { text: "Neutro", relevance: 3, archetypes: [{ type: 'everyman', weight: 1 }] },
      { text: "Pouco relevante", relevance: 2, archetypes: [{ type: 'everyman', weight: 0.5 }] },
      { text: "Irrelevante", relevance: 1, archetypes: [{ type: 'everyman', weight: 0.25 }] }
    ]
  }
];