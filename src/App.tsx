import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import NextPage from "./NextPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/next" element={<NextPage />} />
      </Routes>
    </Router>
  );
}
