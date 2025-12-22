import classes from './studentAccount.module.css';
import StudentAccountInfo from '../StudentAccountInfo/StudentAccountInfo.tsx';
import StudentAccountProgress from '../StudentAccountProgress/StudentAccountProgress.tsx';
import StudentAccountPosition from '../StudentAccountPosition/StudentAccountPosition.tsx';

const StudentAccount = () => {
  return (
    <>
      <section className={classes.account}>
        <div className="container">
          <div className={classes.account__wrapper}>
            <StudentAccountInfo />
            <div className={classes.account__specialInfo}>
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
