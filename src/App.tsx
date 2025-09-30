import ScrollTopPage from "./components/ScrollTopPage"; 
import Header from "./components/Header";
import MainHome from "./components/MainHome";
import Menu from "./routes/Menu"
import Integrantes from "./routes/Integrantes";
import Faq from "./routes/faq";
import Footer from "./components/Footer";


import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Header />
        <ScrollTopPage />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Integrantes" element={<Integrantes />} />
            <Route path="/faq" element={<Faq />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
export default App;