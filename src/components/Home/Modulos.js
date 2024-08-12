import CardModulo from "../CardModulo";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#00E2F4] rounded-full border-none w-[30px] h-[30px] flex items-center justify-center cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
    >
      <span
        style={{
          border: "solid #2E363E",
          borderWidth: "0 2px 2px 0",
          display: "inline-block",
          padding: "4px",
          transform: "rotate(135deg) translateX(-1px)",
        }}
      />
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#00E2F4] rounded-full border-none w-[30px] h-[30px] flex items-center justify-center cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
    >
      <span className="border-solid border-[#2E363E] border-r-2 border-b-2 border-t-0 border-l-0 inline-block p-[4px] transform -rotate-45 -translate-x-[2px]" />
    </button>
  );
};

const Modulos = () => {
  const listaModulos = [
    {
      titulo: "Precisa gerenciar múltiplas moedas com eficiência?",
      nome: "Módulo Invoice OS",
      descricao:
        "Gerencia múltiplas moedas e automatiza processos financeiros.",
      imagem: "/modulos1.png", // Caminho relativo correto
    },
    {
      titulo: "Precisa gerar pedidos de compra de serviços?",
      nome: "Módulo Link (Vitta)",
      descricao:
        "Automatize o processo e elimine a necessidade de notas fiscais de produtos.",
      imagem: "/modulos2.png", // Caminho relativo correto
    },
    {
      titulo: "Precisa gerar propostas de vendas em menos tempo?",
      nome: "Módulo Proposta - Pedido de Vendas",
      descricao: "Automatiza a criação de propostas e pedidos de vendas.",
      imagem: "/modulos3.png", // Caminho relativo correto
    },
    {
      titulo: "Falta de controle e muitos erros na emissão de NF?",
      nome: "Módulo de Integração com Arquivei (GS Golveia)",
      descricao:
        "Integre automaticamente com contas a pagar e evite erros dispendiosos.",
      imagem: "/modulos4.png", // Caminho relativo correto
    },
    {
      titulo: "Precisa centralizar suas aplicações e aumentar produtividade?",
      nome: "APP Host",
      descricao:
        "Use uma interface intuitiva e eficiente para facilitar o gerenciamento.",
      imagem: "/modulos5.png", // Caminho relativo correto
    },
    {
      titulo: "Está gastando muito tempo criando documentos?",
      nome: "Módulo Gerador de PDF",
      descricao:
        "Automatize a geração de PDFs a partir de templates predefinidos e libere tempo da sua equipe.",
      imagem: "/modulos6.png", // Caminho relativo correto
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2500 },
      items: 5,
    },
    largeDesktop: {
      breakpoint: { max: 2500, min: 1880 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1880, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg-[#001E27] pb-0">
      <div className="flex justify-center">
        <div className="text-center pt-0">
          <span className="text-[48px] text-[#00E2F4] tracking-[-0.9px] font-poppins font-bold">
            Nossos truques
          </span>
          <span className="text-[48px] text-white tracking-[-0.9px] font-poppins font-normal">
            &nbsp;em cartaz!
          </span>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="text-center w-[1109px] h-auto md:h-[88px] px-4 md:px-0">
          <span className="text-[24px] text-white tracking-[0.1px] font-poppins font-medium">
            Dezenas de soluções oOndemand, testadas e aprovadas e prontas para
            ser implementadas na sua empresa em no máximo 7 dias
          </span>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#001E27] via-[#002A33] to-[#00353f] p-8 flex justify-center relative">
        <div style={{ width: "80%" }}>
          <Carousel
            responsive={responsive}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            {listaModulos.map((modulo, index) => (
              <CardModulo key={index} modulo={modulo} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Modulos;
