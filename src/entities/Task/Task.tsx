import React, { useState } from 'react';
import './Task.scss';

interface TaskProps {
  id: number;
  question: string;
  type: 'single' | 'multiple' | 'number' | 'text';
  options?: string[];
  imageUrl?: string;
  onAnswerSubmit: (_id: number, _answer: string | string[] | number) => void;
}

const Task: React.FC<TaskProps> = ({
                                     id,
                                     question,
                                     type,
                                     options,
                                     imageUrl,
                                     onAnswerSubmit
                                   }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [numberAnswer, setNumberAnswer] = useState<string>('');
  const [textAnswer, setTextAnswer] = useState<string>('');

  const handleSingleSelect = (option: string) => {
    setSelectedOptions([option]);
    onAnswerSubmit(id, option);
  };

  const handleMultipleSelect = (option: string) => {
    const newSelection = selectedOptions.includes(option)
        ? selectedOptions.filter(item => item !== option)
        : [...selectedOptions, option];
    setSelectedOptions(newSelection);
    onAnswerSubmit(id, newSelection);
  };

  const handleNumberSubmit = () => {
    onAnswerSubmit(id, numberAnswer);
  };

  const handleTextSubmit = () => {
    onAnswerSubmit(id, textAnswer);
  };

  const renderQuestionType = () => {
    switch (type) {
      case 'single':
        return (
            <div className="options-container">
              {options?.map((option, index) => (
                  <button
                      key={index}
                      className={`option-button ${
                          selectedOptions.includes(option) ? 'selected' : ''
                      }`}
                      onClick={() => handleSingleSelect(option)}
                  >
                    {option}
                  </button>
              ))}
            </div>
        );

      case 'multiple':
        return (
            <div className="options-container">
              {options?.map((option, index) => (
                  <button
                      key={index}
                      className={`option-button ${
                          selectedOptions.includes(option) ? 'selected' : ''
                      }`}
                      onClick={() => handleMultipleSelect(option)}
                  >
                    {option}
                  </button>
              ))}
            </div>
        );

      case 'number':
        return (
            <div className="number-input-container">
              <input
                  type="number"
                  value={numberAnswer}
                  onChange={(e) => setNumberAnswer(e.target.value)}
                  className="number-input"
                  placeholder="Введите число"
              />
              <button onClick={handleNumberSubmit} className="submit-button">
                Подтвердить
              </button>
            </div>
        );

      case 'text':
        return (
            <div className="text-input-container">
            <textarea
                value={textAnswer}
                onChange={(e) => setTextAnswer(e.target.value)}
                className="text-input"
                placeholder="Введите ответ"
                rows={3}
            />
              <button onClick={handleTextSubmit} className="submit-button">
                Подтвердить
              </button>
            </div>
        );
    }
  };

  return (
      <div className="task-container">
        <div className="task-header">
          <h3>Задание №{id}</h3>
          <span className="task-type">{getTypeLabel(type)}</span>
        </div>

        <div className="task-content">
          <p className="question-text">{question}</p>

          {imageUrl && (
              <div className="task-image">
                <img src={imageUrl} alt="Иллюстрация к задаче" />
              </div>
          )}

          {renderQuestionType()}
        </div>
      </div>
  );
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case 'single': return 'Выберите один вариант';
    case 'multiple': return 'Выберите несколько вариантов';
    case 'number': return 'Введите число';
    case 'text': return 'Введите ответ';
    default: return '';
  }
};

export default Task;