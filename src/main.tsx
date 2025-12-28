import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import {setupStore} from "@/app/store/store.ts";
import {Provider} from "react-redux";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
export const store = setupStore();
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <Router
          future={{
            v7_startTransition: true,
          }}
      >
        <App />
      </Router>
    </Provider>
  </QueryClientProvider>

);
