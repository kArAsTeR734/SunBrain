import './catalogHeader.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CatalogHeader = () => {
  return (
    <>
      <section className='catalog__header'>
        <div className='catalog__header__links'>
          <a className='catalog__header__link' href="#">
            Личный кабинет
          </a>
          <ArrowForwardIcon/>
          <a className='catalog__header__link'>
            Каталог заданий
          </a>
        </div>

      </section>
    </>
  );
};

export default CatalogHeader;
