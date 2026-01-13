import React from 'react';
import './TaskResult.scss';

interface Answer {
  taskId: number;
  userAnswer: string | string[] | number;
  correctAnswer: string | string[] | number;
  isCorrect: boolean;
}

interface TestResultsProps {
  answers: Answer[];
  onRestart: () => void;
  onReview: (_taskId: number) => void;
}

const TestResults: React.FC<TestResultsProps> = ({
   answers,
   onRestart,
   onReview
 }) => {
  const correctCount = answers.filter(a => a.isCorrect).length;
  const totalCount = answers.length;
  const percentage = Math.round((correctCount / totalCount) * 100);

  const formatAnswer = (answer: string | string[] | number) => {
    if (Array.isArray(answer)) {
      return answer.join(', ');
    }
    return String(answer);
  };

  return (
      <div className="results-container">
        <div className="results-header">
          <h2>Результаты тестирования</h2>
          <div className="score-card">
            <div className="score-percentage">
              {percentage}%
            </div>
            <div className="score-details">
              Правильно: {correctCount} из {totalCount}
            </div>
          </div>
        </div>

        <div className="results-summary">
          <div className="summary-item correct">
            <span className="summary-count">{correctCount}</span>
            <span className="summary-label">Правильных ответов</span>
          </div>
          <div className="summary-item incorrect">
            <span className="summary-count">{totalCount - correctCount}</span>
            <span className="summary-label">Неправильных ответов</span>
          </div>
        </div>

        <div className="answers-details">
          <h3>Детализация по заданиям:</h3>
          <div className="answers-list">
            {answers.map(answer => (
                <div
                    key={answer.taskId}
                    className={`answer-item ${answer.isCorrect ? 'correct' : 'incorrect'}`}
                    onClick={() => onReview(answer.taskId)}
                >
                  <div className="answer-task-id">
                    Задание №{answer.taskId}
                  </div>
                  <div className="answer-comparison">
                    <div className="user-answer">
                      <strong>Ваш ответ:</strong> {formatAnswer(answer.userAnswer)}
                    </div>
                      <div className="correct-answer">
                        <strong>Правильный ответ:</strong> {formatAnswer(answer.correctAnswer)}
                      </div>
                  </div>
                  <div className="answer-status">
                    {answer.isCorrect ? '✓ Верно' : '✗ Неверно'}
                  </div>
                </div>
            ))}
          </div>
        </div>

        <div className="results-actions">
          <button className="review-button" onClick={() => onReview(answers[0].taskId)}>
            Пройти заново с разбором
          </button>
          <button className="restart-button" onClick={onRestart}>
            Начать новый тест
          </button>
        </div>
      </div>
  );
};

export default TestResults;