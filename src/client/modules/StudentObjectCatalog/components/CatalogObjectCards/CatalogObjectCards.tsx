import CatalogObjectCard from "../CatalogObjectCard/CatalogObjectCard.tsx";
import classes from './catalogObjectCards.module.css'

const CatalogObjectCards = () => {
    return (
        <>
            <div className={classes.catalog__cards}>
                <CatalogObjectCard/>
            </div>
        </>
    );
};

export default CatalogObjectCards;