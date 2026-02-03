import './objectsCatalog.css';
import CatalogObjectCards from '@/widgets/ObjectsCatalog/CatalogObjectCards/CatalogObjectCards.tsx';
import { Route, Routes } from 'react-router-dom';
import TaskThemeList from '@/widgets/ObjectsCatalog/TaskThemeList/TaskThemeList.tsx';
import StudentHomeworkPage from "@/pages/StudentHomework";
import Hints from "@/shared/ui/Hints/Hints.tsx";
import ProfileNavigation from "@/shared/ui/ProfileNavigation";

export const ObjectsCatalog = () => {
  return (
    <section className="objects-catalog">
      <div className="container">
        <ProfileNavigation/>
        <Hints />
        <Routes>
          <Route index element={<CatalogObjectCards />} />
          <Route path=":subjectId" element={<TaskThemeList />} />
          <Route path=":subjectId" element={<StudentHomeworkPage />} />
        </Routes>
      </div>
    </section>
  );
};

