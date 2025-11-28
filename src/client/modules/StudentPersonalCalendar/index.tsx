import Footer from "../../shared/ui/Footer/Footer.tsx";
import CalendarHeader from "./components/CalendarHeader/CalendarHeader.tsx";
import CalendarSlider from "./components/CalendarSlider/CalendarSlider.tsx";
import StudentAccountHeader from "../StudentPersonalAccoutn/components/StudentAccountHeader/StudentAccountHeader.tsx";

const StudentCalendarPage = () => {
    return (
        <>
            <StudentAccountHeader/>
            <div className="container">
                <CalendarHeader/>
            </div>
            <CalendarSlider/>
            <Footer/>
        </>
    );
};

export default StudentCalendarPage;