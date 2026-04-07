import { Link, Navigate, useParams } from 'react-router-dom';
import {
  getKnowledgeTestSubjectById,
  getKnowledgeTestTotalTaskCount,
} from '@features/Test/models/knowledgeTestConfig.ts';
import { PATHS } from '@app/providers/routes/config.tsx';
import './KnowledgeTestSubjectDetails.scss';

export const KnowledgeTestSubjectDetails = () => {
  const { subjectId } = useParams<{ subjectId: string }>();

  if (!subjectId) {
    return <Navigate to={PATHS.TEST} replace />;
  }

  const subject = getKnowledgeTestSubjectById(subjectId);

  if (!subject) {
    return <Navigate to={PATHS.TEST} replace />;
  }

  const totalTasks = getKnowledgeTestTotalTaskCount(subject);

  return (
    <section className="knowledge-test-details">
      <h1 className="knowledge-test-details__title">{subject.title}</h1>

      <div className="knowledge-test-details__card">
        <div className="knowledge-test-details__row">
          <span>Формат экзамена</span>
          <strong>{subject.examLabel}</strong>
        </div>
        <div className="knowledge-test-details__row">
          <span>Номеров в экзамене</span>
          <strong>{subject.examTaskCount}</strong>
        </div>
        <div className="knowledge-test-details__row">
          <span>Заданий на каждый номер</span>
          <strong>3 уровня сложности</strong>
        </div>
        <div className="knowledge-test-details__row">
          <span>Итого заданий</span>
          <strong>{totalTasks}</strong>
        </div>
        <div className="knowledge-test-details__row">
          <span>Примерное время</span>
          <strong>{subject.estimatedDurationMinutes} минут</strong>
        </div>
      </div>

      <div className="knowledge-test-details__actions">
        <Link
          className="knowledge-test-details__action secondary"
          to={PATHS.TEST}
        >
          Назад к выбору предмета
        </Link>
        <Link
          className="knowledge-test-details__action primary"
          to={PATHS.TEST_RUN(subject.id)}
        >
          Начать тестирование
        </Link>
      </div>
    </section>
  );
};
