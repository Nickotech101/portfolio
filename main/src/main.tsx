import { createRoot } from 'react-dom/client'
import App from "./app/App.tsx";
import "./styles/index.css";   // ← must say styles/index.css, not ./index.css

  createRoot(document.getElementById("root")!).render(<App />);
  

