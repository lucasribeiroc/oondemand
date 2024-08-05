import Image from "next/image";

const Solucoes = () => {
  return (
    <div style={{ backgroundColor: "#001E27" }}>
      <div className="flex items-center justify-center mt-[-80px]">
        {/* Ajuste a margem superior */}
        <div
          className="text-[#00E2F4] font-poppins text-[48px] font-bold mb-[60px]"
          style={{ letterSpacing: "-0.9px" }}
        >
          O que você precisa?
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div
          className="font-poppins text-[24px] font-medium text-white"
          style={{ letterSpacing: "0.1px" }}
        >
          Resolvemos seus problemas em um passe de mágica
        </div>
      </div>

      {/* Nova seção com 3 cards */}
      <div className="flex justify-center mt-20 space-x-[120px] items-center">
        {/* Primeiro card */}
        <div className="w-[272.12px] h-[186.49px] bg-[#00353F] rounded-[7.28px] flex flex-col items-center justify-center p-[10px]">
          {/* Imagem centralizada */}
          <img src="icon1.png" alt="Icon 1" className="mb-4" />
          {/* Texto Rapidez */}
          <div className="font-montserrat text-[31.38px] font-bold text-center text-[#55ECF8] mb-2">
            Rapidez
          </div>
          {/* Texto adicional */}
          <div className="font-inter text-[12.74px] text-center text-white">
            Mais tempo para você focar no que realmente importa
          </div>
        </div>
        {/* Segundo card */}
        <div className="w-[272.12px] h-[172.49px] bg-[#00353F] rounded-[7.28px] flex flex-col items-center justify-center p-[10px]">
          {/* Imagem centralizada */}
          <img src="icon2.png" alt="Icon 2" className="mb-4" />
          {/* Texto Economia */}
          <div className="font-montserrat text-[31.38px] font-bold text-center text-[#55ECF8] mb-2">
            Economia
          </div>
          {/* Texto adicional */}
          <div className="font-inter text-[12.74px] text-center text-white">
            Soluções entregues em até 7 dias
          </div>
        </div>
        {/* Terceiro card */}
        <div className="w-[272.12px] h-[186.49px] bg-[#00353F] rounded-[7.28px] flex flex-col items-center justify-center p-[10px]">
          {/* Imagem centralizada */}
          <img src="icon3.png" alt="Icon 3" className="mb-4" />
          {/* Texto Eficiência */}
          <div className="font-montserrat text-[31.38px] font-bold text-center text-[#55ECF8] mb-2">
            Eficiência
          </div>
          {/* Texto adicional com padding */}
          <div className="font-inter text-[12.74px] text-center text-white px-4">
            Automatização completa para máxima produtividade
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solucoes;
