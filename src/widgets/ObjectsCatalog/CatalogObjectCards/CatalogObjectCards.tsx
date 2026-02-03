import './catalogObjectCards.css';
import ObjectCard from "@/shared/ui/ObjectCard";
import {useRouting} from "@/shared/hooks/useRouting.ts";

const CatalogObjectCards = () => {
  const {catalogItems} = useRouting();

  return (
      <div className='catalog-cards'>
        {catalogItems.map((item) => (
            <ObjectCard {...item}/>
        ))}
      </div>
  );
};

export default CatalogObjectCards;
