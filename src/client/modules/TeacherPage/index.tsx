import DashBoard from "./components/DashBoard/DashBoard.tsx";
import TeacherHeader from "./components/TeacherHeader/TeacherHeader.tsx";
import Pagination from "./components/Pagination/Pagination.tsx";

const TeacherPage = () => {
    return (
        <>
            <TeacherHeader/>
            <DashBoard/>
            <Pagination/>
        </>
    );
};

export default TeacherPage;