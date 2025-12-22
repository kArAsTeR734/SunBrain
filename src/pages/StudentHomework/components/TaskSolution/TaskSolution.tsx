import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import './TaskSolution.css';

const TaskSolution = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="task__solution solution">
      <div onClick={() => setIsOpen(!isOpen)} className="solution__toggle">
        {isOpen ? 'Скрыть решение' : 'Показать решение'}
      </div>
      {isOpen && (
        <div className="solution__content">
          <div className="solution__step">
            <p>
              <strong>Шаг 1:</strong> Анализируем условие
            </p>
            <p>
              Дано: <InlineMath math="\angle B = 73^\circ" />,{' '}
              <InlineMath math="AB = BC" />. Так как{' '}
              <InlineMath math="AB = BC" />, треугольник{' '}
              <InlineMath math="ABC" /> —<strong> равнобедренный</strong> с
              основанием <InlineMath math="AC" />.
            </p>
          </div>

          <div className="solution__step">
            <p>
              <strong>Шаг 2:</strong> Свойства равнобедренного треугольника
            </p>
            <p>
              В равнобедренном треугольнике углы при основании равны:
              <InlineMath math="\angle A = \angle C" />
            </p>
          </div>

          <div className="solution__step">
            <p>
              <strong>Шаг 3:</strong> Сумма углов треугольника
            </p>
            <BlockMath math="\angle A + \angle B + \angle C = 180^\circ" />
            <p>Сумма углов любого треугольника равна 180°.</p>
          </div>

          <div className="solution__step">
            <p>
              <strong>Шаг 4:</strong> Подставляем известные значения
            </p>
            <p>
              Так как <InlineMath math="\angle A = \angle C" /> и{' '}
              <InlineMath math="\angle B = 73^\circ" />:
            </p>
            <BlockMath math="\angle C + 73^\circ + \angle C = 180^\circ" />
            <BlockMath math="2\angle C + 73^\circ = 180^\circ" />
          </div>

          <div className="solution__step">
            <p>
              <strong>Шаг 5:</strong> Решаем уравнение
            </p>
            <BlockMath math="2\angle C = 180^\circ - 73^\circ" />
            <BlockMath math="2\angle C = 107^\circ" />
            <BlockMath math="\angle C = \frac{107^\circ}{2} = 53.5^\circ" />
          </div>

          <div className="solution-final">
            <p>
              <strong>Ответ:</strong>{' '}
              <InlineMath math="\angle C = 53.5^\circ" />
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskSolution;
