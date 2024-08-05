import React from "react";

const TestemunhoModulo = ({ testemunho }) => {
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
          padding: "20px", // Padding interno do card
          display: "flex", // Usar flexbox para layout
          flexDirection: "column", // Dispor elementos em coluna
          justifyContent: "space-between", // Espaçar elementos uniformemente
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "24px", // Tamanho da fonte do título
              fontWeight: "bold", // Peso da fonte do título
              marginBottom: "10px", // Espaçamento inferior do título
              color: "#000000", // Cor do texto preta
            }}
          >
            {testemunho.titulo}
          </h2>
          <p
            style={{
              fontSize: "16px", // Tamanho da fonte da descrição
              marginBottom: "20px", // Espaçamento inferior da descrição
              color: "#000000", // Cor do texto preta
            }}
          >
            {testemunho.descricao}
          </p>
        </div>
        <div
          style={{
            display: "flex", // Usar flexbox para layout
            alignItems: "center", // Alinhar itens ao centro
          }}
        >
          <img
            src={testemunho.imagem}
            alt={testemunho.nome}
            style={{
              width: "100px", // Largura da imagem
              height: "100px", // Altura da imagem
              borderRadius: "50%", // Tornar a imagem circular
              marginRight: "20px", // Espaçamento à direita da imagem
            }}
          />
          <div>
            <h3
              style={{
                fontSize: "18px", // Tamanho da fonte do nome
                fontWeight: "bold", // Peso da fonte do nome
                marginBottom: "5px", // Espaçamento inferior do nome
                color: "#000000", // Cor do texto preta
              }}
            >
              {testemunho.nome}
            </h3>
            <p
              style={{
                fontSize: "14px", // Tamanho da fonte do cargo
                color: "#000000", // Cor do texto preta
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
