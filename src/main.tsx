import "@/styles/global.css";
import { Routes } from "@generouted/react-router";
import { createRoot } from "react-dom/client";
import "~console/theme-detect";

createRoot(document.getElementById("root")!).render(<Routes />);
