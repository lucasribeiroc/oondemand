import Image from "next/image";

const Clientes = () => {
  return (
    <div
      style={{
        width: "100%", // Largura automática
        maxWidth: "1439px", // Limite máximo de largura
        height: "399px",
        backgroundColor: "#FFFFFF",
        padding: "20px", // Adiciona padding para espaçamento interno
        boxSizing: "border-box", // Inclui padding na largura total
      }}
    >
      <h1
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: "48px",
          letterSpacing: "-1px",
          color: "#00353F",
          textAlign: "center", // Centraliza o texto
          margin: "0", // Remove margem padrão do h1
          paddingTop: "50px", // Adiciona padding-top de 50px
          paddingBottom: "50px", // Adiciona padding-bottom de 50px
        }}
      >
        Nossos <span style={{ fontWeight: "bold" }}>Clientes</span>
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center", // Centraliza as imagens
          gap: "20px", // Espaçamento entre as imagens
        }}
      >
        <div>
          <img
            src="/clientes1.png"
            alt="Cliente 1"
            style={{ display: "block" }} // Garante que a imagem seja exibida em seu tamanho original
          />
        </div>
        <div>
          <img
            src="/clientes2.png"
            alt="Cliente 2"
            style={{ display: "block" }} // Garante que a imagem seja exibida em seu tamanho original
          />
        </div>
        <div>
          <img
            src="/clientes3.png"
            alt="Cliente 3"
            style={{ display: "block" }} // Garante que a imagem seja exibida em seu tamanho original
          />
        </div>
      </div>
    </div>
  );
};

export default Clientes;
