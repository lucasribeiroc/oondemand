import { useState } from "react";
import CardPageProdutos from "../CardsPageProdutos";

const CardsProdutos = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filters = ["Fiscal", "Pedidos", "Integrações", "Zoho", "Arquivei"];

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };

  const listaModulos = [
    {
      titulo: "Precisa gerenciar múltiplas moedas com eficiência?",
      nome: "Módulo Invoice OS",
      categoria: "Fiscal",
      descricao:
        "Gerencia múltiplas moedas e automatiza processos financeiros.",
      imagem: "/modulos1.png", // Caminho relativo correto
    },
    {
      titulo: "Precisa gerar pedidos de compra de serviços?",
      nome: "Módulo Link (Vitta)",
      categoria: "Pedidos",
      descricao:
        "Automatize o processo e elimine a necessidade de notas fiscais de produtos.",
      imagem: "/modulos2.png", // Caminho relativo correto
    },
    {
      titulo: "Precisa gerar propostas de vendas em menos tempo?",
      nome: "Módulo Proposta - Pedido de Vendas",
      categoria: "Integrações",
      descricao: "Automatiza a criação de propostas e pedidos de vendas.",
      imagem: "/modulos3.png", // Caminho relativo correto
    },
    {
      titulo: "Falta de controle e muitos erros na emissão de NF?",
      nome: "Módulo de Integração com Arquivei (GS Golveia)",
      categoria: "Zoho",
      descricao:
        "Integre automaticamente com contas a pagar e evite erros dispendiosos.",
      imagem: "/modulos4.png", // Caminho relativo correto
    },
    {
      titulo: "Precisa centralizar suas aplicações e aumentar produtividade?",
      nome: "APP Host",
      categoria: "Arquivei",
      descricao:
        "Use uma interface intuitiva e eficiente para facilitar o gerenciamento.",
      imagem: "/modulos5.png", // Caminho relativo correto
    },
    {
      titulo: "Está gastando muito tempo criando documentos?",
      nome: "Módulo Gerador de PDF",
      categoria: "Fiscal",
      descricao:
        "Automatize a geração de PDFs a partir de templates predefinidos e libere tempo da sua equipe.",
      imagem: "/modulos6.png", // Caminho relativo correto
    },
    {
      titulo: "Está gastando muito tempo criando documentos?",
      nome: "Módulo Gerador de PDF",
      categoria: "Zoho",
      descricao:
        "Automatize a geração de PDFs a partir de templates predefinidos e libere tempo da sua equipe.",
      imagem: "/modulos6.png", // Caminho relativo correto
    },
    {
      titulo: "Está gastando muito tempo criando documentos?",
      nome: "Módulo Gerador de PDF",
      categoria: "Pedidos",
      descricao:
        "Automatize a geração de PDFs a partir de templates predefinidos e libere tempo da sua equipe.",
      imagem: "/modulos6.png", // Caminho relativo correto
    },
    {
      titulo: "Está gastando muito tempo criando documentos?",
      nome: "Módulo Gerador de PDF",
      categoria: "Integrações",
      descricao:
        "Automatize a geração de PDFs a partir de templates predefinidos e libere tempo da sua equipe.",
      imagem: "/modulos6.png", // Caminho relativo correto
    },
  ];

  const filteredModulos = selectedFilters.length
    ? listaModulos.filter((modulo) =>
        selectedFilters.includes(modulo.categoria)
      )
    : listaModulos;

  return (
    <section className="w-full bg-[#001E27] flex items-center justify-center">
      <div className="w-[1071px] h-[1551px] bg-[#001E27] mx-auto pt-[50px]">
        <h2 className="text-[#00E2F4] font-montserrat font-bold text-[18px] tracking-[0.2px]">
          Categorias
        </h2>
        <div className="flex space-x-4 mt-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => toggleFilter(filter)}
              className={`font-montserrat font-medium text-[14px] tracking-[0.2px] px-4 py-1 ${
                selectedFilters.includes(filter)
                  ? "bg-[#00E2F4] text-[#001E27] rounded-[30px]"
                  : "text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <hr className="w-full border-t border-white mt-4" />
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredModulos.map((modulo, index) => (
            <CardPageProdutos key={index} modulo={modulo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsProdutos;
