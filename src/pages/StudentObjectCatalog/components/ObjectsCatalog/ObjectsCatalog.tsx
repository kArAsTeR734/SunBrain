import './objectsCatalog.css';
import CatalogHeader from '@/shared/ui/CatalogHeader/CatalogHeader.tsx';
import CatalogObjectCards from '../CatalogObjectCards/CatalogObjectCards.tsx';
import { Route, Routes } from 'react-router-dom';
import TaskThemeList from '../TaskThemeList/TaskThemeList.tsx';
import StudentHomeworkPage from "@/pages/StudentHomework";
import Hints from "@/shared/ui/Hints/Hints.tsx";

const ObjectsCatalog = () => {
  return (
    <section className="objects-catalog">
      <div className="container">
        <CatalogHeader />
        <Hints />
        <Routes>
          <Route index element={<CatalogObjectCards />} />
          <Route path=":subjectId" element={<TaskThemeList />} />
          <Route path="/homework" element={<StudentHomeworkPage />} />
        </Routes>
      </div>
    </section>
  );
};

export default ObjectsCatalog;
