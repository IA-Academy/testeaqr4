export type ArchetypeType = 
    | 'innocent' 
    | 'hero' 
    | 'caregiver' 
    | 'explorer' 
    | 'lover' 
    | 'everyman'
    | 'jester'
    | 'sage'
    | 'magician'
    | 'ruler'
    | 'creator'
    | 'rebel'
    | 'self'; // Added 'self'

  export interface ArchetypeData {
    id: string;
    name: string;
    description: string;
    strengths: string[];
    weaknesses: string[];
    traits: string[];
    symbolism: string;
    shadow: string;
    integration: string;
    color: string;
  }

  export interface ArchetypeWeight {
    type: ArchetypeType;
    weight: number;
  }

  export interface Option {
    text: string;
    relevance: number;
    archetypes: ArchetypeWeight[];
  }

  export interface Question {
    id: number;
    text: string;
    options: Option[];
  }
