import { Outlet, useParams } from 'react-router-dom';
import { useTopics } from '@features/Topics/hooks/useTopics.ts';

const CatalogLayout = () => {
  const { subjectId } = useParams();
  const { data: topics } = useTopics(subjectId ?? '');

  return (
    <>
      <Outlet context={{ subjectId, topics }} />
    </>
  );
};

export default CatalogLayout;
