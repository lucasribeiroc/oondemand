import React from "react";
import CardModulo from "../CardModulo";

const Modulos = () => {
  const listaModulos = [
    {
      titulo: "Precisa gerenciar múltiplas moedas com eficiência?",
      nome: "Módulo Invoice OS",
      descricao:
        "Gerencia múltiplas moedas e automatiza processos financeiros.",
      imagem: "/modulos1.png",
    },
    {
      titulo: "Precisa gerar pedidos de compra de serviços?",
      nome: "Módulo Link (Vitta)",
      descricao:
        "Automatize o processo e elimine a necessidade de notas fiscais de produtos.",
      imagem: "/modulos2.png",
    },
    {
      titulo: "Precisa gerar propostas de vendas em menos tempo?",
      nome: "Módulo Proposta - Pedido de Vendas",
      descricao: "Automatiza a criação de propostas e pedidos de vendas.",
      imagem: "/modulos3.png",
    },
    {
      titulo: "Falta de controle e muitos erros na emissão de NF?",
      nome: "Módulo de Integração com Arquivei (GS Golveia)",
      descricao:
        "Integre automaticamente com contas a pagar e evite erros dispendiosos.",
      imagem: "/modulos4.png",
    },
    {
      titulo: "Precisa centralizar suas aplicações e aumentar produtividade?",
      nome: "APP Host",
      descricao:
        "Use uma interface intuitiva e eficiente para facilitar o gerenciamento.",
      imagem: "/modulos5.png",
    },
    {
      titulo: "Está gastando muito tempo criando documentos?",
      nome: "Módulo Gerador de PDF",
      descricao:
        " Automatize a geração de PDFs a partir de templates predefinidos e libere tempo da sua equipe. Módulo Gerador de PDF e Módulo ",
      imagem: "/modulos6.png",
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #001E27, #002A33, #00353f)",
        marginTop: "-250px", // Adiciona margem negativa para colar no componente de cima
        paddingBottom: "0px",
      }}
    >
      <div className="flex justify-center">
        <div className="text-center">
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

      <div className="flex justify-center flex-wrap py-10">
        {listaModulos.map((modulo, index) => (
          <CardModulo key={index} modulo={modulo} />
        ))}
      </div>
    </div>
  );
};

export default Modulos;
