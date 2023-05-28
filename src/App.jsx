import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Members } from "./pages/members";
import { Theoretical } from "./pages/Theoretical";
import { Abstract } from "./pages/Abstract";
import { Conclusions } from "./pages/Conclusions";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/theoretical" element={<Theoretical />} />
        <Route path="/abstract" element={<Abstract />} />
        <Route path="/conclusions" element={<Conclusions />} />
      </Routes>
    </>
  );
}

export default App;
