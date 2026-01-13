import './homework.css';
import {useParams} from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HomeworkHeader = () => {
  const { subjectId, themeId } = useParams<{
    subjectId: string;
    themeId?: string;
  }>();
  return (
    <>
      <section className='homework-header'>
        <div className='homework-header__links'>
          <a className='homework-header__links-link' href="#">
            Личный кабинет
          </a>
          <ArrowForwardIcon/>
          <a className='catalog__header__link'>
            Задания по предмету {subjectId}
          </a>
        </div>
        <h1 className='homework-header__theme'>
          Тема {themeId}
        </h1>
      </section>
    </>
  );
};

export default HomeworkHeader;
