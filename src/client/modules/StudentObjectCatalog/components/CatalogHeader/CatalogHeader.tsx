import classes from './catalogHeader.module.css'

const CatalogHeader = () => {
    return (
        <>
            <section className={classes.catalogHeader}>
                    <div className={classes.catalogHeader__links}>
                        <a className={classes.catalogHeader__link} href="#">Личный кабинет</a>
                    </div>
                    <div className={classes.catalogHeader__currentLink}>Каталог заданий</div>
            </section>
        </>
    );
};

export default CatalogHeader;