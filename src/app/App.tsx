import { useRoutes } from 'react-router-dom';
import { getRoutesConfig } from './routes/config';
import React from 'react';
import '../App.css';

function App() {
  const routes = useRoutes(getRoutesConfig());
  return (
    <React.Suspense fallback={<div>Загрузка...</div>}>
        {routes}
    </React.Suspense>
  );
}

export default App;
