import Footer from '../../widgets/Footer/Footer.tsx';
import CalendarHeader from './components/CalendarHeader/CalendarHeader.tsx';
import CalendarSlider from './components/CalendarSlider/CalendarSlider.tsx';
import Header from '../../widgets/Header/Header.tsx';

const StudentCalendarPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <CalendarHeader />
      </div>
      <CalendarSlider />
      <Footer />
    </>
  );
};

export default StudentCalendarPage;
