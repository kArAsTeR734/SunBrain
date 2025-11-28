import Footer from "../../shared/ui/Footer/Footer.tsx";
import HomeworkList from "./components/HomeworkList/HomeworkList.tsx";
import StudentAccountHeader from "../StudentPersonalAccoutn/components/StudentAccountHeader/StudentAccountHeader.tsx";

const StudentHomeworkPage = () => {
    return (
        <>
            <StudentAccountHeader/>
            <HomeworkList/>
            <Footer/>
        </>
    );
};

export default StudentHomeworkPage;