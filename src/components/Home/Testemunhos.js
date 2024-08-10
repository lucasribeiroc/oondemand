import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestemunhoModulo from "../TestemunhoModulo"; // Importe o componente TestemunhoModulo

const settings = {
  dots: false, // Desativar os pontos originais do slider
  infinite: true,
  speed: 500,
  slidesToShow: 4, // Mostrar 4 slides por padrão
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        nextArrow: <SampleNextArrow small />,
        prevArrow: <SamplePrevArrow small />,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        nextArrow: <SampleNextArrow smaller />,
        prevArrow: <SamplePrevArrow smaller />,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        nextArrow: <SampleNextArrow smallest />,
        prevArrow: <SamplePrevArrow smallest />,
      },
    },
  ],
};

function SampleNextArrow(props) {
  const { className, style, onClick, small, smaller, smallest } = props;
  let right = "-25px";
  if (small) right = "-15px";
  if (smaller) right = "-10px";
  if (smallest) right = "-5px";
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right, zIndex: 1 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick, small, smaller, smallest } = props;
  let left = "-25px";
  if (small) left = "-15px";
  if (smaller) left = "-10px";
  if (smallest) left = "-5px";
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left, zIndex: 1 }}
      onClick={onClick}
    />
  );
}

const testemunhos = [
  {
    titulo: "Teste Sob Demanda",
    descricao:
      "Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo sed aenean amet lacus.Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis.",
    imagem: "/testemunho1.png",
    nome: "Suzana",
    cargo: "Cargo 1",
  },
  {
    titulo: "Outro Testemunho",
    descricao:
      "Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo sed aenean amet lacus.Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis.",
    imagem: "/testemunho2.png",
    nome: "Lívia",
    cargo: "Cargo 2",
  },
  {
    titulo: "Mais um Testemunho",
    descricao:
      "Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo sed aenean amet lacus.Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis.",
    imagem: "/testemunho3.png",
    nome: "Kátia",
    cargo: "Cargo 3",
  },
  {
    titulo: "Testemunho Adicional",
    descricao:
      "Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis justo sed aenean amet lacus.Lorem ipsum dolor sit amet consectetur. Elit sociis consequat venenatis.",
    imagem: "/testemunho4.png",
    nome: "Matheus",
    cargo: "Cargo 4",
  },
  // Adicione mais testemunhos conforme necessário
];

const Testemunhos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="h-auto w-full bg-[#00353F] flex flex-col items-center py-16">
      <div className="w-full max-w-[1180px] flex items-center justify-center px-4">
        <p className="text-white text-4xl font-montserrat tracking-tight text-center">
          Testemunhos reais dos clientes que já foram encantados pela Teste
        </p>
      </div>
      <div className="w-full 2xl:max-w-[1430px] xl:max-w-[1300px] lg:max-w-[1000px] mt-16 px-4">
        <Slider
          {...settings}
          className="w-full"
          ref={sliderRef}
          beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)}
        >
          {testemunhos.map((testemunho, index) => (
            <div key={index} className="px-1.25">
              {" "}
              {/* 5px = 1.25rem */}
              <TestemunhoModulo testemunho={testemunho} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex justify-center mt-4">
        <div className="flex space-x-2">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentSlide === index ? "bg-[#00E2F4]" : "bg-[#434343]"
              }`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testemunhos;
