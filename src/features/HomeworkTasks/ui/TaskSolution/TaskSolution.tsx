import { useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import './TaskSolution.scss';

const TaskSolution = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isAnswerCorrect, setAnswerCorrect] = useState<boolean>(false);


  return (
    <div className="solution">
      <div className="solution__toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Скрыть решение' : 'Показать решение'}
      </div>

      {isOpen && (
        <div className="solution__content">
          <div className="solution__step">
            <p>
              <strong>Шаг 1:</strong> Так как треугольник{' '}
              <InlineMath math="ABC" /> равнобедренный, то углы при основании
              равны:
            </p>
            <p>
              <BlockMath math="\angle BAC = \angle ABC" />
            </p>
          </div>

          <div className="solution__step">
            <p>
              <strong>Шаг 2:</strong> В треугольнике сумма углов равна 180°:
            </p>
            <BlockMath math="\angle BAC + \angle ABC + \angle BCA = 180^\circ" />
          </div>

          <div className="solution__step">
            <p>
              <strong>Шаг 3:</strong> Подставляем известные значения:
            </p>
            <BlockMath math="2 \angle ABC + 168^\circ = 180^\circ" />
            <BlockMath math="2 \angle ABC = 180^\circ - 168^\circ" />
            <BlockMath math="2 \angle ABC = 12^\circ" />
            <BlockMath math="\angle ABC = 6^\circ" />
          </div>

          <div className="solution__step">
            <p>
              <strong>Шаг 4:</strong> Внешний угол при вершине{' '}
              <InlineMath math="B" />:
            </p>
            <BlockMath math="\angle CBD = 180^\circ - \angle ABC" />
            <BlockMath math="\angle CBD = 180^\circ - 6^\circ" />
            <BlockMath math="\angle CBD = 174^\circ" />
          </div>

          <div className="solution__final">
            <p>
              <strong>Ответ:</strong>{' '}
              <InlineMath math="\angle CBD = 174^\circ" />
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskSolution;
