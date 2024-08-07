import React from "react";

const TestemunhoModulo = ({ testemunho }) => {
  // Função para dividir o título em 40% e 60%
  const formatTitle = (title) => {
    const words = title.split(" ");
    const splitIndex = Math.ceil(words.length * 0.4);
    const firstPart = words.slice(0, splitIndex).join(" ");
    const secondPart = words.slice(splitIndex).join(" ");
    return { firstPart, secondPart };
  };

  const { firstPart, secondPart } = formatTitle(testemunho.titulo);

  return (
    <div
      style={{
        display: "flex", // Usar flexbox para centralizar
        justifyContent: "center", // Centralizar horizontalmente
        alignItems: "center", // Centralizar verticalmente
        height: "100%", // Garantir que o contêiner ocupe toda a altura disponível
      }}
    >
      <div
        style={{
          width: "847.07px", // Largura do card
          height: "472.19px", // Altura do card
          backgroundColor: "#FFFFFF", // Fundo branco
          borderRadius: "20px", // Bordas arredondadas de 20px
          border: "1.47px solid #E2EAF2", // Borda de 1.47px na cor #E2EAF2
          boxSizing: "border-box", // Inclui a borda no tamanho total do card
          padding: "60px", // Padding geral do card aumentado para 60px
          display: "flex", // Usar flexbox para layout
          flexDirection: "column", // Dispor elementos em coluna
          justifyContent: "space-between", // Espaçar elementos uniformemente
          position: "relative", // Para posicionamento absoluto da nova div
        }}
      >
        <div>
          <img
            src="/quote.png"
            alt="Quote"
            style={{
              width: "30px", // Ajuste o tamanho conforme necessário
              height: "30px", // Ajuste o tamanho conforme necessário
              marginBottom: "10px", // Espaçamento inferior da imagem
            }}
          />
          <h2
            style={{
              fontSize: "22.09px", // Tamanho da fonte do título
              fontFamily: "Montserrat, sans-serif", // Fonte Montserrat
              color: "#2E363E", // Cor do texto
              marginBottom: "10px", // Espaçamento inferior do título
            }}
          >
            <span style={{ fontWeight: "bold" }}>{firstPart}</span>
            <br />
            {secondPart}
          </h2>
          <div
            style={{
              width: "316.57px", // Largura da div
              height: "235.67px", // Altura da div
              fontFamily: "Montserrat, sans-serif", // Fonte Montserrat
              fontSize: "12.5px", // Tamanho da fonte
              color: "#2E363E", // Cor do texto
              overflow: "hidden", // Esconder o excesso de texto
            }}
          >
            <p
              style={{
                margin: 0, // Remover margem do parágrafo
                lineHeight: 1.8, // Aumentar o espaço entre linhas para 1.5
              }}
            >
              {testemunho.descricao}
            </p>
            <hr
              style={{
                width: "132px", // Largura da linha
                borderTop: "1px dotted #4A94FF", // Linha pontilhada na cor #4A94FF
                marginTop: "10px", // Espaçamento superior
              }}
            />
          </div>
        </div>
        <div
          style={{
            position: "absolute", // Posicionamento absoluto
            top: "60px", // Alinhado na mesma altura da quote.png
            right: "100px", // Alinhado à direita do card, movido mais para a esquerda
          }}
        >
          <div
            style={{
              display: "flex", // Usar flexbox para layout
              flexDirection: "column", // Dispor elementos em coluna
              alignItems: "center", // Centralizar itens horizontalmente
            }}
          >
            <img
              src={testemunho.imagem}
              alt={testemunho.nome}
              style={{
                width: "279.86px", // Largura da imagem
                height: "279.76px", // Altura da imagem
                borderRadius: "50%", // Tornar a imagem circular
                marginBottom: "10px", // Espaçamento inferior da imagem
              }}
            />
            <p
              style={{
                fontSize: "15.46px", // Tamanho da fonte do cargo
                fontFamily: "Montserrat, sans-serif", // Fonte Montserrat Medium
                fontWeight: "500", // Peso da fonte para Medium
                color: "#2E363E", // Cor do texto
                textAlign: "center", // Centralizar texto
                marginTop: "15px", // Espaçamento superior
              }}
            >
              {testemunho.nome}
            </p>
            <p
              style={{
                fontSize: "11.78px", // Tamanho da fonte do cargo
                fontFamily: "Montserrat, sans-serif", // Fonte Montserrat regular
                color: "#A6AEB6", // Cor do texto
                textAlign: "center", // Centralizar texto
                marginTop: "5px", // Espaçamento superior
              }}
            >
              {testemunho.cargo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestemunhoModulo;
