// import "./App.css";
// import "./index.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Shop" element={<ShopPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
