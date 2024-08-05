import React from "react";
import TestemunhoModulo from "../TestemunhoModulo"; // Importa o componente TestemunhoModulo
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
  return (
    <div
      style={{
        width: "100%", // Largura de 100%
        height: "987.78px", // Altura de 987.78px
        backgroundColor: "#00353F", // Cor de fundo #00353F
        paddingTop: "150px", // Aumentar o padding top para mover o texto para baixo
        display: "flex", // Usar flexbox para centralizar
        justifyContent: "flex-start", // Alinhar ao topo
        alignItems: "center", // Centralizar horizontalmente
        flexDirection: "column", // Dispor elementos em coluna
      }}
    >
      <div
        style={{
          width: "1180px", // Largura de 1180px
          height: "120px", // Altura de 120px
          display: "flex", // Usar flexbox para centralizar o texto
          justifyContent: "center", // Centralizar horizontalmente
          alignItems: "center", // Centralizar verticalmente
          paddingBottom: "20px", // Reduzir o padding bottom para mover o texto para cima
        }}
      >
        <h1
          style={{
            color: "#FFFFFF", // Cor branca
            fontFamily: "Montserrat, sans-serif", // Fonte Montserrat
            fontWeight: "500", // Peso da fonte Medium
            fontSize: "48px", // Tamanho da fonte 48px
            letterSpacing: "-1px", // Espaçamento entre letras de -1px
            textAlign: "center", // Centraliza o texto
            margin: "0", // Remove margem padrão do h1
          }}
        >
          Testemunhos reais dos clientes que já foram encantados pela teste
        </h1>
      </div>
      <div
        style={{
          width: "100%", // Largura de 100%
          maxWidth: "1180px", // Largura máxima de 1180px
          display: "flex", // Usar flexbox para centralizar o card
          justifyContent: "center", // Centralizar horizontalmente
          alignItems: "center", // Centralizar verticalmente
          marginTop: "50px", // Espaçamento superior de 50px
        }}
      >
        <div style={{ width: "100%" }}>
          <Carousel
            responsive={responsive}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            {listaTestemunhos.map((testemunho, index) => (
              <TestemunhoModulo key={index} testemunho={testemunho} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testemunhos;
