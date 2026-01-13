import './taskThemeList.css';
import TaskTheme from '../TaskTheme/TaskTheme.tsx';
import { useParams } from 'react-router-dom';
import { SubjectId, THEMES_BY_SUBJECT } from '@/models/Themes.ts';
import getSubjectTitle from '../../../../utils/getSubjectTitle.ts';

const TaskThemeList = () => {
  const { subjectId } = useParams<{ subjectId: SubjectId }>();
  const themes = subjectId ? THEMES_BY_SUBJECT[subjectId] : [];

  if(!subjectId){
    return (
        <h1>Заданий по этому предмету не существует</h1>
    )
  }
  return (
    <>
      <section className='themes'>
        <h2>Задания по предмету: {getSubjectTitle(subjectId)}</h2>
        <div className='themes__list'>
          {themes.map((theme) => (
            <TaskTheme key={theme.themeNumber}
                       {...theme}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default TaskThemeList;
