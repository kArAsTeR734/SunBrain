import React, { ReactNode } from 'react';
import { HomeworkBase } from '@entities/Homework/model/types.ts';
import './HomeworkCard.scss'
import { formatHomeworksDeadline } from '@entities/Homework/lib/formatDeadline.ts';

interface HomeworkCardProps {
  task: HomeworkBase,
  action?: ReactNode
}

const HomeworkCard: React.FC<HomeworkCardProps> = ({ task, action }) => {
  const deadline = formatHomeworksDeadline(task.deadline);
  return (
    <div className="homework-card">
      <div className="homework-card__main">
        <div className="homework-card__header">
          <span className="homework-card__subject">{task.subject}</span>
          <span className="homework-card__type">Домашнее задание</span>
        </div>

        <div className="homework-card__body">
          <h3 className="homework-card__title">{task.title}</h3>
          <p className="homework-card__deadline">
            <span>Дедлайн:</span> {deadline}
          </p>
        </div>
      </div>
      {action && <div className="homework-card__actions">{action}</div>}
    </div>
  );
};


export default HomeworkCard;