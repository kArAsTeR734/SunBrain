import classes from './catalogObjectCards.module.css';
import { CATALOG_ITEMS } from '@/app/routes/config.tsx';
import { Link } from 'react-router-dom';

const CatalogObjectCards = () => {
  return (
    <div className={classes.catalog__cards}>
      {CATALOG_ITEMS.map((item) => (
        <Link
          key={item.id}
          to={item.path}
          className={classes.catalog__card_link}
        >
          <div className={classes.catalog__card}>
            <div className={classes.catalog__card_title}>{item.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CatalogObjectCards;
