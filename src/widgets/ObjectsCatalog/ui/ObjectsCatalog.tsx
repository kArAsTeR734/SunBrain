import './objectsCatalog.css';
import ProfileNavigation from '@shared/ui/ProfileNavigation';
import Hints from '@shared/ui/Hints/Hints.tsx';
import {Outlet} from 'react-router-dom';

export const ObjectsCatalog = () => {
  return (
    <section className="objects-catalog">
      <div className="container">
        <ProfileNavigation/>
        <Hints />
        <Outlet/>
      </div>
    </section>
  );
};

