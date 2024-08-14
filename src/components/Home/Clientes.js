import Image from "next/image";

const Clientes = () => {
  return (
    <div className="w-full bg-white p-5 pb-24 box-border" id="nossos-clientes">
      <h1
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: "48px",
          letterSpacing: "-1px",
          color: "#00353F",
          textAlign: "center",
          margin: "0",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        Nossos <span style={{ fontWeight: "bold" }}>Clientes</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center w-full">
        <div className="text-center w-full pt-10 md:pt-0">
          <Image
            src="/clientes1.png"
            alt="Cliente 1"
            className="block w-full max-w-xs mx-auto"
            width={500}
            height={500}
          />
        </div>
        <div className="text-center w-full pt-10 md:pt-0">
          <Image
            src="/clientes2.png"
            alt="Cliente 2"
            className="block w-full max-w-xs mx-auto"
            width={500}
            height={500}
          />
        </div>
        <div className="text-center w-full md:col-span-2 lg:col-span-1 md:pb-12 lg:pb-0 pt-10 md:pt-0">
          <Image
            src="/clientes3.png"
            alt="Cliente 3"
            className="block mx-auto h-[79px] w-auto"
            width={500} // Valor padrão para evitar erro
            height={79}
          />
        </div>
      </div>
    </div>
  );
};

export default Clientes;
