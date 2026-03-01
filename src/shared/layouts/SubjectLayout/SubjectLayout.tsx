import { Outlet, useParams } from 'react-router-dom';

export const SubjectLayout = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <Outlet />
    </>
  );
};
