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
      case: "A GS Golveia enfrentava desafios com erros na emissão manual de notas fiscais, resultando em protestos e complicações financeiras. Com a implementação do Módulo de Integração com Arquivei, a empresa automatizou a captura e gestão de notas fiscais, eliminando erros de digitação e garantindo conformidade fiscal. A solução trouxe uma significativa economia de tempo e recursos, melhorando o controle financeiro e permitindo que a equipe focasse em atividades estratégicas. A GS Golveia agora desfruta de processos fiscais mais eficientes e confiáveis.",
      funcionalidadesTitulo: [
        "Cadastro Automático de Ordens de Serviço:",
        "Integração de Dados:",
        "Geração de Adiantamentos:",
      ],
      funcionalidadesDescricao: [
        [
          "Cadastra automaticamente a Ordem de Serviço (OS) no Omie conforme o contrato aprovado no Zoho.",
          "Anexa o PDF do contrato à OS gerada, garantindo rastreabilidade e fácil acesso aos documentos importantes.",
        ],
        [
          "Mapeamento do projeto da OS com o negócio do Zoho e do departamento da OS com o território.",
          "Criação automática de clientes no Omie caso não estejam cadastrados, utilizando as informações do Zoho.",
        ],
        [
          "Gera adiantamentos de contas a receber, facilitando o controle financeiro e o fluxo de caixa",
        ],
      ],
      beneficiosTitulo: [
        "Benefícios:",
        "Redução de Erros:",
        "Economia de Tempo",
        "Conformidade e Segurança",
        "Facilidade de Uso",
      ],
      beneficiosDescricao: [
        [
          "Automatização Completa: Captura automática de NFs emitidas e recebidas. Validação instantânea das informações fiscais.",
        ],
        [
          "Eliminação de erros manuais comuns. Redução de multas e penalidades devido a erros fiscais.",
        ],
        [
          "Processo de emissão e arquivamento automatizado",
          "Implementação rápida e eficiente em até 7 dias.",
        ],
        [
          "Garantia de conformidade com as regulamentações fiscais.",
          "Armazenamento seguro e acesso fácil aos documentos.",
        ],
        [
          "Interface amigável e intuitiva.",
          "Suporte técnico especializado disponível.",
        ],
      ],
      dependenciasTitulo:
        "Para o funcionamento do Módulo de Integração com Arquivei, são necessários:",
      dependenciasItens: [
        "App Host",
        "App Omie",
        "Módulo de Autenticação",
        "Módulo Anexo Omie",
      ],
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
      mensalidade: "R$ 120,00/MÊS",
      horasPoupadas: "75 horas/mês",
      valorPoupado: "R$ 5000,00/mês",
      case: "A GS Golveia enfrentava desafios com erros na emissão manual de notas fiscais, resultando em protestos e complicações financeiras. Com a implementação do Módulo de Integração com Arquivei, a empresa automatizou a captura e gestão de notas fiscais, eliminando erros de digitação e garantindo conformidade fiscal. A solução trouxe uma significativa economia de tempo e recursos, melhorando o controle financeiro e permitindo que a equipe focasse em atividades estratégicas. A GS Golveia agora desfruta de processos fiscais mais eficientes e confiáveis.",
      funcionalidadesTitulo: [
        "Cadastro Automático de Ordens de Serviço:",
        "Integração de Dados:",
        "Geração de Adiantamentos:",
      ],
      funcionalidadesDescricao: [
        [
          "Cadastra automaticamente a Ordem de Serviço (OS) no Omie conforme o contrato aprovado no Zoho.",
          "Anexa o PDF do contrato à OS gerada, garantindo rastreabilidade e fácil acesso aos documentos importantes.",
        ],
        [
          "Mapeamento do projeto da OS com o negócio do Zoho e do departamento da OS com o território.",
          "Criação automática de clientes no Omie caso não estejam cadastrados, utilizando as informações do Zoho.",
        ],
        [
          "Gera adiantamentos de contas a receber, facilitando o controle financeiro e o fluxo de caixa",
        ],
      ],
      beneficiosTitulo: [
        "Benefícios:",
        "Redução de Erros:",
        "Economia de Tempo",
        "Conformidade e Segurança",
        "Facilidade de Uso",
      ],
      beneficiosDescricao: [
        [
          "Automatização Completa: Captura automática de NFs emitidas e recebidas. Validação instantânea das informações fiscais.",
        ],
        [
          "Eliminação de erros manuais comuns. Redução de multas e penalidades devido a erros fiscais.",
        ],
        [
          "Processo de emissão e arquivamento automatizado",
          "Implementação rápida e eficiente em até 7 dias.",
        ],
        [
          "Garantia de conformidade com as regulamentações fiscais.",
          "Armazenamento seguro e acesso fácil aos documentos.",
        ],
        [
          "Interface amigável e intuitiva.",
          "Suporte técnico especializado disponível.",
        ],
      ],
      dependenciasTitulo:
        "Para o funcionamento do Módulo de Integração com Arquivei, são necessários:",
      dependenciasItens: [
        "App Host",
        "App Omie",
        "Módulo de Autenticação",
        "Módulo Anexo Omie",
      ],
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
      case: "A GS Golveia enfrentava desafios com erros na emissão manual de notas fiscais, resultando em protestos e complicações financeiras. Com a implementação do Módulo de Integração com Arquivei, a empresa automatizou a captura e gestão de notas fiscais, eliminando erros de digitação e garantindo conformidade fiscal. A solução trouxe uma significativa economia de tempo e recursos, melhorando o controle financeiro e permitindo que a equipe focasse em atividades estratégicas. A GS Golveia agora desfruta de processos fiscais mais eficientes e confiáveis.",
      funcionalidadesTitulo: [
        "Cadastro Automático de Ordens de Serviço:",
        "Integração de Dados:",
        "Geração de Adiantamentos:",
      ],
      funcionalidadesDescricao: [
        [
          "Cadastra automaticamente a Ordem de Serviço (OS) no Omie conforme o contrato aprovado no Zoho.",
          "Anexa o PDF do contrato à OS gerada, garantindo rastreabilidade e fácil acesso aos documentos importantes.",
        ],
        [
          "Mapeamento do projeto da OS com o negócio do Zoho e do departamento da OS com o território.",
          "Criação automática de clientes no Omie caso não estejam cadastrados, utilizando as informações do Zoho.",
        ],
        [
          "Gera adiantamentos de contas a receber, facilitando o controle financeiro e o fluxo de caixa",
        ],
      ],
      beneficiosTitulo: [
        "Benefícios:",
        "Redução de Erros:",
        "Economia de Tempo",
        "Conformidade e Segurança",
        "Facilidade de Uso",
      ],
      beneficiosDescricao: [
        [
          "Automatização Completa: Captura automática de NFs emitidas e recebidas. Validação instantânea das informações fiscais.",
        ],
        [
          "Eliminação de erros manuais comuns. Redução de multas e penalidades devido a erros fiscais.",
        ],
        [
          "Processo de emissão e arquivamento automatizado",
          "Implementação rápida e eficiente em até 7 dias.",
        ],
        [
          "Garantia de conformidade com as regulamentações fiscais.",
          "Armazenamento seguro e acesso fácil aos documentos.",
        ],
        [
          "Interface amigável e intuitiva.",
          "Suporte técnico especializado disponível.",
        ],
      ],
      dependenciasTitulo:
        "Para o funcionamento do Módulo de Integração com Arquivei, são necessários:",
      dependenciasItens: [
        "App Host",
        "App Omie",
        "Módulo de Autenticação",
        "Módulo Anexo Omie",
      ],
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
      case: "A GS Golveia enfrentava desafios com erros na emissão manual de notas fiscais, resultando em protestos e complicações financeiras. Com a implementação do Módulo de Integração com Arquivei, a empresa automatizou a captura e gestão de notas fiscais, eliminando erros de digitação e garantindo conformidade fiscal. A solução trouxe uma significativa economia de tempo e recursos, melhorando o controle financeiro e permitindo que a equipe focasse em atividades estratégicas. A GS Golveia agora desfruta de processos fiscais mais eficientes e confiáveis.",
      funcionalidadesTitulo: [
        "Cadastro Automático de Ordens de Serviço:",
        "Integração de Dados:",
        "Geração de Adiantamentos:",
      ],
      funcionalidadesDescricao: [
        [
          "Cadastra automaticamente a Ordem de Serviço (OS) no Omie conforme o contrato aprovado no Zoho.",
          "Anexa o PDF do contrato à OS gerada, garantindo rastreabilidade e fácil acesso aos documentos importantes.",
        ],
        [
          "Mapeamento do projeto da OS com o negócio do Zoho e do departamento da OS com o território.",
          "Criação automática de clientes no Omie caso não estejam cadastrados, utilizando as informações do Zoho.",
        ],
        [
          "Gera adiantamentos de contas a receber, facilitando o controle financeiro e o fluxo de caixa",
        ],
      ],
      beneficiosTitulo: [
        "Benefícios:",
        "Redução de Erros:",
        "Economia de Tempo",
        "Conformidade e Segurança",
        "Facilidade de Uso",
      ],
      beneficiosDescricao: [
        [
          "Automatização Completa: Captura automática de NFs emitidas e recebidas. Validação instantânea das informações fiscais.",
        ],
        [
          "Eliminação de erros manuais comuns. Redução de multas e penalidades devido a erros fiscais.",
        ],
        [
          "Processo de emissão e arquivamento automatizado",
          "Implementação rápida e eficiente em até 7 dias.",
        ],
        [
          "Garantia de conformidade com as regulamentações fiscais.",
          "Armazenamento seguro e acesso fácil aos documentos.",
        ],
        [
          "Interface amigável e intuitiva.",
          "Suporte técnico especializado disponível.",
        ],
      ],
      dependenciasTitulo:
        "Para o funcionamento do Módulo de Integração com Arquivei, são necessários:",
      dependenciasItens: [
        "App Host",
        "App Omie",
        "Módulo de Autenticação",
        "Módulo Anexo Omie",
      ],
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
