import HomeworkLayout from '@/shared/layouts/HomeworkLayout/HomeworkLayout.tsx';
import TaskThemeList from '@/widgets/ObjectsCatalog/TaskThemeList/TaskThemeList.tsx';
import {Route,Routes} from 'react-router-dom'
import HomeworkList from '@/features/HomeworkTasks/HomeworkList/HomeworkList.tsx';

export const StudentHomework = () => {
  return (
    <>
      <Routes>
        <Route path=":subjectId" element={<HomeworkLayout />}>
          <Route index element={<TaskThemeList />} />
          <Route path=":themeId" element={<HomeworkList/>} />
        </Route>
      </Routes>

    </>
  );
};

