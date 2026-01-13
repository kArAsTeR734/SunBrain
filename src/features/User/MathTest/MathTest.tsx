import React, { useState, useEffect } from 'react';
import './MathTest.scss';
import {initialTasks} from "@/features/User/MathTest/config/tests.ts";
import TestResults from "@/features/User/TaskResut/TaskResult.tsx";
import Task from "@/entities/Task/Task.tsx";
import TaskNavigation from "@/features/User/TaskNavigation/TaskNavigation.tsx";

const MathTest: React.FC = () => {
  const [tasks] = useState(initialTasks);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, any>>({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180 * 60);

  useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleFinishTest();
    }
  }, [timeLeft, showResults]);

  const handleAnswerSubmit = (taskId: number, answer: any) => {
    setUserAnswers(prev => ({
      ...prev,
      [taskId]: answer
    }));
  };

  const handleTaskSelect = (taskId: number) => {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
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
    setTimeLeft(180 * 60);
  };

  const handleReviewTask = (taskId: number) => {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    setCurrentTaskIndex(taskIndex);
    setShowResults(false);
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentTask = tasks[currentTaskIndex];
  const navigationTasks = tasks.map(task => ({
    id: task.id,
    title: `Задание ${task.id}`,
    isAnswered: !!userAnswers[task.id],
    isCurrent: task.id === currentTask.id
  }));

  if (showResults) {
    const results = tasks.map(task => {
      const userAnswer = userAnswers[task.id];
      const isCorrect = JSON.stringify(userAnswer) === JSON.stringify(task.correctAnswer);

      return {
        taskId: task.id,
        userAnswer: userAnswer || 'Нет ответа',
        correctAnswer: task.correctAnswer,
        isCorrect
      };
    });

    return <TestResults
        answers={results}
        onRestart={handleRestartTest}
        onReview={handleReviewTask}
    />;
  }

  return (
      <div className="math-test-container">
        <div className="test-header">
          <h1>ЕГЭ по математике (профиль)</h1>
          <div className="timer">
            ⏱️ Осталось времени: {formatTime(timeLeft)}
          </div>
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
            <TaskNavigation
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
                style={{ width: `${(Object.keys(userAnswers).length / tasks.length) * 100}%` }}
            />
          </div>
          <div className="progress-text">
            Выполнено: {Object.keys(userAnswers).length} из {tasks.length} заданий
          </div>
        </div>
      </div>
  );
};

export default MathTest;