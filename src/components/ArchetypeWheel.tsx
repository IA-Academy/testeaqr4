import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import styled from 'styled-components';
import { archetypes } from '../data/archetypes';
import { 
  Brain, Heart, Crown, Lightbulb, Compass, Users, Smiley,
  ShieldStar, MagicWand, PaintBrush, Lightning, Baby
} from '@phosphor-icons/react';

const WheelContainer = styled.div`
  width: 100%;
  height: 500px;
  margin: 2rem 0;
  position: relative;
`;

const CenterContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: white;
  padding: 20px;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
`;

const MainArchetype = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2C3E50;
`;

const IconWrapper = styled.div<{ color: string }>`
  margin-top: 1rem;
  font-size: 2.5rem;
  color: ${props => props.color};
`;

const TooltipContent = styled.div`
  background: white;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const getArchetypeIcon = (type: string) => {
  const iconProps = { size: 32, weight: "bold" };
  
  switch(type) {
    case 'sage': return <Brain {...iconProps} />;
    case 'lover': return <Heart {...iconProps} />;
    case 'ruler': return <Crown {...iconProps} />;
    case 'creator': return <Lightbulb {...iconProps} />;
    case 'explorer': return <Compass {...iconProps} />;
    case 'everyman': return <Users {...iconProps} />;
    case 'jester': return <Smiley {...iconProps} />;
    case 'hero': return <ShieldStar {...iconProps} />;
    case 'magician': return <MagicWand {...iconProps} />;
    case 'innocent': return <Baby {...iconProps} />;
    case 'rebel': return <Lightning {...iconProps} />;
    case 'caregiver': return <PaintBrush {...iconProps} />;
    default: return null;
  }
};

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload || !payload[0]) return null;
  
  const archetypeData = archetypes[payload[0].payload.type];
  if (!archetypeData) return null;

  return (
    <TooltipContent>
      <strong>{archetypeData.name}</strong>
      <div>{payload[0].value.toFixed(1)}%</div>
    </TooltipContent>
  );
};

interface ArchetypeWheelProps {
  results: Array<{
    type: string;
    percentage: number;
  }>;
}

const ArchetypeWheel = ({ results }: ArchetypeWheelProps) => {
  if (!results.length) return null;

  // Filtrar apenas os arquétipos que existem no nosso mapa
  const validResults = results.filter(result => archetypes[result.type]);
  
  if (!validResults.length) return null;
  
  const mainArchetype = validResults[0];
  const mainArchetypeData = archetypes[mainArchetype.type];

  if (!mainArchetypeData) return null;

  // Recalcular as porcentagens apenas com os resultados válidos
  const totalPercentage = validResults.reduce((sum, result) => sum + result.percentage, 0);
  const normalizedResults = validResults.map(result => ({
    ...result,
    percentage: (result.percentage / totalPercentage) * 100
  }));

  return (
    <WheelContainer>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={normalizedResults}
            cx="50%"
            cy="50%"
            innerRadius={100}
            outerRadius={160}
            paddingAngle={2}
            dataKey="percentage"
          >
            {normalizedResults.map((entry, index) => {
              const archetypeData = archetypes[entry.type];
              if (!archetypeData) return null;
              
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={archetypeData.color}
                  strokeWidth={1}
                />
              );
            })}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <CenterContent>
        <MainArchetype>{mainArchetypeData.name}</MainArchetype>
        <IconWrapper color={mainArchetypeData.color}>
          {getArchetypeIcon(mainArchetype.type)}
        </IconWrapper>
      </CenterContent>
    </WheelContainer>
  );
};

export default ArchetypeWheel;
