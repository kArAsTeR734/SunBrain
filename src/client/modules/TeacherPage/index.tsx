import DashBoard from "./components/DashBoard/DashBoard.tsx";
import TeacherHeader from "./components/TeacherHeader/TeacherHeader.tsx";
import Pagination from "./components/Pagination/Pagination.tsx";
import {ModalProvider} from "./context/ModalContext.tsx";
import Modal from "./UI/Modal/Modal.tsx";

const TeacherPage = () => {
    return (
        <>
            <ModalProvider>
                <TeacherHeader/>
                <Modal/>
                <DashBoard/>
                <Pagination/>
            </ModalProvider>

        </>
    );
};

export default TeacherPage;