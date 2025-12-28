import './studentAccount.css';
import StudentAccountInfo from '../StudentAccountInfo/StudentAccountInfo.tsx';
import StudentAccountProgress from '../StudentAccountProgress/StudentAccountProgress.tsx';
import StudentAccountPosition from '../StudentAccountPosition/StudentAccountPosition.tsx';

const StudentAccount = () => {
  return (
    <>
      <section className='account'>
        <div className="container">
          <div className='account__wrapper'>
            <StudentAccountInfo />
            <div className='account__special--info'>
              <StudentAccountProgress />
              <StudentAccountPosition />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentAccount;
