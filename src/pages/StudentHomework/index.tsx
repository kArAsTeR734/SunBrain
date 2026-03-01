import ProfileNavigation from '@/shared/ui/ProfileNavigation';
import Hints from '@/shared/ui/Hints/Hints.tsx';
import Footer from '@/widgets/Footer';
import Header from '@/widgets/Header';
import { StudentHomework } from '@/widgets/StudentHomework/ui/StudentHomework.tsx';

const StudentHomeworkPage = () => {
  return (
    <>
      <Header/>
      <ProfileNavigation/>
      <Hints/>
      <StudentHomework/>
      <Footer/>
    </>
  );
};

export default StudentHomeworkPage;
