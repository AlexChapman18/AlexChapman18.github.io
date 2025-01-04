// ---- Imports ----

// Pages
import About from "./pages/About";
import Projects from "./pages/Projects";

// Routing
import { Route, Routes } from "react-router-dom";


// ---- App ----
function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;