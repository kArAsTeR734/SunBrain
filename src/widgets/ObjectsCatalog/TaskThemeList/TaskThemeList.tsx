import './taskThemeList.scss';
import TaskTheme from '@/widgets/ObjectsCatalog/TaskThemeList/TaskTheme/TaskTheme.tsx';
import { useParams } from 'react-router-dom';
import { SubjectId } from '@/models/Subject.ts';
import getSubjectTitle from '@shared/utils/getSubjectTitle.ts';
import { useTopics } from '@features/Topics/models/hooks/useTopics.ts';

export const TaskThemeList = () => {
  const { subjectId } = useParams<{ subjectId: SubjectId }>();
  const { data: themes } = useTopics(subjectId ?? '');

  if (!subjectId || !themes) {
    return <h1>Заданий по этому предмету не существует</h1>;
  }

  return (
    <>
      <section className="themes">
        <div className="themes__about">
          <h2 className="themes__header">
            Задания по предмету: <span className="highlight">{getSubjectTitle(subjectId)}</span>
          </h2>
          <p className="themes__description">
            Задания в каталоге
            предназначены для самостоятельного решения,
            просмотр решения в данном разделе <span className="highlight">не предусмотрен</span>.
            Функция самопроверки <span className="highlight">доступна</span>.
          </p>
        </div>

        <div className="themes__list">
          {themes.map((theme) => (
            <TaskTheme key={theme.number} {...theme} />
          ))}
        </div>
      </section>
    </>
  );
};
