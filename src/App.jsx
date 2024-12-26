// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import SignIn from "./pages/sign-in/SignIn";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  )
}
