import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa os estilos do carousel
import Image from "next/image";

const CarrosselBanner = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      interval={3000}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        const className = isSelected
          ? "bg-black w-8 h-1 inline-block mx-2 cursor-pointer"
          : "bg-gray-300 w-8 h-1 inline-block mx-2 cursor-pointer";
        return (
          <li
            className={className}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#00E2F4] w-[48.59px] h-[39.39px] flex justify-center items-center rounded-full z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#2E363E"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#00E2F4] w-[48.59px] h-[39.39px] flex justify-center items-center rounded-full z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#2E363E"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )
      }
      className="relative h-[656px]"
    >
      <div className="relative h-[656px]">
        <Image
          src="/carrossel1.png"
          alt="Carrossel 1"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
        <div className="absolute top-1/2 left-4 md:left-44 transform -translate-y-1/2 text-white text-[24px] md:text-[48px] font-extrabold">
          <div className="text-left mb-[1px]">
            Teste Sob
            <br className="mb-[0.5px]" />
            Demanda
            <br className="mb-[0.5px]" />
            <span className="font-normal">do pedido ao</span>
            <br className="mb-[0.5px]" />
            pagamento
            <br className="mb-[30px]" />
            <div className="font-normal text-[16px] md:text-[24px] leading-none">
              Seu desejo é uma ordem! Você só
              <div className="mt-[20px]">paga pelo tempo otimizado!</div>
              <button className="mt-[20px] md:mt-[60px] w-[200px] md:w-[292px] h-[40px] md:h-[48px] bg-[#00E2F4] border border-[#6EDFF6] text-[#001E27] text-[16px] md:text-[20px] font-bold rounded-[10px] hover:bg-[#00c2d4] active:transform active:scale-95 transition-transform">
                Conheça nossos truques
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[656px]">
        <Image
          src="/carrossel2.png"
          alt="Carrossel 2"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
        <div className="absolute top-1/2 left-4 md:left-44 transform -translate-y-1/2 text-white text-[24px] md:text-[48px] font-extrabold">
          <div className="text-left mb-[1px]">
            Teste Sob
            <br className="mb-[0.5px]" />
            Demanda
            <br className="mb-[0.5px]" />
            <span className="font-normal">do pedido ao</span>
            <br className="mb-[0.5px]" />
            pagamento
            <br className="mb-[30px]" />
            <div className="font-normal text-[16px] md:text-[24px] leading-none">
              Seu desejo é uma ordem! Você só
              <div className="mt-[20px]">paga pelo tempo otimizado!</div>
              <button className="mt-[20px] md:mt-[60px] w-[200px] md:w-[292px] h-[40px] md:h-[48px] bg-[#00E2F4] border border-[#6EDFF6] text-[#001E27] text-[16px] md:text-[20px] font-bold rounded-[10px] hover:bg-[#00c2d4] active:transform active:scale-95 transition-transform">
                Conheça nossos truques
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[656px]">
        <Image
          src="/carrossel3.png"
          alt="Carrossel 3"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
        <div className="absolute top-1/2 left-4 md:left-44 transform -translate-y-1/2 text-white text-[24px] md:text-[48px] font-extrabold">
          <div className="text-left mb-[1px]">
            Teste Sob
            <br className="mb-[0.5px]" />
            Demanda
            <br className="mb-[0.5px]" />
            <span className="font-normal">do pedido ao</span>
            <br className="mb-[0.5px]" />
            pagamento
            <br className="mb-[30px]" />
            <div className="font-normal text-[16px] md:text-[24px] leading-none">
              Seu desejo é uma ordem! Você só
              <div className="mt-[20px]">paga pelo tempo otimizado!</div>
              <button className="mt-[20px] md:mt-[60px] w-[200px] md:w-[292px] h-[40px] md:h-[48px] bg-[#00E2F4] border border-[#6EDFF6] text-[#001E27] text-[16px] md:text-[20px] font-bold rounded-[10px] hover:bg-[#00c2d4] active:transform active:scale-95 transition-transform">
                Conheça nossos truques
              </button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CarrosselBanner;
