import { ArchetypeType } from '../types/archetype';

interface ArchetypeData {
  name: string;
  color: string;
  shadowColor: string;
  lightColor: string;
  description: string;
  shadow: string;
  light: string;
  keywords: string[];
}

export const archetypeData: Record<ArchetypeType, ArchetypeData> = {
  innocent: {
    name: "O Inocente",
    color: "#F8F9FA",
    shadowColor: "#CFD8DC",
    lightColor: "#FFFFFF",
    description: "Busca a felicidade através da pureza e simplicidade.",
    shadow: "Negação da realidade, dependência excessiva, recusa em crescer",
    light: "Otimismo, fé, capacidade de confiar e ver o bem nas situações",
    keywords: ["Pureza", "Otimismo", "Fé", "Confiança"]
  },
  hero: {
    name: "O Herói",
    color: "#DC1F26",
    shadowColor: "#8B0000",
    lightColor: "#FF4D4D",
    description: "Enfrenta desafios com coragem e determinação.",
    shadow: "Arrogância, necessidade compulsiva de provar seu valor",
    light: "Coragem, disciplina, capacidade de superar obstáculos",
    keywords: ["Coragem", "Força", "Determinação", "Vitória"]
  },
  caregiver: {
    name: "O Cuidador",
    color: "#4CAF50",
    shadowColor: "#2E7D32",
    lightColor: "#81C784",
    description: "Nutre e protege os outros com compaixão.",
    shadow: "Martírio, manipulação através da culpa",
    light: "Compaixão, generosidade, capacidade de cuidar",
    keywords: ["Compaixão", "Cuidado", "Proteção", "Nutrição"]
  },
  explorer: {
    name: "O Explorador",
    color: "#FF9800",
    shadowColor: "#F57C00",
    lightColor: "#FFB74D",
    description: "Busca descobertas e autenticidade em sua jornada.",
    shadow: "Inquietação perpétua, incapacidade de se estabelecer",
    light: "Independência, curiosidade, autenticidade",
    keywords: ["Liberdade", "Descoberta", "Aventura", "Autenticidade"]
  },
  lover: {
    name: "O Amante",
    color: "#E91E63",
    shadowColor: "#C2185B",
    lightColor: "#F06292",
    description: "Busca conexão emocional e beleza nas relações.",
    shadow: "Perda de identidade em relacionamentos, obsessão",
    light: "Paixão, compromisso, apreciação da beleza",
    keywords: ["Paixão", "Intimidade", "Compromisso", "Beleza"]
  },
  sage: {
    name: "O Sábio",
    color: "#3F51B5",
    shadowColor: "#303F9F",
    lightColor: "#7986CB",
    description: "Busca e compartilha conhecimento e verdade.",
    shadow: "Dogmatismo, desconexão da realidade prática",
    light: "Sabedoria, clareza mental, compreensão profunda",
    keywords: ["Sabedoria", "Verdade", "Conhecimento", "Compreensão"]
  },
  magician: {
    name: "O Mago",
    color: "#9C27B0",
    shadowColor: "#7B1FA2",
    lightColor: "#BA68C8",
    description: "Transforma realidades através do poder da consciência.",
    shadow: "Manipulação, uso do poder para controle",
    light: "Transformação, catalização de mudanças positivas",
    keywords: ["Transformação", "Poder", "Catálise", "Alquimia"]
  },
  ruler: {
    name: "O Governante",
    color: "#673AB7",
    shadowColor: "#512DA8",
    lightColor: "#9575CD",
    description: "Exerce liderança e cria ordem.",
    shadow: "Autoritarismo, controle excessivo",
    light: "Liderança sábia, responsabilidade, ordem",
    keywords: ["Liderança", "Poder", "Ordem", "Responsabilidade"]
  },
  creator: {
    name: "O Criador",
    color: "#00BCD4",
    shadowColor: "#0097A7",
    lightColor: "#4DD0E1",
    description: "Manifesta visão através da criatividade.",
    shadow: "Perfeccionismo paralisante, criação caótica",
    light: "Inovação, expressão autêntica, manifestação",
    keywords: ["Criatividade", "Inovação", "Expressão", "Originalidade"]
  },
  rebel: {
    name: "O Rebelde",
    color: "#607D8B",
    shadowColor: "#455A64",
    lightColor: "#90A4AE",
    description: "Quebra regras para catalisar mudanças.",
    shadow: "Destruição sem propósito, rebeldia autodestrutiva",
    light: "Revolução positiva, libertação, mudança social",
    keywords: ["Revolução", "Ruptura", "Mudança", "Libertação"]
  },
  everyman: {
    name: "O Homem Comum",
    color: "#795548",
    shadowColor: "#5D4037",
    lightColor: "#A1887F",
    description: "Conecta-se através da simplicidade e pertencimento.",
    shadow: "Conformismo, perda de individualidade",
    light: "Realismo, empatia, conexão genuína",
    keywords: ["Pertencimento", "Realismo", "Conexão", "Autenticidade"]
  },
  jester: {
    name: "O Bobo da Corte",
    color: "#FFC107",
    shadowColor: "#FFA000",
    lightColor: "#FFD54F",
    description: "Traz alegria e sabedoria através do humor.",
    shadow: "Irresponsabilidade, fuga através da frivolidade",
    light: "Alegria, espontaneidade, sabedoria através do humor",
    keywords: ["Alegria", "Humor", "Espontaneidade", "Leveza"]
  }
};
