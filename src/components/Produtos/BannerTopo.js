import Image from "next/image";

const BannerTopo = () => {
  return (
    <section
      className="w-full h-[443px] bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/bg-banner-topo.png')" }}
    >
      <div className="text-center">
        <h1 className="font-poppins text-[48px] tracking-[-0.9px] font-bold">
          <span className="text-[#00E2F4]">Nossos truques</span>{" "}
          <span className="text-white font-normal">em cartaz</span>
        </h1>
        <div className="pt-[45px]">
          <p className="font-poppins font-medium text-[24px] tracking-[0.1px] text-white">
            Dezenas de soluções oOnDemand, testadas e prontas para serem
            implementadas
            <br />
            em até 7 dias. Simplifique seus processos e foque no crescimento do
            seu negócio.
          </p>
        </div>
        <div className="pt-[45px] flex justify-center">
          <button className="w-[316px] h-[45px] bg-[#6EDFF6] rounded-[4.8px] flex items-center justify-center hover:bg-[#5CC9E0] hover:text-[#E0F7FA]">
            <Image
              src="/whatsapp.png"
              alt="WhatsApp"
              width={24}
              height={24}
              className="mr-[8px]"
            />
            <span className="font-montserrat font-bold text-[20px] text-white">
              Falar com um consultor
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerTopo;
