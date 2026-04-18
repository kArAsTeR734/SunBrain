import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  getKnowledgeTestSubjectById,
} from '@features/Test/models/knowledgeTestConfig.ts';
import { PATHS } from '@app/providers/routes/config.tsx';
import './KnowledgeTestSubjectDetails.scss';
import { useGetKnowledgeTestTotalTaskCount } from '@features/Test/models/hooks/useGetKnowledgeTestTotalTaskCount.ts';
import { useStartTestMutation } from '@features/Test/models/hooks/useStartTestMutation.ts';
import { KnowledgeTestSubjectId } from '@features/Test/models/types.ts';
import React from 'react';

export const KnowledgeTestSubjectDetails = () => {
  const { subjectId } = useParams<{ subjectId: KnowledgeTestSubjectId }>();
  const navigate = useNavigate();

  const subject = getKnowledgeTestSubjectById(subjectId ?? 'emath');

  const { data: totalTasks } = useGetKnowledgeTestTotalTaskCount(subject?.id);
  const startTestMutation = useStartTestMutation()

  const handleStartTest = (e:React.MouseEvent) => {
    e.preventDefault();
    if (!subjectId) return;
    startTestMutation.mutate(subjectId)
  }

  if(!subject || subjectId) {
    navigate(PATHS.TEST);
  }

  return (
    <section className="knowledge-test-details">
      <h1 className="knowledge-test-details__title">{subject?.title}</h1>

      <div className="knowledge-test-details__card">
        <div className="knowledge-test-details__row">
          <span>Формат экзамена</span>
          <strong>{subject?.examLabel}</strong>
        </div>
        <div className="knowledge-test-details__row">
          <span>Номеров в экзамене</span>
          <strong>{subject?.examTaskCount}</strong>
        </div>
        <div className="knowledge-test-details__row">
          <span>Заданий на каждый номер</span>
          <strong>1-2 уровня сложности</strong>
        </div>
        <div className="knowledge-test-details__row">
          <span>Итого заданий</span>
          <strong>{totalTasks}</strong>
        </div>
      </div>

      <div className="knowledge-test-details__actions">
        <Link
          className="knowledge-test-details__action secondary"
          to={PATHS.TEST}
        >
          Назад к выбору предмета
        </Link>
        <button
          className="knowledge-test-details__action primary"
          onClick={handleStartTest}
        >
          Начать тестирование
        </button>
      </div>
    </section>
  );
};
