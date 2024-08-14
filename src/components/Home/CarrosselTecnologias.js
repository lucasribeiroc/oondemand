import Image from "next/image";

const CarrosselTecnologias = () => {
  return (
    <div className="bg-[#001E27]">
      <div className="flex justify-center">
        <div className="text-center pt-20">
          <span className="text-[48px] text-[#00E2F4] tracking-[-0.9px] font-poppins font-bold">
            Nossa
          </span>
          <span className="text-[48px] text-white tracking-[-0.9px] font-poppins font-normal">
            &nbsp;Caixa Mágica
          </span>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="text-center w-[90%] md:w-[90%] h-auto md:h-[88px]">
          <span className="text-[16px] md:text-[24px] text-white tracking-[0.1px] font-poppins font-medium">
            Fazemos mágica com tecnologia e para isso usamos o que há de mais
            moderno no mercado, seguindo as tendências das grandes empresas.
          </span>
        </div>
      </div>

      <div className="flex justify-center mt-10 md:mt-20 pb-20">
        <div className="text-center w-[90%] md:w-[90%] h-auto flex flex-wrap justify-center">
          <div className="px-5 mb-8 md:mb-0">
            <Image
              src="/partner1.png"
              alt="Partner 1"
              className="h-auto mx-5 max-h-[100px] md:max-h-[150px]"
              width={150}
              height={100}
            />
          </div>
          <div className="px-5 mb-8 md:mb-0">
            <Image
              src="/partner2.png"
              alt="Partner 2"
              className="h-auto mx-5 max-h-[100px] md:max-h-[150px]"
              width={150}
              height={100}
            />
          </div>
          <div className="px-5 mb-8 md:mb-0">
            <Image
              src="/partner3.png"
              alt="Partner 3"
              className="h-auto mx-5 max-h-[100px] md:max-h-[150px]"
              width={150}
              height={100}
            />
          </div>
          <div className="px-5 mb-8 md:mb-0">
            <Image
              src="/partner4.png"
              alt="Partner 4"
              className="h-auto mx-5 max-h-[100px] md:max-h-[150px]"
              width={150}
              height={100}
            />
          </div>
          <div className="px-5 mb-8 md:mb-0">
            <Image
              src="/partner5.png"
              alt="Partner 5"
              className="h-auto mx-5 max-h-[100px] md:max-h-[150px]"
              width={150}
              height={100}
            />
          </div>
          <div className="px-5 mb-8 md:mb-0">
            <Image
              src="/partner6.png"
              alt="Partner 6"
              className="h-auto mx-5 max-h-[100px] md:max-h-[150px] w-auto"
              width={150}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrosselTecnologias;
