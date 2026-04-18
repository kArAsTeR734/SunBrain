import React from 'react';
import './TestResult.scss';
import { useTestReview } from '@features/Test/models/hooks/useTestReview.ts';
import { useMySearchParams } from '@shared/hooks/useMySearchParams.ts';
import { Loader } from '@shared/ui';

interface TestResultsProps {
  onRestart: () => void;
  onReview: (_taskId: number) => void;
}

export const TestResults: React.FC<TestResultsProps> = ({
  onRestart,
  onReview,
}) => {
  const params = useMySearchParams('testId');
  const testId = Number(params);

  const { data: review, isLoading, error } = useTestReview(testId);

  if (!review) {
    return <h1>Не удалось загрузить результаты тестирования.</h1>;
  }

  const percentage = review.totalTasks === 0 ? 0 : Math.round((review.correctTasks / review.totalTasks) * 100);

  const formatAnswer = (answer: string | null): string => {
    if (Array.isArray(answer)) {
      return answer.join(', ');
    }
    return String(answer);
  };

  if(isLoading){
    return <Loader/>
  }

  if(error){
    return <h1>Произошла непредвиденная ошибка {error.message}</h1>
  }

  return (
    <div className="results-container">
      <div className="results-header">
        <h2>Результаты тестирования</h2>
        <div className="score-card">
          <div className="score-percentage">{percentage}%</div>
          <div className="score-details">
            Правильно: {review.correctTasks} из {review.totalTasks}
          </div>
        </div>
      </div>

      <div className="results-summary">
        <div className="summary-item correct">
          <span className="summary-count">{review.correctTasks}</span>
          <span className="summary-label">Правильных ответов</span>
        </div>
        <div className="summary-item incorrect">
          <span className="summary-count">
            {review.totalTasks - review.correctTasks}
          </span>
          <span className="summary-label">Неправильных ответов</span>
        </div>
      </div>

      <div className="answers-details">
        <h3>Детализация по заданиям:</h3>
        <div className="answers-list">
          {review.answers.map((answer) => (
            <div
              key={answer.taskId}
              className={`answer-item ${answer.isCorrect ? 'correct' : 'incorrect'}`}
              onClick={() => onReview(answer.taskId)}
            >
              <div className="answer-task-id">Задание №{answer.taskId}</div>
              <div className="answer-comparison">
                <div className="user-answer">
                  <strong>Ваш ответ:</strong> {formatAnswer(answer.userAnswer)}
                </div>
                <div className="correct-answer">
                  <strong>Правильный ответ:</strong>{' '}
                  {formatAnswer(answer.correctAnswer)}
                </div>
              </div>
              <div className="answer-status">
                {answer.isCorrect ? 'Верно' : 'Неверно'}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="results-actions">
        <button
          className="review-button"
          onClick={() => onReview(review.answers[0]?.taskId ?? 1)}
        >
          Пройти заново с разбором
        </button>
        <button className="restart-button" onClick={onRestart}>
          Начать новый тест
        </button>
      </div>
    </div>
  );
};
