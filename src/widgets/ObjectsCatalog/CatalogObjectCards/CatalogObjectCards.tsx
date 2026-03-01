import './catalogObjectCards.css';
import ObjectCard from "@/shared/ui/ObjectCard";
import {useRouting} from "@/shared/hooks/useRouting.ts";

const CatalogObjectCards = () => {
  const {catalogItems} = useRouting();

  return (
      <div className='catalog-cards'>
        {catalogItems.map((item) => (
            <ObjectCard key={item.fullPath} {...item}/>
        ))}
      </div>
  );
};

export default CatalogObjectCards;
