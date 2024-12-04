import { useState } from 'react';
import { questions } from './data/questions';
import { Question as QuestionType } from './types/archetype';
import QuestionComponent from './components/Question';
import Results from './components/Results';
import Intro from './components/Intro';
import styled from 'styled-components';
import './index.css';

const Container = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 30px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: #eee;
  margin: 20px 0;
  border-radius: 2px;
  overflow: hidden;
`;

const Progress = styled.div<{ width: number }>`
  width: ${props => props.width}%;
  height: 100%;
  background: linear-gradient(90deg, #2C3E50, #3498DB);
  transition: width 0.3s ease;
`;

const ProgressText = styled.div`
  text-align: center;
  color: #666;
  font-size: 0.9rem;
  margin-top: 10px;
`;

function App() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  const handleAnswer = (questionId: number, optionIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  if (!started) {
    return <Intro onStart={handleStart} />;
  }

  if (showResults) {
    return <Results answers={answers} questions={questions} />;
  }

  const progress = (currentQuestion / questions.length) * 100;

  return (
    <Container>
      <ProgressBar>
        <Progress width={progress} />
      </ProgressBar>
      <ProgressText>
        {currentQuestion + 1} de {questions.length} questões
      </ProgressText>
      <QuestionComponent
        question={questions[currentQuestion]}
        onAnswer={handleAnswer}
      />
    </Container>
  );
}

export default App;
