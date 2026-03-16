import './taskThemeList.css';
import TaskTheme from '@/widgets/ObjectsCatalog/TaskThemeList/TaskTheme/TaskTheme.tsx';
import { useParams } from 'react-router-dom';
import { SubjectId } from '@/models/Subject.ts';
import getSubjectTitle from '@shared/utils/getSubjectTitle.ts';
import { useTopics } from '@features/Topics/hooks/useTopics.ts';

const TaskThemeList = () => {
  const { subjectId } = useParams<{ subjectId: SubjectId }>();
  const { data: themes } = useTopics(subjectId ?? '');

  if (!subjectId || !themes) {
    return <h1>Заданий по этому предмету не существует</h1>;
  }

  return (
    <>
      <section className="themes">
        <h2 style={{ marginLeft: 20 }}>
          Задания по предмету: {getSubjectTitle(subjectId)}
        </h2>
        <div className="themes__list">
          {themes.map((theme) => (
            <TaskTheme key={theme.number} {...theme} />
          ))}
        </div>
      </section>
    </>
  );
};

export default TaskThemeList;
