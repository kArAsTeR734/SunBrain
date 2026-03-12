import { Outlet, useParams } from 'react-router-dom';

const HomeworkLayout = () => {
  const {homeworkId } = useParams();
  console.log(homeworkId);
  return (
    <>
      <Outlet context={{ homeworkId }} />
    </>
  );
};

export default HomeworkLayout;
