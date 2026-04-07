import { useEffect, useMemo, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import './KnowledgeTest.scss';
import {
  buildKnowledgeTestTasks,
  getKnowledgeTestSubjectById,
} from '@features/Test/models/knowledgeTestConfig.ts';
import {
  KnowledgeTestAnswerResult,
  KnowledgeTestSubjectId,
  UserAnswerValue,
} from '@features/Test/models/types.ts';
import { PATHS } from '@app/providers/routes/config.tsx';
import { TestNavigation, TestResults } from '@features/Test';
import { Task } from '@/entities/Task';

export const KnowledgeTest = () => {
  const { subjectId } = useParams<{ subjectId: KnowledgeTestSubjectId }>();
  const subject = getKnowledgeTestSubjectById(subjectId ?? '');

  const tasks = useMemo(
    () => buildKnowledgeTestTasks(subject.id),
    [subject.id ?? ''],
  );
  const initialTime = subject.estimatedDurationMinutes * 60;

  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<
    Record<number, UserAnswerValue>
  >({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    setCurrentTaskIndex(0);
    setUserAnswers({});
    setShowResults(false);
    setTimeLeft(initialTime);
  }, [initialTime, subject.id]);

  useEffect(() => {
    if (showResults) {
      return;
    }

    if (timeLeft === 0) {
      setShowResults(true);
      return;
    }

    const timer = window.setTimeout(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [timeLeft, showResults]);

  const handleAnswerSubmit = (taskId: number, answer: UserAnswerValue) => {
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
    setTimeLeft(initialTime);
  };

  const handleReviewTask = (taskId: number) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      setCurrentTaskIndex(taskIndex);
      setShowResults(false);
    }
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  const normalizeAnswer = (answer: UserAnswerValue) => {
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

  if (!subjectId) {
    return <Navigate to={PATHS.TEST} replace />;
  }

  if (!subject) {
    return <Navigate to={PATHS.TEST} replace />;
  }

  if (tasks.length === 0) {
    return <Navigate to={PATHS.TEST} replace />;
  }

  return (
    <div className="math-test-container">
      <div className="test-header">
        <h1>
          {subject.examLabel} по предмету {subject.subjectLabel}
        </h1>
        <div className="timer">Осталось времени: {formatTime(timeLeft)}</div>
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
