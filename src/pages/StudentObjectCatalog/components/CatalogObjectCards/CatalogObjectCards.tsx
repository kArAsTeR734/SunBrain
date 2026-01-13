import './catalogObjectCards.css';
import { CATALOG_ITEMS } from '@/app/routes/config.tsx';
import { Link } from 'react-router-dom';

const CatalogObjectCards = () => {
  return (
    <div className='catalog-cards'>
      {CATALOG_ITEMS.map((item) => (
        <Link
          key={item.id}
          to={item.path}
        >
          <div className='catalog-cards__card'>
            <div className='catalog-cards__card-title'>{item.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CatalogObjectCards;
