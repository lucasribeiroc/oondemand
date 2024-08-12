import Link from "next/link";

const CardModulo = ({ modulo }) => {
  return (
    <div
      style={{
        width: "300px", // Largura fixa
        height: "450px", // Altura aumentada
        overflow: "hidden",
        boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.3)", // Sombra mais visível
        background: "linear-gradient(to bottom, #001E27, #002A33, #00353f)",
        color: "white",
        margin: "0.5rem",
        fontFamily: "Montserrat, sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "10", // Adiciona border-radius
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
        <div style={{ marginTop: "0.25rem" }}>
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
            style={{ color: "white", fontSize: "1rem", marginTop: "0.5rem" }} // Cor alterada para branco
          >
            {modulo.descricao}
          </p>
        </div>
        <div style={{ padding: "1rem 0 0 0" }}>
          <Link href="/produtos">
            <button
              style={{
                backgroundColor: "#6EDFF6", // Cor do botão
                color: "#12191E", // Cor do texto
                fontWeight: "bold",
                width: "117px", // Largura do botão
                height: "38px", // Altura do botão
                borderRadius: "0.25rem",
                border: "none",
                cursor: "pointer",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#1C86EE")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#6EDFF6")}
            >
              Saiba mais
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardModulo;
