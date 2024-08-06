import React, { useRef } from "react";
import TestemunhoModulo from "../TestemunhoModulo"; // Importa o componente TestemunhoModulo
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomLeftArrow = () => (
  <button className="bg-[#00E2F4] rounded-full border-none w-8 h-8 flex items-center justify-center cursor-pointer mr-2">
    <span
      className="border-solid border-[#2E363E] border-0 border-r-2 border-b-2 inline-block p-1"
      style={{ transform: "rotate(135deg)", marginLeft: "2px" }}
    />
  </button>
);

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#00E2F4] rounded-full border-none w-8 h-8 flex items-center justify-center cursor-pointer ml-2"
    >
      <span
        className="border-solid border-[#2E363E] border-0 border-r-2 border-b-2 inline-block p-1 transform -rotate-45"
        style={{ marginRight: "2px" }}
      />
    </button>
  );
};

const listaTestemunhos = [
  {
    titulo: "75 horas economizadas com apenas um clique",
    nome: "Pitter SobreNome",
    cargo: "Cargo - Vitta",
    descricao:
      "A oOnDemand transformou nossa empresa. Antes, o cadastro de ordens de pagamento levava 3 minutos e era repetido 1500 vezes por mês. Com a automação, reduzimos essa tarefa para um clique, economizando 4500 minutos, ou 75 horas, mensais.Essa mudança liberou um funcionário para atividades estratégicas, otimizando nosso fluxo de trabalho e melhorando nossa eficiência. A agilidade proporcionada pela oOnDemand trouxe benefícios significativos para nossa operação.",
    imagem: "/testemunhos1.png", // Caminho relativo correto
  },
  {
    titulo: "75 horas economizadas com apenas um clique",
    nome: "Pitter SobreNome",
    cargo: "Cargo - Vitta",
    descricao:
      "A oOnDemand transformou nossa empresa. Antes, o cadastro de ordens de pagamento levava 3 minutos e era repetido 1500 vezes por mês. Com a automação, reduzimos essa tarefa para um clique, economizando 4500 minutos, ou 75 horas, mensais.Essa mudança liberou um funcionário para atividades estratégicas, otimizando nosso fluxo de trabalho e melhorando nossa eficiência. A agilidade proporcionada pela oOnDemand trouxe benefícios significativos para nossa operação.",
    imagem: "/testemunhos1.png", // Caminho relativo correto
  },
  {
    titulo: "75 horas economizadas com apenas um clique",
    nome: "Pitter SobreNome",
    cargo: "Cargo - Vitta",
    descricao:
      "A oOnDemand transformou nossa empresa. Antes, o cadastro de ordens de pagamento levava 3 minutos e era repetido 1500 vezes por mês. Com a automação, reduzimos essa tarefa para um clique, economizando 4500 minutos, ou 75 horas, mensais.Essa mudança liberou um funcionário para atividades estratégicas, otimizando nosso fluxo de trabalho e melhorando nossa eficiência. A agilidade proporcionada pela oOnDemand trouxe benefícios significativos para nossa operação.",
    imagem: "/testemunhos1.png", // Caminho relativo correto
  },
  {
    titulo: "75 horas economizadas com apenas um clique",
    nome: "Pitter SobreNome",
    cargo: "Cargo - Vitta",
    descricao:
      "A oOnDemand transformou nossa empresa. Antes, o cadastro de ordens de pagamento levava 3 minutos e era repetido 1500 vezes por mês. Com a automação, reduzimos essa tarefa para um clique, economizando 4500 minutos, ou 75 horas, mensais.Essa mudança liberou um funcionário para atividades estratégicas, otimizando nosso fluxo de trabalho e melhorando nossa eficiência. A agilidade proporcionada pela oOnDemand trouxe benefícios significativos para nossa operação.",
    imagem: "/testemunhos1.png", // Caminho relativo correto
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Testemunhos = () => {
  const carouselRef = useRef(null);

  const handleLeftArrowClick = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const handleRightArrowClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <div className="w-full h-[987.78px] bg-[#00353F] pt-[150px] flex flex-col items-center">
      <div className="w-[1180px] h-[120px] flex justify-center items-center pb-5">
        <h1 className="text-white font-montserrat font-medium text-[48px] tracking-[-1px] text-center m-0">
          Testemunhos reais dos clientes que já foram encantados pela teste
        </h1>
      </div>
      <div className="w-full max-w-[1180px] flex flex-col items-center mt-12">
        <div className="w-full">
          <Carousel
            ref={carouselRef}
            responsive={responsive}
            infinite={true} // Configurar o carrossel para ser infinito
            arrows={false} // Desativar as setas padrão
            containerClass="relative"
            itemClass="carousel-item-padding-40-px"
          >
            {listaTestemunhos.map((testemunho, index) => (
              <TestemunhoModulo key={index} testemunho={testemunho} />
            ))}
          </Carousel>
        </div>
        <div className="flex justify-center mt-5">
          <CustomLeftArrow onClick={handleLeftArrowClick} />
          <CustomRightArrow onClick={handleRightArrowClick} />
        </div>
      </div>
    </div>
  );
};

export default Testemunhos;
