import styled from 'styled-components';

const IntroContainer = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 40px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2C3E50;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;
  margin: 0 auto 2rem;
`;

const StartButton = styled.button`
  background: linear-gradient(90deg, #2C3E50, #3498DB);
  color: white;
  padding: 15px 40px;
  border-radius: 30px;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
  }
`;

const Quote = styled.blockquote`
  font-style: italic;
  color: #777;
  margin: 2rem 0;
  padding: 20px;
  border-left: 4px solid #3498DB;
  background: #f8f9fa;
`;

interface IntroProps {
  onStart: () => void;
}

const Intro = ({ onStart }: IntroProps) => {
  return (
    <IntroContainer>
      <Title>Jornada dos Arquétipos</Title>
      <Description>
        Descubra os padrões arquetípicos que moldam sua personalidade e influenciam sua jornada pessoal.
        Baseado nos estudos de Carl Jung sobre o inconsciente coletivo e os símbolos universais.
      </Description>
      <Quote>
        "Até você tornar o inconsciente consciente, ele irá dirigir sua vida e você chamará isso de destino."
        - Carl Jung
      </Quote>
      <StartButton onClick={onStart}>
        Iniciar Jornada
      </StartButton>
    </IntroContainer>
  );
};

export default Intro;
