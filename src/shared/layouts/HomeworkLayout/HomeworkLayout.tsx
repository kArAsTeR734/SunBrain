import { Outlet, useParams } from 'react-router-dom';

const HomeworkLayout = () => {
  const { subjectId } = useParams();

  return (
    <>
      <Outlet context ={{subjectId}}/>
    </>
  );
};

export default HomeworkLayout;