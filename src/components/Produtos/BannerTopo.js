import Image from "next/image";

const BannerTopo = () => {
  return (
    <section
      className="w-full h-auto lg:h-[500px] bg-cover bg-center flex flex-col items-center justify-center py-8 md:py-12 lg:py-20"
      style={{ backgroundImage: "url('/bg-banner-topo.png')" }}
    >
      <div className="text-center px-4 md:px-8 lg:px-16">
        <h1 className="font-poppins text-[32px] md:text-[48px] lg:text-[64px] tracking-[-0.9px] font-bold">
          <span className="text-[#00E2F4]">Nossos truques</span>{" "}
          <span className="text-white font-normal">em cartaz</span>
        </h1>
        <div className="pt-[20px] md:pt-[30px] lg:pt-[45px]">
          <p className="font-poppins font-medium text-[16px] md:text-[20px] lg:text-[24px] tracking-[0.1px] text-white">
            Dezenas de soluções oOnDemand, testadas e prontas para serem
            implementadas
            <br className="hidden md:block" />
            em até 7 dias. Simplifique seus processos e foque no crescimento do
            seu negócio.
          </p>
        </div>
        <div className="pt-[20px] md:pt-[30px] lg:pt-[45px] flex justify-center">
          <button className="w-[150px] md:w-[200px] lg:w-[316px] h-[35px] md:h-[40px] lg:h-[45px] bg-[#6EDFF6] rounded-[4.8px] flex items-center justify-center hover:bg-[#5CC9E0] hover:text-[#E0F7FA] px-2 md:px-4">
            <Image
              src="/whatsapp.png"
              alt="WhatsApp"
              width={20}
              height={20}
              className="mr-[8px]"
            />
            <span className="font-montserrat font-bold text-[12px] md:text-[16px] lg:text-[20px] text-white">
              Falar com um consultor
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerTopo;
