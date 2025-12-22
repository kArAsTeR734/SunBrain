import Footer from '../../widgets/Footer/Footer.tsx';
import HomeworkList from './components/HomeworkList/HomeworkList.tsx';
import Header from '../../widgets/Header/Header.tsx';

const StudentHomeworkPage = () => {
  return (
    <>
      <Header />
      <HomeworkList />
      <Footer />
    </>
  );
};

export default StudentHomeworkPage;
