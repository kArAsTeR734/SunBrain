import Header from '@/widgets/Header';
import Footer from '@/widgets/Footer';
import ProfileNavigation from '@/shared/ui/ProfileNavigation';
import CalendarSlider from '@/widgets/CalendarSlider';

const StudentCalendarPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <ProfileNavigation />
      </div>
      <CalendarSlider />
      <Footer />
    </>
  );
};

export default StudentCalendarPage;
