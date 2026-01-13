import './taskTheme.scss';
import { FC } from 'react';
import {useNavigate} from 'react-router-dom';
import {PATHS} from "@/app/routes/config.tsx";
import {Theme} from "@/pages/StudentObjectCatalog/components/models/Theme.ts";

const TaskTheme: FC<Theme> = ({themeTitle,themeNumber}: Theme) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(PATHS.STUDENT.SUBJECT_HOMEWORK);
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
