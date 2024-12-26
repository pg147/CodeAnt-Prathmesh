// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import SignIn from "./pages/sign-in/SignIn";
import Repository from "./pages/repository/Repository";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/repository" element={<Repository />} />
      </Routes>
    </Router>
  )
}
