import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ArchetypeData } from '../types/archetype';
import { 
  Sparkle, 
  Warning, 
  Scales
} from '@phosphor-icons/react';

const Card = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: #2C3E50;
`;

const Description = styled.p`
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 24px;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
`;

const AspectSection = styled.div`
  h3 {
    font-weight: 500;
    margin-bottom: 8px;
    color: #2C3E50;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span<{ variant: 'strength' | 'weakness' }>`
  background: ${props => props.variant === 'strength' ? '#E8F5E9' : '#FFEBEE'};
  color: ${props => props.variant === 'strength' ? '#2E7D32' : '#C62828'};
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.875rem;
`;

const InfoSection = styled.div<{ borderColor: string }>`
  border-left: 4px solid ${props => props.borderColor};
  padding-left: 16px;
  
  .header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    
    h3 {
      font-weight: 500;
      color: #2C3E50;
    }
  }
  
  p {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const ProgressContainer = styled.div`
  margin-top: 24px;
  
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
    
    span {
      font-size: 0.875rem;
      font-weight: 500;
      color: #666;
    }
  }
`;

const ProgressBar = styled.div`
  height: 8px;
  background: #E9ECEF;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  border-radius: 4px;
`;

interface ResultCardProps {
  archetype: ArchetypeData;
  score: number;
  index: number;
}

export function ResultCard({ archetype, score, index }: ResultCardProps) {
  if (!archetype) return null;

  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Title>{archetype.name} ({score.toFixed(1)}%)</Title>
      <Description>{archetype.description}</Description>
      
      <Grid>
        <AspectSection>
          <h3>Aspectos Luminosos</h3>
          <TagContainer>
            {archetype.strengths.map((strength, i) => (
              <Tag key={i} variant="strength">
                {strength}
              </Tag>
            ))}
          </TagContainer>
        </AspectSection>

        <AspectSection>
          <h3>Aspectos Sombrios</h3>
          <TagContainer>
            {archetype.weaknesses.map((weakness, i) => (
              <Tag key={i} variant="weakness">
                {weakness}
              </Tag>
            ))}
          </TagContainer>
        </AspectSection>
      </Grid>

      <Grid>
        <InfoSection borderColor="#9C27B0">
          <div className="header">
            <Sparkle size={20} color="#9C27B0" weight="fill" />
            <h3>Simbolismo</h3>
          </div>
          <p>{archetype.symbolism}</p>
        </InfoSection>

        <InfoSection borderColor="#E53935">
          <div className="header">
            <Warning size={20} color="#E53935" weight="fill" />
            <h3>Sombra</h3>
          </div>
          <p>{archetype.shadow}</p>
        </InfoSection>

        <InfoSection borderColor="#43A047">
          <div className="header">
            <Scales size={20} color="#43A047" weight="fill" />
            <h3>Integração</h3>
          </div>
          <p>{archetype.integration}</p>
        </InfoSection>
      </Grid>

      <ProgressContainer>
        <div className="header">
          <span>Manifestação no seu perfil</span>
          <span>{score.toFixed(1)}%</span>
        </div>
        <ProgressBar>
          <ProgressFill
            style={{
              background: archetype.color
            }}
            initial={{ width: 0 }}
            animate={{ width: `${score}%` }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          />
        </ProgressBar>
      </ProgressContainer>
    </Card>
  );
}
