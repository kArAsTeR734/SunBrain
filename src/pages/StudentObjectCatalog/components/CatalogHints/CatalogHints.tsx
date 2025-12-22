import classes from './catalogHints.module.css';
import CatalogHint from '../CatalogHint/CatalogHint.tsx';

const CatalogHints = () => {
  return (
    <>
      <div className={classes.catalog__hints}>
        <CatalogHint />
      </div>
    </>
  );
};

export default CatalogHints;
