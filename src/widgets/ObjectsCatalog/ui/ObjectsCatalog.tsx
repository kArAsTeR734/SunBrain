import './objectsCatalog.css';
import Hints from '@shared/ui/Hints/Hints.tsx';
import { Outlet } from 'react-router-dom';
import { Breadcrumbs } from '@widgets/Breadcrumbs';

export const ObjectsCatalog = () => {
  return (
    <section className="objects-catalog">
      <div className="container">
        <Breadcrumbs/>
        <Hints />
        <Outlet />
      </div>
    </section>
  );
};
