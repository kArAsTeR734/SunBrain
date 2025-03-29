import StudentAccountHeader from "./components/StudentAccountHeader/StudentAccountHeader.tsx";
import Footer from "../../shared/Footer/Footer.tsx";
import StudentAccount from "./components/StudentAccount/StudentAccount.tsx";

const StudentPersonalAccountPage = () => {
    return (
        <>
            <StudentAccountHeader/>
            <StudentAccount/>
            <Footer/>
        </>
    );
};

export default StudentPersonalAccountPage;