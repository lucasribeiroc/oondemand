import React from "react";
import CardModulo from "../CardModulo";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#00E2F4",
        borderRadius: "50%",
        border: "none",
        width: "30px",
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        position: "absolute",
        left: "0px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
      }}
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
      style={{
        backgroundColor: "#00E2F4",
        borderRadius: "50%",
        border: "none",
        width: "30px",
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        position: "absolute",
        right: "0px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
      }}
    >
      <span
        style={{
          border: "solid #2E363E",
          borderWidth: "0 2px 2px 0",
          display: "inline-block",
          padding: "4px",
          transform: "rotate(-45deg) translateX(-2px)", // Move a seta um pouco para a esquerda
        }}
      />
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
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
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
    <div
      style={{
        backgroundColor: "#001E27",
        marginTop: "-250px", // Adiciona margem negativa para colar no componente de cima
        paddingBottom: "0px",
      }}
    >
      <div className="flex justify-center">
        <div className="text-center pt-20">
          <span
            className="text-[48px] text-[#00E2F4]"
            style={{
              letterSpacing: "-0.9px",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "700", // Poppins Mixed geralmente usa peso 700 para negrito
            }}
          >
            Nossos truques
          </span>
          <span
            className="text-[48px] text-white"
            style={{
              letterSpacing: "-0.9px",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "400", // Poppins Mixed geralmente usa peso 400 para regular
            }}
          >
            &nbsp;em cartaz!
          </span>
        </div>
      </div>

      {/* Novo texto abaixo */}
      <div className="flex justify-center mt-10">
        <div
          className="text-center"
          style={{
            width: "1109px",
            height: "88px",
          }}
        >
          <span
            className="text-[24px] text-white"
            style={{
              letterSpacing: "0.1px",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "500", // Poppins Medium geralmente usa peso 500
            }}
          >
            Dezenas de soluções oOndemand, testadas e aprovadas e prontas para
            ser implementadas na sua empresa em no máximo 7 dias
          </span>
        </div>
      </div>

      <div
        style={{
          background: "linear-gradient(to bottom, #001E27, #002A33, #00353f)",
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
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
