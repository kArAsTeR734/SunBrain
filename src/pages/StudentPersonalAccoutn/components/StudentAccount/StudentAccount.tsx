import './studentAccount.css';
import StudentAccountInfo from '../StudentAccountInfo/StudentAccountInfo.tsx';
import StudentAccountPosition from '../StudentAccountPosition/StudentAccountPosition.tsx';

const StudentAccount = () => {
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

export default StudentAccount;
