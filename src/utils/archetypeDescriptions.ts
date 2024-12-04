import { ArchetypeType } from '../types/archetype';

const descriptions: Record<ArchetypeType, string> = {
  innocent: "O Inocente busca a felicidade através da pureza e simplicidade. Representa nossa capacidade de confiar e manter a fé na bondade fundamental da vida.",
  hero: "O Herói simboliza a coragem e determinação. Enfrenta desafios com bravura, superando obstáculos em busca de seus objetivos.",
  caregiver: "O Cuidador é movido pelo altruísmo e compaixão. Encontra satisfação em ajudar e proteger os outros, criando ambientes de apoio e nurturing.",
  explorer: "O Explorador busca descobertas e autenticidade. Valoriza a liberdade e a jornada de autoconhecimento através de novas experiências.",
  lover: "O Amante representa nossa capacidade de conexão emocional e intimidade. Busca harmonia e beleza nas relações e experiências.",
  self: "O Self representa o processo de individuação descrito por Jung, buscando a integração entre consciente e inconsciente.",
  everyman: "O Homem Comum valoriza a autenticidade e conexões genuínas. Busca pertencimento e compreensão mútua nas relações cotidianas.",
  jester: "O Bobo da Corte traz leveza e espontaneidade. Encontra sabedoria através do humor e da capacidade de não se levar tão a sério.",
  sage: "O Sábio busca a verdade e o conhecimento. Valoriza a compreensão profunda e a sabedoria que vem da análise e reflexão.",
  magician: "O Mago representa a transformação e o poder da consciência. Catalisa mudanças através da compreensão das leis universais.",
  ruler: "O Governante busca ordem e controle. Assume responsabilidade e liderança para criar estruturas e sistemas funcionais.",
  creator: "O Criador é movido pela inovação e expressão autêntica. Busca materializar sua visão única através da criatividade.",
  rebel: "O Rebelde questiona o status quo e busca mudanças significativas. Representa nossa capacidade de ruptura e transformação social."
};

export const getArchetypeDescription = (type: ArchetypeType): string => {
  return descriptions[type];
};
