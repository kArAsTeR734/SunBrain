import React from 'react';
import './TaskNavigation.scss';

interface TaskNavigationProps {
  tasks: Array<{
    id: number;
    title: string;
    isAnswered: boolean;
    isCurrent: boolean;
  }>;
  onTaskSelect: (_id: number) => void;
  currentTask: number;
  totalTasks: number;
  onFinish: () => void;
}

const TaskNavigation: React.FC<TaskNavigationProps> = ({
   tasks,
   onTaskSelect,
   currentTask,
   totalTasks,
   onFinish
 }) => {
  return (
      <div className="navigation-container">
        <div className="navigation-header">
          <h3>Навигация по заданиям</h3>
          <div className="progress-info">
            Задание {currentTask} из {totalTasks}
          </div>
        </div>

        <div className="tasks-grid">
          {tasks.map(task => (
              <button
                  key={task.id}
                  className={`task-button ${
                      task.isCurrent ? 'current' : ''
                  } ${
                      task.isAnswered ? 'answered' : 'unanswered'
                  }`}
                  onClick={() => onTaskSelect(task.id)}
              >
                {task.id}
              </button>
          ))}
        </div>

        <div className="navigation-footer">
          <button
              className="prev-button"
              onClick={() => onTaskSelect(currentTask - 1)}
              disabled={currentTask === 1}
          >
            Назад
          </button>

          <button
              className="next-button"
              onClick={() => onTaskSelect(currentTask + 1)}
              disabled={currentTask === totalTasks}
          >
            Вперед
          </button>

          <button
              className="finish-button"
              onClick={onFinish}
          >
            Завершить тест
          </button>
        </div>

        <div className="legend">
          <div className="legend-item">
            <span className="legend-dot answered"></span>
            <span>Отвечено</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot unanswered"></span>
            <span>Не отвечено</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot current"></span>
            <span>Текущее</span>
          </div>
        </div>
      </div>
  );
};

export default TaskNavigation;