import './objectsCatalog.css';
import CatalogObjectCards from '@/widgets/ObjectsCatalog/CatalogObjectCards/CatalogObjectCards.tsx';
import Hints from "@/shared/ui/Hints/Hints.tsx";
import ProfileNavigation from "@/shared/ui/ProfileNavigation";
import Footer from '@/widgets/Footer';

export const ObjectsCatalog = () => {
  return (
    <section className="objects-catalog">
      <div className="container">
        <ProfileNavigation/>
        <Hints />
        <CatalogObjectCards />
        <Footer/>
      </div>
    </section>
  );
};

