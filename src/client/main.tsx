import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter as Router} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <Router
        future={{
            v7_startTransition: true,
        }}
    >
        <App />
    </Router>
)
