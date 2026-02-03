import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";
import StudentAccount from "@/widgets/StudentAccount";
import TaskGenerator from "@/shared/TaskGenerator.tsx";

const StudentPersonalAccountPage = () => {
  return (
    <>
      <Header />
      <StudentAccount />
      <TaskGenerator/>
      <Footer />
    </>
  );
};

export default StudentPersonalAccountPage;
