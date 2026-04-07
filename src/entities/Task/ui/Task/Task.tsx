import React, { useState } from 'react';
import './Task.scss';
import { getTypeLabel } from '@entities/Task';

interface TaskProps {
  id: number;
  question: string;
  type: 'text';
  imageUrl?: string;
  onAnswerSubmit: (_id: number, _answer: string | string[] | number) => void;
}

export const Task: React.FC<TaskProps> = ({
  id,
  question,
  type,
  imageUrl,
  onAnswerSubmit,
}) => {
  const [textAnswer, setTextAnswer] = useState<string>('');

  const handleTextSubmit = () => {
    onAnswerSubmit(id, textAnswer);
  };

  const renderQuestionType = () => {
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
