import { ArchetypeData } from '../types/archetype';

export const archetypes: Record<string, ArchetypeData> = {
  innocent: {
    id: 'innocent',
    name: 'O Inocente',
    description: 'Busca o paraíso e a pureza, mantendo a fé e o otimismo mesmo em situações difíceis.',
    strengths: ['Otimismo', 'Confiança', 'Pureza', 'Autenticidade'],
    weaknesses: ['Ingenuidade', 'Negação', 'Dependência'],
    traits: ['Idealista', 'Sonhador', 'Puro', 'Romântico'],
    symbolism: 'Representa a pureza e a busca pelo paraíso perdido',
    shadow: 'Negação da realidade e dependência excessiva',
    integration: 'Manter o otimismo sem perder o realismo',
    color: '#F8F9FA'
  },
  hero: {
    id: 'hero',
    name: 'O Herói',
    description: 'Busca provar seu valor através da coragem e da competência, superando grandes desafios.',
    strengths: ['Coragem', 'Determinação', 'Competência', 'Inspiração'],
    weaknesses: ['Arrogância', 'Impulsividade', 'Orgulho'],
    traits: ['Corajoso', 'Disciplinado', 'Focado', 'Competitivo'],
    symbolism: 'Representa a força de vontade e a superação de desafios',
    shadow: 'Arrogância e necessidade compulsiva de provar seu valor',
    integration: 'Usar a força com sabedoria e humildade',
    color: '#DC1F26'
  },
  sage: {
    id: 'sage',
    name: 'O Sábio',
    description: 'Busca a verdade e o conhecimento através do pensamento crítico e da análise.',
    strengths: ['Sabedoria', 'Inteligência', 'Objetividade', 'Clareza'],
    weaknesses: ['Dogmatismo', 'Frieza', 'Perfeccionismo'],
    traits: ['Analítico', 'Estudioso', 'Filosófico', 'Contemplativo'],
    symbolism: 'Representa a busca pela verdade e conhecimento universal',
    shadow: 'Paralisia por análise e desconexão emocional',
    integration: 'Equilibrar conhecimento com sabedoria prática',
    color: '#3F51B5'
  },
  explorer: {
    id: 'explorer',
    name: 'O Explorador',
    description: 'Busca a liberdade e a autenticidade através da jornada e da descoberta.',
    strengths: ['Independência', 'Curiosidade', 'Autenticidade', 'Aventura'],
    weaknesses: ['Inquietação', 'Isolamento', 'Inadaptação'],
    traits: ['Aventureiro', 'Independente', 'Buscador', 'Pioneiro'],
    symbolism: 'Representa a busca pela autenticidade e liberdade',
    shadow: 'Incapacidade de se comprometer e criar raízes',
    integration: 'Encontrar liberdade dentro dos compromissos',
    color: '#FF9800'
  },
  ruler: {
    id: 'ruler',
    name: 'O Governante',
    description: 'Busca o controle e a ordem através da liderança e da responsabilidade.',
    strengths: ['Liderança', 'Responsabilidade', 'Organização', 'Visão'],
    weaknesses: ['Autoritarismo', 'Rigidez', 'Controle excessivo'],
    traits: ['Líder', 'Executivo', 'Organizador', 'Administrador'],
    symbolism: 'Representa o poder e a capacidade de criar ordem',
    shadow: 'Tirania e medo de perder o controle',
    integration: 'Liderar com sabedoria e empatia',
    color: '#673AB7'
  },
  creator: {
    id: 'creator',
    name: 'O Criador',
    description: 'Busca a auto-expressão através da inovação e da manifestação artística.',
    strengths: ['Criatividade', 'Visão', 'Expressão', 'Originalidade'],
    weaknesses: ['Perfeccionismo', 'Irrealismo', 'Instabilidade'],
    traits: ['Artista', 'Inovador', 'Inventor', 'Visionário'],
    symbolism: 'Representa o poder da imaginação e criação',
    shadow: 'Bloqueio criativo e auto-sabotagem',
    integration: 'Criar com propósito e disciplina',
    color: '#00BCD4'
  },
  caregiver: {
    id: 'caregiver',
    name: 'O Cuidador',
    description: 'Busca proteger e cuidar dos outros através da compaixão e do altruísmo.',
    strengths: ['Compaixão', 'Generosidade', 'Proteção', 'Empatia'],
    weaknesses: ['Martírio', 'Codependência', 'Manipulação'],
    traits: ['Altruísta', 'Maternal/Paternal', 'Nutridor', 'Protetor'],
    symbolism: 'Representa o amor incondicional e o cuidado',
    shadow: 'Controle através da culpa e do sacrifício',
    integration: 'Cuidar de si enquanto cuida dos outros',
    color: '#4CAF50'
  },
  magician: {
    id: 'magician',
    name: 'O Mago',
    description: 'Busca transformar a realidade através do conhecimento e do poder pessoal.',
    strengths: ['Transformação', 'Poder', 'Visão', 'Catálise'],
    weaknesses: ['Manipulação', 'Egocentrismo', 'Arrogância'],
    traits: ['Transformador', 'Catalisador', 'Visionário', 'Alquimista'],
    symbolism: 'Representa o poder de transformar e manifestar',
    shadow: 'Uso manipulativo do poder para controle',
    integration: 'Usar o poder para servir ao bem maior',
    color: '#9C27B0'
  },
  lover: {
    id: 'lover',
    name: 'O Amante',
    description: 'Busca a conexão e a intimidade através do amor e da beleza.',
    strengths: ['Paixão', 'Compromisso', 'Sensibilidade', 'Apreciação'],
    weaknesses: ['Dependência', 'Possessividade', 'Perda de identidade'],
    traits: ['Apaixonado', 'Sensual', 'Comprometido', 'Esteta'],
    symbolism: 'Representa o poder do amor e da conexão',
    shadow: 'Perda de si mesmo nos relacionamentos',
    integration: 'Amar mantendo a individualidade',
    color: '#E91E63'
  },
  jester: {
    id: 'jester',
    name: 'O Bobo da Corte',
    description: 'Busca a alegria e a leveza através do humor e da espontaneidade.',
    strengths: ['Humor', 'Espontaneidade', 'Alegria', 'Criatividade'],
    weaknesses: ['Irresponsabilidade', 'Superficialidade', 'Dispersão'],
    traits: ['Brincalhão', 'Espirituoso', 'Irreverente', 'Leve'],
    symbolism: 'Representa a sabedoria através do humor',
    shadow: 'Fuga da realidade através da frivolidade',
    integration: 'Usar o humor com sabedoria e propósito',
    color: '#FFC107'
  },
  everyman: {
    id: 'everyman',
    name: 'O Homem Comum',
    description: 'Busca o pertencimento e a conexão através da autenticidade e da simplicidade.',
    strengths: ['Realismo', 'Empatia', 'Autenticidade', 'Pertencimento'],
    weaknesses: ['Conformismo', 'Mediocridade', 'Perda de ambição'],
    traits: ['Realista', 'Autêntico', 'Honesto', 'Confiável'],
    symbolism: 'Representa a dignidade da vida comum',
    shadow: 'Conformismo e perda da individualidade',
    integration: 'Ser comum mantendo a singularidade',
    color: '#795548'
  },
  rebel: {
    id: 'rebel',
    name: 'O Rebelde',
    description: 'Busca a mudança e a revolução através da ruptura e da transformação.',
    strengths: ['Coragem', 'Autenticidade', 'Mudança', 'Libertação'],
    weaknesses: ['Destrutividade', 'Raiva', 'Isolamento'],
    traits: ['Revolucionário', 'Radical', 'Libertador', 'Inconformado'],
    symbolism: 'Representa o poder de quebrar padrões',
    shadow: 'Destruição sem propósito construtivo',
    integration: 'Transformar mantendo o que funciona',
    color: '#607D8B'
  }
};
