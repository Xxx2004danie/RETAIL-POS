import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Text from "./pages/Dashboard/dashboard.jsx";

import App from './App'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
