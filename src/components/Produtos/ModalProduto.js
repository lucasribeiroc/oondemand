import React from "react";

const ModalProduto = ({ modulo, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-8">
      <div className="w-[1266px] h-auto max-h-[calc(100vh-4rem)] overflow-y-auto rounded-2xl border border-[#808e93] bg-[#001E27] text-white">
        <div className="sticky top-0 flex justify-between items-center p-4 border-b border-[#808e93] bg-[#001E27] z-10 rounded-t-2xl">
          <h2 className="text-[20px] text-[#F5F5F5] font-montserrat">
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
          <div className="w-[1086px] h-[158px] flex items-center justify-center font-montserrat text-[32px] font-medium text-white bg-[#002731] mt-[50px] mb-[50px] rounded-[20px]">
            <div className="w-[1006px] h-[78px] flex items-center justify-center">
              {modulo.tituloProdModal}
            </div>
          </div>
          <div className="w-[1086px] h-[586px] bg-[#002731] rounded-[20px] flex items-start justify-start mb-[50px] mx-auto">
            <div className="w-[488px] h-[441px] bg-[#00353F] ml-[30px] mt-[30px] rounded-[10px]">
              <div className="w-[204px] h-[25px] bg-[#00E2F4] rounded-bl-[15px] rounded-tr-[15px] flex items-center justify-center mt-[15px] ml-[20px]">
                <span className="font-montserrat font-semibold text-[14px] tracking-[0.2px] text-[#001E27]">
                  Operando em até 7 dias
                </span>
              </div>
              <div className="flex justify-center mt-4">{modulo.imagem}</div>
            </div>
            <div className="mt-[30px]">
              <span className="ml-[70px] font-montserrat text-[32px] text-[#f5f5f5]">
                {modulo.nome}
              </span>
              <div className="ml-[70px] mt-[20px]">
                <span className="font-inter text-[18px] text-[#f5f5f5]">
                  {modulo.descricao}
                </span>
              </div>
              <div className="mt-[20px]">
                <span className="ml-[70px] font-inter text-[30px] text-[#00E2F4] flex gap-2">
                  {modulo.tempo.map((icon, index) => (
                    <span key={index}>{icon}</span>
                  ))}
                </span>
              </div>
              <div className="mt-[20px] ml-[70px]">
                <ul className="font-inter text-[18px] font-light text-[#f5f5f5] flex flex-col gap-2 list-disc pl-0">
                  {modulo.lista.map((item, index) => (
                    <li key={index} className="ml-[25px]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProduto;
