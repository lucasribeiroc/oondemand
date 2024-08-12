import React from "react";
import Image from "next/image";
import { AiOutlineClockCircle, AiOutlineDollar } from "react-icons/ai"; // Importar o ícone

const ModalProduto = ({ modulo, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 md:p-8">
      <div className="w-full max-w-[1266px] h-auto max-h-[calc(100vh-4rem)] overflow-y-auto rounded-2xl border border-[#808e93] bg-[#001E27] text-white">
        <div className="sticky top-0 flex justify-between items-center p-4 border-b border-[#808e93] bg-[#001E27] z-10 rounded-t-2xl">
          <h2 className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] text-[#F5F5F5] font-montserrat">
            Detalhe do produto
          </h2>
          <button
            onClick={closeModal}
            className="bg-[#001E27] text-[#808e93] rounded-md w-4 h-4 flex items-center justify-center cursor-pointer"
          >
            X
          </button>
        </div>
        <div className="p-4 flex flex-col items-center justify-center">
          <div className="w-full max-w-[1086px] h-auto flex items-center justify-center font-montserrat text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] font-medium text-white bg-[#002731] mt-[20px] md:mt-[50px] mb-[20px] md:mb-[50px] rounded-[20px]">
            <div className="w-full max-w-[1006px] h-auto flex items-center justify-center p-4">
              {modulo.tituloProdModal}
            </div>
          </div>
          <div className="w-full max-w-[1086px] h-auto bg-[#002731] rounded-[20px] flex flex-col items-start justify-start mb-[20px] md:mb-[50px] mx-auto p-4">
            <div className="w-full flex flex-col md:flex-row">
              <div className="w-full md:w-[488px] h-auto bg-[#00353F] rounded-[10px] p-4 mb-4 md:mb-0 md:ml-[30px] md:mt-[20px] flex flex-col">
                <div className="flex flex-col items-start">
                  <div className="w-full max-w-[204px] h-[25px] bg-[#00E2F4] rounded-bl-[15px] rounded-tr-[15px] flex items-center justify-center mt-[10px] ml-[5px]">
                    <span className="font-montserrat font-semibold text-[10px] sm:text-[12px] md:text-[14px] tracking-[0.2px] text-[#001E27]">
                      Operando em até 7 dias
                    </span>
                  </div>
                  <div className="flex justify-center mt-2">
                    <Image
                      src={modulo.imagem}
                      alt="Imagem Modal"
                      width={448}
                      height={366}
                      className="w-[448px] h-[366px] object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-auto mt-[30px] md:mt-[15px] md:ml-[30px] text-center md:text-left">
                <span className="block ml-0 md:ml-[50px] font-montserrat text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] text-[#f5f5f5]">
                  {modulo.nome}
                </span>
                <div className="ml-0 md:ml-[50px] mt-[20px]">
                  <span className="font-inter text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-[#f5f5f5]">
                    {modulo.descricao}
                  </span>
                </div>
                <div className="mt-[20px]">
                  <span className="block ml-0 md:ml-[50px] font-inter text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] text-[#00E2F4] flex gap-2 justify-center md:justify-start">
                    {modulo.tempo.map((icon, index) => (
                      <span key={index}>{icon}</span>
                    ))}
                  </span>
                </div>
                <div className="mt-[20px] ml-0 md:ml-[50px]">
                  <ul className="font-inter text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-light text-[#f5f5f5] flex flex-col gap-2 list-disc pl-0 text-center md:text-left">
                    {modulo.lista.map((item, index) => (
                      <li key={index} className="ml-0 md:ml-[25px]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-[20px] ml-0 md:ml-[50px] flex items-start justify-center md:justify-start">
                  <div>
                    <div className="font-montserrat font-semibold text-[20px] sm:text-[24px] md:text-[32px] text-[#00e2f4]">
                      {modulo.ativacao}
                      <span className="font-montserrat font-semibold text-[12px] sm:text-[14px] md:text-[16px] text-[#00e2f4] ml-5">
                        (custo de ativação)
                      </span>
                    </div>
                    <div className="font-montserrat font-semibold text-[16px] sm:text-[20px] md:text-[24px] text-[#55787f] mt-2">
                      {modulo.mensalidade}
                      <span className="font-montserrat font-semibold text-[12px] sm:text-[14px] md:text-[16px] text-[#55787f] ml-2">
                        (custo de mensalidade)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-4 ml-8 flex items-center text-center md:text-left justify-center md:justify-start sm:ml-0">
              <div className="flex-shrink-0">
                <AiOutlineClockCircle
                  className="mr-2 sm:mr-2 md:mr-2 lg:mr-2 xl:mr-2 sm:mr-0 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px]"
                  color="#00E2F4"
                />
              </div>
              <div className="flex flex-col items-start ml-4 sm:ml-0">
                <span className="font-inter font-medium text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-[#f5f5f5] mb-0 sm:ml-0">
                  Este módulo poupou
                </span>
                <div className="font-inter font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-[#f5f5f5] sm:ml-0">
                  {modulo.horasPoupadas}
                </div>
              </div>
              <div className="flex-shrink-0">
                <AiOutlineDollar
                  className="ml-4 mr-1 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px]"
                  color="#00E2F4"
                />
              </div>
              <div className="flex flex-col items-start ml-1">
                <span className="font-inter font-medium text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-[#f5f5f5] ml-0 mb-0">
                  Este módulo poupou
                </span>
                <div className="font-inter font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-[#f5f5f5] ml-0">
                  {modulo.valorPoupado}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProduto;
