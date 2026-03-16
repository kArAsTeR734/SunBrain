import { Outlet, useParams } from 'react-router-dom';

const HomeworkLayout = () => {
  const { homeworkId } = useParams<{ homeworkId: string }>();
  const id = homeworkId ? Number(homeworkId) : null;
  return (
    <Outlet context={{ homeworkId: id }} />
  );
};

export default HomeworkLayout;
