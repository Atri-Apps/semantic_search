import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Trial from "./pages/Trial.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/search" element={<Search />} />
<Route path="/trial" element={<Trial />} />
    </Routes>
  );
}
