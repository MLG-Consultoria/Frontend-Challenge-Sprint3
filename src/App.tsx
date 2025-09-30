import ScrollTopPage from "./components/ScrollTopPage"; 
import Header from "./components/Header";
import MainHome from "./components/MainHome";
import MainMenu from "./routes/Menu"
import Integrantes from "./routes/Integrantes";
import Faq from "./routes/Faq";
import Contato from "./routes/Contato";
import Sobre from "./routes/menu-routes/sobre";
import VerConsultas from "./routes/menu-routes/VerConsultas";
import Localizacao from "./routes/menu-routes/Localizacao";
import UnidadeDetalhe from "./routes/menu-routes/unidadeDetalhes";
import SuporteSite from "./routes/menu-routes/SuporteSite";
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
            <Route path="/Main" element={<MainMenu />} />
            <Route path="/Integrantes" element={<Integrantes />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/VerConsultas" element={<VerConsultas />} />
            <Route path="/Localizacao" element={<Localizacao />} />
            <Route path="/unidades/:unidadeId" element={<UnidadeDetalhe />} />
            <Route path="/SuporteSite" element={<SuporteSite />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
export default App;