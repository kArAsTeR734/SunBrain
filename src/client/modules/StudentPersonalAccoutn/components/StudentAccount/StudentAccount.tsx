import classes from './studentAccount.module.css'
import StudentAccountInfo from "../StudentAccountInfo/StudentAccountInfo.tsx";

const StudentAccount = () => {
    return (
        <>
            <section className = {classes.account}>
                <div className="container">
                    <div className={classes.account__wrapper}>
                        <StudentAccountInfo/>
                        <StudentAccount
                    </div>
                </div>
            </section>

        </>
    );
};

export default StudentAccount;