import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Justification } from "./pages/Justification";
import { Theoretical } from "./pages/Theoretical";
import { Abstract } from "./pages/Abstract";
import { Conclusions } from "./pages/Conclusions";
import { Materials } from "./pages/Materials";
import { Results } from "./pages/Results";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theoretical" element={<Theoretical />} />
        <Route path="/abstract" element={<Abstract />} />
        <Route path="/conclusions" element={<Conclusions />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/justification" element={<Justification />} />
        <Route path="/results" element={<Results />}></Route>
      </Routes>
    </>
  );
}

export default App;
