import './catalogHeader.css';

const CatalogHeader = () => {
  return (
    <>
      <section className='catalog__header'>
        <div className='catalog__header__links'>
          <a className='catalog__header__link' href="#">
            Личный кабинет
          </a>
        </div>
        <div className='catalog__header__link'>
          Каталог заданий
        </div>
      </section>
    </>
  );
};

export default CatalogHeader;
