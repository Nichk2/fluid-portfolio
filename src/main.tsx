import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { initClarity } from "./lib/clarity";
import "./index.css";

initClarity();

createRoot(document.getElementById("root")!).render(<App />);
