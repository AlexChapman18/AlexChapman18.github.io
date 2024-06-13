import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
      <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
      </Routes>
  );
}

export default App;