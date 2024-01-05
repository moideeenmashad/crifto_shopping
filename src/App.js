import "./App.css";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Page404 from "./components/404Page/Page404";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/crifto_shopping" element={<Home />} />
          <Route path="*" exact element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
