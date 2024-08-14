import { useState } from "react";

const FaqModulo = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#001E27] p-4 md:p-8 lg:p-16">
      <div className="w-full max-w-[1143px] mx-auto mt-0 space-y-4">
        <div
          className={`bg-[#00353F] text-[#aaf5fb] rounded-[10px] transition-all duration-300 overflow-hidden ${
            activeIndex === 0 ? "max-h-[600px]" : "min-h-[70px]"
          }`}
        >
          <div
            className="cursor-pointer p-4 flex flex-col justify-between h-full"
            onClick={() => toggleAccordion(0)}
          >
            <div className="flex justify-between items-center text-left">
              <span className="font-poppins text-[16px] md:text-[16px]">
                O que é a Teste?
              </span>
              <span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 shrink-0 transition-transform duration-300 ${
                    activeIndex === 0 ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    d="M9 5L5 1 1 5"
                    stroke="#aaf5fb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            {activeIndex === 0 && (
              <div className="mt-2 font-poppins text-[14px] md:text-[14px] self-end transition-opacity duration-300 opacity-100 leading-[24px] text-left">
                Somos uma startup que utiliza inteligência artificial e
                tecnologia de ponta para criar soluções que automatizam e
                simplificam os processos da sua empresa. Nosso objetivo é
                economizar seu tempo e recursos, deixando você livre para focar
                no que realmente importa: fazer seu negócio crescer.
              </div>
            )}
          </div>
        </div>
        <div
          className={`bg-[#00353F] text-[#aaf5fb] rounded-[10px] transition-all duration-300 overflow-hidden ${
            activeIndex === 1 ? "max-h-[600px]" : "min-h-[70px]"
          }`}
        >
          <div
            className="cursor-pointer p-4 flex flex-col justify-between h-full"
            onClick={() => toggleAccordion(1)}
          >
            <div className="flex justify-between items-center text-left">
              <span className="font-poppins text-[16px] md:text-[16px]">
                Seção 2
              </span>
              <span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 shrink-0 transition-transform duration-300 ${
                    activeIndex === 1 ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    d="M9 5L5 1 1 5"
                    stroke="#aaf5fb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            {activeIndex === 1 && (
              <div className="mt-2 font-poppins text-[14px] md:text-[14px] self-end transition-opacity duration-300 opacity-100 leading-[24px] text-left">
                Conteúdo da Seção 2.
              </div>
            )}
          </div>
        </div>
        <div
          className={`bg-[#00353F] text-[#aaf5fb] rounded-[10px] transition-all duration-300 overflow-hidden ${
            activeIndex === 2 ? "max-h-[500px]" : "min-h-[70px]"
          }`}
        >
          <div
            className="cursor-pointer p-4 flex flex-col justify-between h-full"
            onClick={() => toggleAccordion(2)}
          >
            <div className="flex justify-between items-center text-left">
              <span className="font-poppins text-[16px] md:text-[16px]">
                Seção 3
              </span>
              <span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 shrink-0 transition-transform duration-300 ${
                    activeIndex === 2 ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    d="M9 5L5 1 1 5"
                    stroke="#aaf5fb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            {activeIndex === 2 && (
              <div className="mt-2 font-poppins text-[14px] md:text-[14px] self-end transition-opacity duration-300 opacity-100 leading-[24px] text-left">
                Conteúdo da Seção 3.
              </div>
            )}
          </div>
        </div>
        <div
          className={`bg-[#00353F] text-[#aaf5fb] rounded-[10px] transition-all duration-300 overflow-hidden ${
            activeIndex === 3 ? "max-h-[600px]" : "min-h-[70px]"
          }`}
        >
          <div
            className="cursor-pointer p-4 flex flex-col justify-between h-full"
            onClick={() => toggleAccordion(3)}
          >
            <div className="flex justify-between items-center text-left">
              <span className="font-poppins text-[16px] md:text-[16px]">
                Seção 4
              </span>
              <span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 shrink-0 transition-transform duration-300 ${
                    activeIndex === 3 ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    d="M9 5L5 1 1 5"
                    stroke="#aaf5fb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            {activeIndex === 3 && (
              <div className="mt-2 font-poppins text-[14px] md:text-[14px] self-end transition-opacity duration-300 opacity-100 leading-[24px] text-left">
                Conteúdo da Seção 4.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqModulo;
