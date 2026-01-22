import "./App.css";
import MainPage from "./components/MainPage.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage.tsx";
import Products from "./components/Products.tsx";
import Partners from "./components/Partners.tsx";
import AboutUs from "./components/AboutUs.tsx";
import Contact from "./components/Contact.tsx";
import Layout from "./components/Layout.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Partners" element={<Partners />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
