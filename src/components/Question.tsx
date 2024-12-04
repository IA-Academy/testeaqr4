import styled from 'styled-components';
import { Question } from '../types/archetype';

const QuestionContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
`;

const QuestionText = styled.h2`
  color: #2C3E50;
  margin-bottom: 2rem;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.4;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Option = styled.button`
  padding: 18px 25px;
  border: 2px solid #eee;
  border-radius: 10px;
  background: #fff;
  cursor: pointer;
  text-align: left;
  font-size: 1rem;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: #3498DB;
    background: #f8f9fa;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background: #3498DB;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

interface QuestionProps {
  question: Question;
  onAnswer: (questionId: number, optionIndex: number) => void;
}

const QuestionComponent = ({ question, onAnswer }: QuestionProps) => {
  return (
    <QuestionContainer>
      <QuestionText>{question.text}</QuestionText>
      <OptionsContainer>
        {question.options.map((option, index) => (
          <Option
            key={index}
            onClick={() => onAnswer(question.id, index)}
          >
            {option.text}
          </Option>
        ))}
      </OptionsContainer>
    </QuestionContainer>
  );
};

export default QuestionComponent;
