import Image from "next/image";

const Clientes = () => {
  return (
    <div className="w-full max-w-[1439px] h-[500px] md:h-[399px] bg-white p-5 box-border">
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
      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <div className="text-center">
          <img
            src="/clientes1.png"
            alt="Cliente 1"
            className="block w-full md:w-auto md:max-w-none max-w-xs" // Ajusta o tamanho da imagem conforme a tela
          />
        </div>
        <div className="text-center">
          <img
            src="/clientes2.png"
            alt="Cliente 2"
            className="block w-full md:w-auto md:max-w-none max-w-xs" // Ajusta o tamanho da imagem conforme a tela
          />
        </div>
        <div className="text-center">
          <img
            src="/clientes3.png"
            alt="Cliente 3"
            className="block w-full md:w-auto md:max-w-none max-w-xs" // Ajusta o tamanho da imagem conforme a tela
          />
        </div>
      </div>
    </div>
  );
};

export default Clientes;
