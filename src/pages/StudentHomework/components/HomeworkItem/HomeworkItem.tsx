import { FC, useState } from 'react';
import './homeworkItem.scss';
import useInput from '../../../../shared/hooks/useInput.ts';
import { Task } from '@/shared/types/TaskTypes.ts';
import Button from '../../../../shared/ui/Button/Button.tsx';
import clsx from 'clsx';
import TaskSolution from '../TaskSolution/TaskSolution.tsx';

interface HomeworkItemProps {
  task: Task;
}

const HomeworkItem: FC<HomeworkItemProps> = ({ task }) => {
  const [isTaskComplete, setIsTaskComplete] = useState<boolean>(false);
  const [isTaskCorrect, setIsTaskCorrect] = useState<boolean>(false);

  const answer = useInput('');

  const toggleTaskComplete = () => {
    if (task.answer === answer.value) setIsTaskCorrect(true);
    setIsTaskComplete(true);
  };

  return (
    <>
      <div className="task">
        <div className="task__header">
          <h4>
            <span className="task__number">Задача {task.number}</span>
          </h4>
        </div>
        <div className="task__text">
          <p className="task__description">{task.description}</p>
        </div>
        <div className="task__actions">
          <div className="task__answer">
            <input
              className={clsx('task__answer-field', {
                'task__answer-field--correct': isTaskCorrect,
                'task__answer-field--invalid': !isTaskCorrect && isTaskComplete,
              })}
              type="text"
              id="aswer-field"
              placeholder="Ответ"
              {...answer}
            />
          </div>
          <Button onClick={() => toggleTaskComplete()} className="task__check">
            Проверить
          </Button>
        </div>

        {isTaskComplete && isTaskCorrect ? <TaskSolution /> : ''}
      </div>
    </>
  );
};

export default HomeworkItem;
