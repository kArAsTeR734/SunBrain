import Hints from '@/shared/ui/Hints/Hints.tsx';
import Footer from '@/widgets/Footer';
import Header from '@/widgets/Header';
import { Outlet } from 'react-router-dom';
import { Breadcrumbs } from '@widgets/Breadcrumbs';

const StudentHomeworkPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Breadcrumbs/>
        <Hints />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default StudentHomeworkPage;
