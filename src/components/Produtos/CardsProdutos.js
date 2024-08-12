import { useState } from "react";
import { AiFillClockCircle, AiOutlineClockCircle } from "react-icons/ai"; // Importando mais ícones
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
      id: 1, // Adicionando uma chave única
      titulo: "Precisa gerenciar múltiplas moedas com eficiência?",
      tituloProdModal:
        "Transforme Sua Emissão de Notas Fiscais com a Integração: OMIE>Arquivei",
      nome: "Módulo Invoice OS",
      categoria: "Fiscal",
      tempo: [
        <AiFillClockCircle key="1" />,
        <AiFillClockCircle key="2" />,
        <AiFillClockCircle key="3" />,
        <AiFillClockCircle key="4" />,
        <AiOutlineClockCircle key="5" />,
      ], // Array de ícones com keys
      lista: [
        "Automatização Completa",
        "Redução de Erros",
        "Economia de Tempo",
        "Conformidade e Segurança",
      ],
      descricao:
        "Gerencia múltiplas moedas e automatiza processos financeiros.",
      ativacao: "R$ 4.500,00",
      mensalidade: "R$ 120,00/MÊS",
      horasPoupadas: "75 horas/mês",
      valorPoupado: "R$ 5000,00/mês",
      imagem: "/modulos1.png", // Caminho relativo correto
    },
    {
      id: 2, // Adicionando uma chave única
      titulo: "Precisa gerenciar múltiplas moedas com eficiência?",
      tituloProdModal:
        "Transforme Sua Emissão de Notas Fiscais com a Integração: OMIE>Arquivei",
      nome: "Módulo Invoice OS",
      categoria: "Fiscal",
      tempo: [
        <AiFillClockCircle key="1" />,
        <AiFillClockCircle key="2" />,
        <AiFillClockCircle key="3" />,
        <AiFillClockCircle key="4" />,
        <AiOutlineClockCircle key="5" />,
      ], // Array de ícones com keys
      lista: [
        "Automatização Completa",
        "Redução de Erros",
        "Economia de Tempo",
        "Conformidade e Segurança",
      ],
      descricao:
        "Gerencia múltiplas moedas e automatiza processos financeiros.",
      ativacao: "R$ 4.500,00",
      mensalidade: " R$120,00/MÊS",
      horasPoupadas: "75 horas/mês",
      valorPoupado: "R$ 5000,00/mês",
      imagem: "/modulos1.png", // Caminho relativo correto
    },
    {
      id: 3, // Adicionando uma chave única
      titulo: "Precisa gerenciar múltiplas moedas com eficiência?",
      tituloProdModal:
        "Transforme Sua Emissão de Notas Fiscais com a Integração: OMIE>Arquivei",
      nome: "Módulo Invoice OS",
      categoria: "Fiscal",
      tempo: [
        <AiFillClockCircle key="1" />,
        <AiFillClockCircle key="2" />,
        <AiFillClockCircle key="3" />,
        <AiFillClockCircle key="4" />,
        <AiOutlineClockCircle key="5" />,
      ], // Array de ícones com keys
      lista: [
        "Automatização Completa",
        "Redução de Erros",
        "Economia de Tempo",
        "Conformidade e Segurança",
      ],
      descricao:
        "Gerencia múltiplas moedas e automatiza processos financeiros.",
      ativacao: "R$ 4.500,00",
      mensalidade: "R$ 120,00/MÊS",
      horasPoupadas: "75 horas/mês",
      valorPoupado: "R$ 5000,00/mês",
      imagem: "/modulos1.png", // Caminho relativo correto
    },
    {
      id: 4, // Adicionando uma chave única
      titulo: "Precisa gerenciar múltiplas moedas com eficiência?",
      tituloProdModal:
        "Transforme Sua Emissão de Notas Fiscais com a Integração: OMIE>Arquivei",
      nome: "Módulo Invoice OS",
      categoria: "Fiscal",
      tempo: [
        <AiFillClockCircle key="1" />,
        <AiFillClockCircle key="2" />,
        <AiFillClockCircle key="3" />,
        <AiFillClockCircle key="4" />,
        <AiOutlineClockCircle key="5" />,
      ], // Array de ícones com keys
      lista: [
        "Automatização Completa",
        "Redução de Erros",
        "Economia de Tempo",
        "Conformidade e Segurança",
      ],
      descricao:
        "Gerencia múltiplas moedas e automatiza processos financeiros.",
      ativacao: "R$ 4.500,00",
      mensalidade: "R$ 120,00/MÊS",
      horasPoupadas: "75 horas/mês",
      valorPoupado: "R$ 5000,00/mês",
      imagem: "/modulos1.png", // Caminho relativo correto
    },
  ];

  const filteredModulos = selectedFilters.length
    ? listaModulos.filter((modulo) =>
        selectedFilters.includes(modulo.categoria)
      )
    : listaModulos;

  return (
    <section className="w-full bg-[#001E27] flex items-center justify-center py-8 md:py-12 lg:py-20">
      <div className="w-full lg:w-[1071px] h-auto lg:h-[1551px] bg-[#001E27] mx-auto pt-[20px]">
        <h2 className="text-[#00E2F4] font-montserrat font-bold text-[18px] tracking-[0.2px] text-center lg:text-left">
          Categorias
        </h2>
        <div className="flex flex-wrap justify-center lg:justify-start space-x-4 mt-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => toggleFilter(filter)}
              className={`font-montserrat font-medium text-[12px] md:text-[14px] tracking-[0.2px] px-4 py-1 mb-2 ${
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
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center lg:justify-items-start">
          {filteredModulos.map((modulo) => (
            <CardPageProdutos key={modulo.id} modulo={modulo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsProdutos;
