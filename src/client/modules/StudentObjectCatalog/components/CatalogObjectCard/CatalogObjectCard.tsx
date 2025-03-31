import classes from './catalogObjectCard.module.css'
import {Link} from "react-router-dom";

const CatalogObjectCard = () => {
    return (
        <>
            <Link to='/student/catalog/ephysic'>
                <div className={classes.catalog__card}>
                    <div className={classes.catalog__card_title}>егэ физика</div>
                </div>
            </Link>
            <Link to='/student/catalog/emath'>
                <div className={classes.catalog__card}>
                    <div className={classes.catalog__card_title}>ЕГЭ Математика</div>
                </div>
            </Link>
            <Link to='/student/catalog/ophysic'>
                <div className={classes.catalog__card}>
                    <div className={classes.catalog__card_title}>ОГЭ Физика</div>
                </div>
            </Link>
            <Link to='/student/catalog/omath'>
                <div className={classes.catalog__card}>
                    <div className={classes.catalog__card_title}>ОГЭ Математика</div>
                </div>
            </Link>
            <Link to='/student/catalog/einfo'>
                <div className={classes.catalog__card}>
                    <div className={classes.catalog__card_title}>ЕГЭ Информатика</div>
                </div>
            </Link>
            <Link to='/student/catalog/oinfo'>
                <div className={classes.catalog__card}>
                    <div className={classes.catalog__card_title}>ОГЭ Информатика</div>
                </div>
            </Link>
        </>
    );
};
3
export default CatalogObjectCard;