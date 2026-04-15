import { useEffect, useState } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import './KnowledgeTest.scss';
import { getKnowledgeTestSubjectById } from '@features/Test/models/knowledgeTestConfig.ts';
import {
  KnowledgeTestAnswerResult,
  KnowledgeTestSubjectId,
} from '@features/Test/models/types.ts';
import { PATHS } from '@app/providers/routes/config.tsx';
import { TestNavigation, TestResults } from '@features/Test';
import { Task } from '@/entities/Task';

export const KnowledgeTest = () => {
  const { subjectId } = useParams<{ subjectId: KnowledgeTestSubjectId }>();
  const subject = getKnowledgeTestSubjectById(subjectId ?? '');

  const tasks = useGetTestTasks();
  const navigate = useNavigate();

  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    setCurrentTaskIndex(0);
    setUserAnswers({});
    setShowResults(false);
  }, [subject?.id]);

  useEffect(() => {
    if (showResults) {
      return;
    }
  }, [showResults]);

  useEffect(() => {
    if (!subject || tasks.length === 0 || !subjectId) {
      navigate(PATHS.TEST, { replace: true });
    }
  }, [subjectId, tasks, subject, navigate]);

  const handleAnswerSubmit = (taskId: number, answer: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [taskId]: answer,
    }));
  };

  const handleTaskSelect = (taskId: number) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      setCurrentTaskIndex(taskIndex);
    }
  };

  const handleFinishTest = () => {
    setShowResults(true);
  };

  const handleRestartTest = () => {
    setUserAnswers({});
    setCurrentTaskIndex(0);
    setShowResults(false);
  };

  const handleReviewTask = (taskId: number) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      setCurrentTaskIndex(taskIndex);
      setShowResults(false);
    }
  };

  const normalizeAnswer = (answer: string) => {
    if (Array.isArray(answer)) {
      return [...answer].sort().join('|').trim();
    }

    return String(answer).trim();
  };

  const results: KnowledgeTestAnswerResult[] = tasks.map((task) => {
    const userAnswer = userAnswers[task.id];

    return {
      taskId: task.id,
      userAnswer: userAnswer ?? 'Нет ответа',
      correctAnswer: task.correctAnswer,
      isCorrect:
        userAnswer !== undefined &&
        normalizeAnswer(userAnswer) === normalizeAnswer(task.correctAnswer),
    };
  });

  const currentTask = tasks[currentTaskIndex];
  const navigationTasks = tasks.map((task) => ({
    id: task.id,
    title: `Задание ${task.id}`,
    isAnswered: userAnswers[task.id] !== undefined,
    isCurrent: task.id === currentTask.id,
  }));

  const answeredCount = Object.keys(userAnswers).length;

  if (showResults) {
    return (
      <TestResults
        answers={results}
        onRestart={handleRestartTest}
        onReview={handleReviewTask}
      />
    );
  }

  return (
    <div className="math-test-container">
      <div className="test-header">
        <h1>
          {subject?.examLabel} по предмету {subject?.subjectLabel}
        </h1>
      </div>

      <div className="test-content">
        <div className="task-section">
          <Task
            key={currentTask.id}
            {...currentTask}
            onAnswerSubmit={handleAnswerSubmit}
          />
        </div>

        <div className="navigation-section">
          <TestNavigation
            tasks={navigationTasks}
            onTaskSelect={handleTaskSelect}
            currentTask={currentTask.id}
            totalTasks={tasks.length}
            onFinish={handleFinishTest}
          />
        </div>
      </div>

      <div className="test-progress">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${(answeredCount / tasks.length) * 100}%`,
            }}
          />
        </div>
        <div className="progress-text">
          Выполнено: {answeredCount} из {tasks.length} заданий
        </div>
      </div>
    </div>
  );
};
