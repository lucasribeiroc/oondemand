import Image from "next/image";
import { AiOutlineClockCircle, AiOutlineDollar } from "react-icons/ai"; // Importar o ícone

const ModalProduto = ({ modulo, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 md:p-8">
      <div className="w-full max-w-[1266px] h-auto max-h-[calc(100vh-4rem)] overflow-y-auto rounded-2xl border border-[#808e93] bg-[#001E27] text-white scrollbar-thin scrollbar-thumb-[#00E2f4] scrollbar-track-[#00353f]">
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
                  <div className="flex justify-center mt-2 w-full">
                    <Image
                      src={modulo.imagem}
                      alt="Imagem Modal"
                      width={448}
                      height={366}
                      className="w-[448px] h-[366px] object-cover mx-auto"
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
                      <li
                        key={index}
                        className="ml-0 md:ml-[25px] list-inside md:list-outside"
                      >
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
            <div className="w-full mt-4 flex items-center text-center md:text-left justify-center md:justify-start md:flex-row flex-col items-center md:ml-8 ml-0">
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <AiOutlineClockCircle
                  className="mr-2 text-[24px] md:text-[32px] lg:text-[36px]"
                  color="#00E2F4"
                />
              </div>
              <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                <span className="font-inter font-medium text-[10px] md:text-[14px] lg:text-[16px] text-[#f5f5f5] mb-0">
                  Este módulo poupou
                </span>
                <div className="font-inter font-bold text-[12px] md:text-[16px] lg:text-[18px] text-[#f5f5f5]">
                  {modulo.horasPoupadas}
                </div>
              </div>
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <AiOutlineDollar
                  className="ml-0 md:ml-4 mr-1 text-[24px] md:text-[32px] lg:text-[36px]"
                  color="#00E2F4"
                />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="font-inter font-medium text-[10px] md:text-[14px] lg:text-[16px] text-[#f5f5f5] mb-0">
                  Este módulo poupou
                </span>
                <div className="font-inter font-bold text-[12px] md:text-[16px] lg:text-[18px] text-[#f5f5f5]">
                  {modulo.valorPoupado}
                </div>
              </div>
            </div>
          </div>
          <button className="w-full max-w-[1087px] max-h-[72px] bg-[#37BE4A] text-[#f5f5f5] font-montserrat font-bold text-[16px] md:text-[18px] lg:text-[20px] flex items-center justify-center mt-0 py-2">
            <Image
              src="/whatsapp.png"
              alt="WhatsApp"
              className="mr-2 w-[16px] h-[16px] md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px]"
              width={24}
              height={24}
            />
            Falar com um consultor
          </button>
          <div className="w-full max-w-[1086px] bg-[#00353f] bg-opacity-40 mt-[60px] mx-auto pt-[30px] pl-[50px] pr-[50px] rounded-[10px]">
            <h3 className="text-left font-inter font-medium text-[24px] text-[#f5f5f5]">
              Case
            </h3>
            <hr className="w-[132px] border-t-2 border-[#00e2f4] mt-5 mb-5" />
            <p className="text-left font-inter font-normal text-[18px] text-[#f5f5f5] mb-[40px]">
              {modulo.case}
            </p>
          </div>
          <div className="w-full max-w-[1086px] bg-[#00353f] bg-opacity-40 mt-[60px] mx-auto pt-[30px] pl-[50px] pr-[50px] rounded-[10px]">
            <h3 className="text-left font-inter font-medium text-[24px] text-[#f5f5f5]">
              Funcionalidades
            </h3>
            <hr className="w-[132px] border-t-2 border-[#00e2f4] mt-5 mb-5" />
            <ol className="list-decimal pl-5 text-left font-inter font-normal text-[18px] text-[#f5f5f5] mb-[50px]">
              {modulo.funcionalidadesTitulo.map((titulo, index) => (
                <li key={index} className="mb-2">
                  {titulo}
                  <ul className="list-disc pl-5 mt-2">
                    {modulo.funcionalidadesDescricao[index].map(
                      (descricao, descIndex) => (
                        <li
                          key={descIndex}
                          className="text-left font-inter font-normal text-[18px] text-[#f5f5f5]"
                        >
                          {descricao}
                        </li>
                      )
                    )}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
          <div className="w-full max-w-[1086px] bg-[#00353f] bg-opacity-40 mt-[60px] mx-auto pt-[30px] pl-[50px] pr-[50px] rounded-[10px]">
            <h3 className="text-left font-inter font-medium text-[24px] text-[#f5f5f5]">
              Benefícios
            </h3>
            <hr className="w-[132px] border-t-2 border-[#00e2f4] mt-5 mb-5" />
            <p className="text-left font-inter font-normal text-[18px] text-[#f5f5f5] mb-[40px]">
              <ol className="list-decimal pl-5 mt-5">
                {modulo.beneficiosTitulo.map((titulo, index) => (
                  <li key={index} className="mb-2">
                    {titulo}
                    <ul className="list-disc pl-5 mt-2">
                      {modulo.beneficiosDescricao[index].map(
                        (descricao, descIndex) => (
                          <li
                            key={descIndex}
                            className="text-left font-inter font-normal text-[18px] text-[#f5f5f5]"
                          >
                            {descricao}
                          </li>
                        )
                      )}
                    </ul>
                  </li>
                ))}
              </ol>
            </p>
          </div>
          <div className="w-full max-w-[1086px] bg-[#00353f] bg-opacity-40 mt-[60px] mx-auto pt-[30px] pl-[50px] pr-[50px] rounded-[10px] pb-[40px]">
            <h3 className="text-left font-inter font-medium text-[24px] text-[#f5f5f5]">
              Dependências
            </h3>
            <hr className="w-[132px] border-t-2 border-[#00e2f4] mt-5 mb-5" />
            <p className="text-left font-inter font-normal text-[18px] text-[#f5f5f5] mb-[40px]">
              {modulo.dependenciasTitulo}
            </p>
            <ul className="list-disc pl-5 text-left font-inter font-normal text-[18px] text-[#f5f5f5]">
              {modulo.dependenciasItens.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProduto;
