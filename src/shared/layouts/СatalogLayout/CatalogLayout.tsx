import { Outlet, useParams } from 'react-router-dom';

const CatalogLayout = () => {
  const { subjectId } = useParams();

  return (
    <>
      <Outlet context ={{subjectId}}/>
    </>
  );
};

export default CatalogLayout;