import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestemunhoModulo from "../TestemunhoModulo"; // Importe o componente TestemunhoModulo

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 2000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
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

const testemunhos = [
  {
    titulo: "Teste Sob Demanda",
    descricao: "Seu desejo é uma ordem! Você só paga pelo tempo otimizado!",
    imagem: "/carrossel1.png",
    nome: "Nome 1",
    cargo: "Cargo 1",
  },
  {
    titulo: "Outro Testemunho",
    descricao: "Descrição do segundo testemunho.",
    imagem: "/carrossel2.png",
    nome: "Nome 2",
    cargo: "Cargo 2",
  },
  {
    titulo: "Mais um Testemunho",
    descricao: "Descrição do terceiro testemunho.",
    imagem: "/carrossel3.png",
    nome: "Nome 3",
    cargo: "Cargo 3",
  },
  {
    titulo: "Testemunho Adicional",
    descricao: "Descrição do quarto testemunho.",
    imagem: "/carrossel4.png",
    nome: "Nome 4",
    cargo: "Cargo 4",
  },
  // Adicione mais testemunhos conforme necessário
];

const Testemunhos = () => {
  return (
    <div className="h-[852px] w-auto bg-[#00353F] flex flex-col items-center">
      <div className="w-full max-w-[1180px] h-[120px] flex items-center justify-center px-4 pt-[150px]">
        <p className="text-white text-[48px] font-montserrat tracking-[-1px] text-center break-words">
          Testemunhos reais dos clientes que já foram encantados pela Teste
        </p>
      </div>
      <div className="w-full h-[442px] mt-[100px] pt-[50px] px-4 md:px-8 lg:px-16">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          showDots={true}
          containerClass="carousel-container"
          itemClass="px-2" // Use Tailwind para ajustar o padding entre os itens
        >
          {testemunhos.map((testemunho, index) => (
            <div key={index} className="px-2">
              <TestemunhoModulo testemunho={testemunho} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testemunhos;
