import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic"; // Importa o dynamic do Next.js
import TestemunhoModulo from "../TestemunhoModulo"; // Importa o componente TestemunhoModulo
import { config } from "react-spring";
import { v4 as uuidv4 } from "uuid"; // Corrige a importação do uuid
import "react-multi-carousel/lib/styles.css";

// Carrega o Carousel dinamicamente, desativando o SSR
const Carousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});

const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-[#00E2F4] rounded-full border-none w-8 h-8 flex items-center justify-center cursor-pointer mr-2"
  >
    <span
      className="border-solid border-[#2E363E] border-0 border-r-2 border-b-2 inline-block p-1"
      style={{ transform: "rotate(135deg)", marginLeft: "2px" }}
    />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
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
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showNavigation, setShowNavigation] = useState(true);
  const [carouselConfig, setCarouselConfig] = useState(config.gentle);
  const startX = useRef(0);
  const endX = useRef(0);

  useEffect(() => {
    // Verifica se o código está sendo executado no navegador
    if (typeof window !== "undefined") {
      // Adiciona o estilo inline ao body para remover a barra de rolagem horizontal
      document.body.style.overflowX = "hidden";

      // Limpa o estilo ao desmontar o componente
      return () => {
        document.body.style.overflowX = "";
      };
    }
  }, []);

  const slides = listaTestemunhos.map((testemunho, index) => ({
    key: uuidv4(),
    content: (
      <div
        style={{
          transition: "transform 0.5s ease",
          transform:
            goToSlide === index
              ? "scale(1) translateX(0)"
              : index < goToSlide
              ? "scale(1.5) translateX(-500px)"
              : "scale(1.5) translateX(500px)",
          opacity: goToSlide === index ? 1 : 0.5,
          zIndex: goToSlide === index ? 1 : 0, // Ajusta o z-index para garantir que o card em evidência fique na frente
        }}
      >
        <TestemunhoModulo testemunho={testemunho} />
      </div>
    ),
    onClick: () => setGoToSlide(index),
  }));

  const handleMouseDown = (e) => {
    startX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    endX.current = e.clientX;
    handleSwipe();
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    endX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (startX.current - endX.current > 50) {
      setGoToSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
    } else if (endX.current - startX.current > 50) {
      setGoToSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
    }
  };

  return (
    <div className="w-full h-[987.78px] bg-[#00353F] pt-[150px] flex flex-col items-center">
      <div className="w-[1180px] h-[120px] flex justify-center items-center pb-5">
        <h1 className="text-white font-montserrat font-medium text-[48px] tracking-[-1px] text-center m-0">
          Testemunhos reais dos clientes que já foram encantados pela teste
        </h1>
      </div>
      <div className="w-full max-w-[1180px] flex flex-col items-center mt-20">
        <div
          className="w-full"
          style={{
            width: "90%",
            height: "500px",
            margin: "0 auto",
            perspective: "1300px", // Adiciona a perspectiva 3D
            // overflow: "hidden", // Oculta o overflow horizontal
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Carousel
            slides={slides}
            goToSlide={goToSlide}
            offsetRadius={offsetRadius}
            showNavigation={showNavigation}
            animationConfig={carouselConfig}
            style={{ transformStyle: "preserve-3d" }} // Adiciona o estilo de transformação 3D
          />
        </div>
        <div className="flex justify-center mt-10">
          <CustomLeftArrow onClick={() => setGoToSlide(goToSlide - 1)} />
          <CustomRightArrow onClick={() => setGoToSlide(goToSlide + 1)} />
        </div>
      </div>
    </div>
  );
};

export default Testemunhos;
