import './studentAccount.css';
import StudentAccountInfo from "@/widgets/StudentAccount/StudentAccountInfo";
import StudentAccountPosition from "@/widgets/StudentAccount/StudentAccountPosition";

export const StudentAccount = () => {
  return (
    <>
      <section className='account'>
        <div className="container">
          <div className='account__wrapper'>
            <StudentAccountInfo />
            <div className='account__special--info'>
              <StudentAccountPosition />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

