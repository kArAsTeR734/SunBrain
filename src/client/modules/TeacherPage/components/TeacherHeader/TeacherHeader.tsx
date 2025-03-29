import {Link, NavLink} from "react-router-dom";
import css from './teacherHeader.module.css'
import CreateTaskButton from "../CreateTaskButton/CreateTaskButton.tsx";
import buttonCss from '../CreateTaskButton/createTaskButton.module.css'
import StudentSearch from "../../UI/StudentSearch/StudentSearch.tsx";

const TeacherHeader = () => {
    return (
        <section className={css.header}>
            <div className="container">
                <header className={css.headerWrapper}>
                    <div className={css.headerLogo}>
                        <NavLink to="/" className={css.icon}>
                            <img src="/src/client/modules/HomePage/assets/icons/logo.svg" alt=""/>
                        </NavLink>
                        <Link to="/" className={css.logoName}>SunBrain</Link>
                    </div>
                    <StudentSearch/>
                    <CreateTaskButton onClick={()=> console.log('Hello World')} className={buttonCss.createTaskButton}>Создать задачу</CreateTaskButton>
                </header>
            </div>
        </section>
    );
};

export default TeacherHeader;