import Image from "next/image";

const TestemunhoModulo = ({ testemunho }) => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="w-[303px] h-[400px] bg-white rounded-[3px] shadow-lg box-border flex flex-col justify-between relative">
        <div className="w-[303px] h-[292px] bg-[#00E2F4] p-4 flex items-center justify-center rounded-t-[3px] relative">
          <div className="absolute top-4 left-4">
            <p className="text-[46px] font-lexend-peta text-[#001E27] font-bold pl-5">
              &ldquo;
            </p>
          </div>
          <div className="w-[241px] h-[200px] flex items-center justify-center pl-5 mt-[-20px]">
            <p className="text-[13px] pt-5 font-montserrat text-[#2E363E] leading-[1.8] font-bold">
              {testemunho.descricao}
            </p>
          </div>
          <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2 translate-y-[50%] w-[87px] h-[87px] flex items-center justify-center overflow-visible">
            <Image
              src={testemunho.imagem}
              alt="Testemunho"
              className="w-[87px] h-[87px] rounded-full object-cover"
              width={87}
              height={87}
            />
          </div>
        </div>
        <div className="w-[303px] h-[108px] bg-[#001E27] p-4 flex items-center justify-center rounded-b-[3px] relative">
          <p className="text-[18px] font-montserrat font-medium text-[#d8d8d8] text-center tracking-[0.2em] leading-[22.5px] pt-[40px] uppercase">
            {testemunho.nome}
          </p>
          <div className="absolute top-0 left-[50%] transform -translate-x-1/2 -translate-y-[50%] w-[87px] h-[87px] flex items-center justify-center overflow-visible">
            <Image
              src={testemunho.imagem}
              alt="Testemunho"
              className="w-[87px] h-[87px] rounded-full object-cover"
              width={87}
              height={87}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestemunhoModulo;
