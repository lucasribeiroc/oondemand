import React from "react";

const CardModulo = ({ modulo }) => {
  return (
    <div
      style={{
        width: "300px", // Largura fixa
        height: "500px", // Altura aumentada
        borderRadius: "0.5rem",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#001D26",
        color: "white",
        margin: "0.5rem",
        fontFamily: "Montserrat, sans-serif",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ padding: "1rem" }}>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            marginBottom: "0.5rem",
          }}
        >
          {modulo.titulo}
        </div>
      </div>
      <div style={{ width: "100%", flex: "1 0 auto" }}>
        <img
          src={modulo.imagem}
          alt={modulo.nome}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>
      <div style={{ padding: "1rem", flex: "0 1 auto" }}>
        {" "}
        {/* Ajuste de flex */}
        <div style={{ marginTop: "0.25rem" }}>
          {" "}
          {/* Espaçamento reduzido */}
          <p
            style={{
              color: "#00e2f4",
              fontSize: "20px",
              fontFamily: "Montserrat, sans-serif",
              marginTop: "0",
            }}
          >
            {modulo.nome}
          </p>
          <p
            style={{ color: "#B0B0B0", fontSize: "1rem", marginTop: "0.5rem" }}
          >
            {modulo.descricao}
          </p>
        </div>
        <div style={{ padding: "1rem 0 0 0" }}>
          <button
            style={{
              backgroundColor: "#1E90FF",
              color: "white",
              fontWeight: "bold",
              padding: "0.5rem 1rem",
              borderRadius: "0.25rem",
              border: "none",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1C86EE")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#1E90FF")}
          >
            Teste
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardModulo;
