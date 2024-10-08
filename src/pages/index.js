import Header from "../components/Home/Header";
import CarrosselBanner from "../components/Home/CarrosselBanner";
import Contador from "../components/Home/Contador";
import Solucoes from "../components/Home/Solucoes";
import CarrosselTecnologias from "../components/Home/CarrosselTecnologias";
import Modulos from "../components/Home/Modulos";
import Clientes from "../components/Home/Clientes";
import Testemunhos from "../components/Home/Testemunhos";
import Faq from "../components/Home/Faq";
import Footer from "../components/Home/Footer";

const Index = () => {
  return (
    <div>
      <Header />
      <CarrosselBanner />
      <Contador />
      <Solucoes />
      <CarrosselTecnologias />
      <Modulos />
      <Clientes />
      <Testemunhos />
      <Faq />
      <Footer />
    </div>
  );
};

export default Index;
