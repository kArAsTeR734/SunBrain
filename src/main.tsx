import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import {setupStore} from "@/app/store/store.ts";
import {Provider} from "react-redux";
export const store = setupStore();

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router
        future={{
          v7_startTransition: true,
        }}
    >
      <App />
    </Router>
  </Provider>
);
