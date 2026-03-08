import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useEffect } from 'react';
import '../App.css';
import { getRoutesConfig } from '@/app/providers/routes/config.tsx';
import { checkAuth } from '@features/Authorization/utils/checkAuth.ts';
import { useAppDispatch } from '@shared/hooks/redux.ts';

function App() {

  const router = createBrowserRouter(getRoutesConfig());
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(checkAuth())
  }, []);
  return (
    <React.Suspense fallback={<div>Загрузка...</div>}>
      <RouterProvider router={router} />;
    </React.Suspense>
  );
}

export default App;
