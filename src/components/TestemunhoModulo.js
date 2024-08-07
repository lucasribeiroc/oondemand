import React from "react";

const TestemunhoModulo = ({ testemunho }) => {
  // Função para dividir o título em 40% e 60%
  const formatTitle = (title) => {
    const words = title.split(" ");
    const splitIndex = Math.ceil(words.length * 0.4);
    const firstPart = words.slice(0, splitIndex).join(" ");
    const secondPart = words.slice(splitIndex).join(" ");
    return { firstPart, secondPart };
  };

  const { firstPart, secondPart } = formatTitle(testemunho.titulo);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full md:w-[847.07px] h-auto md:h-[472.19px] bg-white rounded-[20px] border-[1.47px] border-[#E2EAF2] box-border p-4 md:p-[60px] flex flex-col justify-between relative">
        <div>
          <img
            src="/quote.png"
            alt="Quote"
            className="w-[30px] h-[30px] mb-[10px]"
          />
          <h2 className="text-[16px] md:text-[22.09px] font-montserrat text-[#2E363E] mb-[10px]">
            <span className="font-bold">{firstPart}</span>
            <br />
            {secondPart}
          </h2>
          <div className="w-full md:w-[316.57px] h-auto md:h-[235.67px] font-montserrat text-[12px] md:text-[12.5px] text-[#2E363E] overflow-hidden">
            <p className="m-0 leading-[1.8]">{testemunho.descricao}</p>
            <hr className="w-[132px] border-t-[1px] border-dotted border-[#4A94FF] mt-[10px]" />
          </div>
        </div>
        <div className="hidden md:block absolute top-[60px] right-[100px]">
          <div className="flex flex-col items-center">
            <img
              src={testemunho.imagem}
              alt={testemunho.nome}
              className="w-[279.86px] h-[279.76px] rounded-full mb-[10px]"
            />
            <p className="text-[15.46px] font-montserrat font-medium text-[#2E363E] text-center mt-[15px]">
              {testemunho.nome}
            </p>
            <p className="text-[11.78px] font-montserrat text-[#A6AEB6] text-center mt-[5px]">
              {testemunho.cargo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestemunhoModulo;
