const Solucoes = () => {
  return (
    <div className="bg-[#001E27]">
      <div className="flex items-center justify-center">
        <div className="text-[#00E2F4] font-poppins text-[48px] font-bold mb-[60px] tracking-[-0.9px] text-center pt-12">
          O que você precisa?
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="font-poppins text-[24px] font-medium text-white tracking-[0.1px] text-center px-4 md:px-0">
          Resolvemos seus problemas em um passe de mágica
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center mt-20 items-center space-y-8 md:space-y-0 lg:space-y-0 lg:flex-nowrap lg:space-x-[120px]">
        {/* Primeiro card */}
        <div className="w-[272.12px] h-[186.49px] bg-[#00353F] rounded-[7.28px] flex flex-col items-center justify-center p-[10px] m-4">
          {/* Imagem centralizada */}
          <img src="icon1.png" alt="Icon 1" className="mb-4" />
          {/* Texto Rapidez */}
          <div className="font-montserrat text-[31.38px] font-bold text-center text-[#55ECF8] mb-2">
            Rapidez
          </div>
          {/* Texto adicional */}
          <div className="font-inter text-[12.74px] text-center text-white px-4">
            Mais tempo para você focar no que realmente importa
          </div>
        </div>
        {/* Segundo card */}
        <div className="w-[272.12px] h-[172.49px] bg-[#00353F] rounded-[7.28px] flex flex-col items-center justify-center p-[10px] m-4">
          {/* Imagem centralizada */}
          <img src="icon2.png" alt="Icon 2" className="mb-4" />
          {/* Texto Economia */}
          <div className="font-montserrat text-[31.38px] font-bold text-center text-[#55ECF8] mb-2">
            Economia
          </div>
          {/* Texto adicional */}
          <div className="font-inter text-[12.74px] text-center text-white px-4">
            Soluções entregues em até 7 dias
          </div>
        </div>
        {/* Terceiro card */}
        <div className="w-[272.12px] h-[186.49px] bg-[#00353F] rounded-[7.28px] flex flex-col items-center justify-center p-[10px] m-4 md:pb-16 lg:pb-0">
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
