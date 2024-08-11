import Image from "next/image";

const Clientes = () => {
  return (
    <div className="w-full bg-white p-5 pb-24 box-border">
      {" "}
      {/* Ajusta o padding-bottom para 100px */}
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center w-full">
        <div className="text-center w-full pt-10 md:pt-0">
          <img
            src="/clientes1.png"
            alt="Cliente 1"
            className="block w-full max-w-xs mx-auto" // Ajusta o tamanho da imagem conforme a tela
          />
        </div>
        <div className="text-center w-full pt-10 md:pt-0">
          <img
            src="/clientes2.png"
            alt="Cliente 2"
            className="block w-full max-w-xs mx-auto" // Ajusta o tamanho da imagem conforme a tela
          />
        </div>
        <div className="text-center w-full md:col-span-2 lg:col-span-1 md:pb-12 lg:pb-0 pt-10 md:pt-0">
          <img
            src="/clientes3.png"
            alt="Cliente 3"
            className="block mx-auto h-[79px]" // Centraliza a imagem e define o tamanho
          />
        </div>
      </div>
    </div>
  );
};

export default Clientes;
