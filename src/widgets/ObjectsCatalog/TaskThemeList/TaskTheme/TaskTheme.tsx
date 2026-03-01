import './taskTheme.scss';
import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {Theme} from "@/models/Theme.ts";
import { SubjectId } from '@/models/Themes.ts';

const TaskTheme: FC<Theme> = ({themeTitle,themeNumber}: Theme) => {
  const navigate = useNavigate();
  const { subjectId } = useParams<{ subjectId: SubjectId }>();
  const handleClick = () => {
    navigate(`/student/homework/${subjectId}/${themeNumber}`);
  };
  return (
    <>
      <div className='theme-wrapper' onClick={handleClick}>
        <p className='theme-wrapper-number'>
          {themeNumber}
        </p>
        <p className='theme-wrapper-title'>
          {themeTitle}
        </p>
      </div>
    </>
  );
};

export default TaskTheme;
