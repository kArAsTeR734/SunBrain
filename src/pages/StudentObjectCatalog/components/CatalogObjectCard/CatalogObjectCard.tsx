import '../CatalogObjectCards/catalogObjectCards.scss';
import { Link } from 'react-router-dom';
import { useRouting } from '@/shared/hooks/useRouting.ts';

const CatalogObjectCard = () => {
  const { catalogItems } = useRouting();
  return (
    <>
      {catalogItems.map((item) => (
        <Link key={item.id} to={item.fullPath}>
          <div className='catalog__card'>
            <div className='catalog__card_title'>{item.title}</div>
          </div>
        </Link>
      ))}
    </>
  );
};
export default CatalogObjectCard;
