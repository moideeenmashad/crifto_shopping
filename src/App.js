import "./App.css";
import "typeface-roboto";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Page404 from "./components/404Page/Page404";
// import Loading from "./components/Loading/Loading";
import UserLogin from "./pages/Login/UserLogin";
function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/login" element={<UserLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
