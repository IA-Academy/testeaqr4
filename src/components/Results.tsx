import styled from 'styled-components';
import { Question } from '../types/archetype';
import { archetypes } from '../data/archetypes';
import { ResultCard } from './ResultCard';
import ArchetypeWheel from './ArchetypeWheel';

const ResultsContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 40px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
`;

const ResultsTitle = styled.h1`
  text-align: center;
  color: #2C3E50;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 600;
`;

interface ResultsProps {
  answers: Record<number, number>;
  questions: Question[];
}

const Results = ({ answers, questions }: ResultsProps) => {
  const calculateResults = () => {
    // Inicializar pontuações apenas para arquétipos válidos
    const archetypeScores: Record<string, number> = {};
    Object.keys(archetypes).forEach(type => {
      archetypeScores[type] = 0;
    });

    // Calcular pontuações brutas
    Object.entries(answers).forEach(([questionId, optionIndex]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      if (!question) return;

      const option = question.options[optionIndex];
      option.archetypes.forEach(archetype => {
        if (archetypeScores.hasOwnProperty(archetype.type)) {
          archetypeScores[archetype.type] += archetype.weight * option.relevance;
        }
      });
    });

    // Calcular total para porcentagens
    const totalScore = Object.values(archetypeScores).reduce((sum, score) => sum + score, 0);

    // Calcular porcentagens relativas ao total
    const results = Object.entries(archetypeScores)
      .map(([type, score]) => ({
        type,
        percentage: totalScore > 0 ? (score / totalScore) * 100 : 0
      }))
      .filter(result => result.percentage > 0) // Remover resultados zerados
      .sort((a, b) => b.percentage - a.percentage);

    return results;
  };

  const results = calculateResults();

  if (!results.length) return null;

  return (
    <ResultsContainer>
      <ResultsTitle>Sua Composição Arquetípica</ResultsTitle>
      <ArchetypeWheel results={results} />
      {results.map((result, index) => {
        const archetype = archetypes[result.type];
        if (!archetype) return null;
        
        return (
          <ResultCard
            key={result.type}
            archetype={archetype}
            score={result.percentage}
            index={index}
          />
        );
      })}
    </ResultsContainer>
  );
};

export default Results;
