import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Members } from "./pages/members";
import { Theoretical } from "./pages/Theoretical";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/theoretical" element={<Theoretical />} />
      </Routes>
    </>
  );
}

export default App;
