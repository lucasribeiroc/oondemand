import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa os estilos do carousel
import Image from "next/image";
import Link from "next/link";

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
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#00E2F4] w-12 h-10 flex justify-center items-center rounded-full z-10"
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
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#00E2F4] w-12 h-10 flex justify-center items-center rounded-full z-10"
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
      className="relative h-[656px] md:h-[500px] lg:h-[656px]"
    >
      <div className="relative h-[656px] md:h-[500px] lg:h-[656px]">
        <Image
          src="/carrossel1.png"
          alt="Carrossel 1"
          layout="fill"
          objectFit="cover"
          objectPosition="center md:center lg:center 2xl:top-right"
          className="w-full h-full md:h-auto 2xl:object-[top_right] relative z-0"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#001E27]/100 to-transparent z-10"></div>
        <div className="absolute top-1/2 left-4 md:left-20 lg:left-44 transform -translate-y-1/2 text-white text-[20px] md:text-[24px] lg:text-[48px] font-extrabold md:text-left text-center w-full md:w-auto z-20">
          <div className="mb-[1px]">
            Teste Sob
            <br className="mb-[0.5px]" />
            Demanda
            <br className="mb-[0.5px]" />
            <span className="font-normal">do pedido ao</span>
            <br className="mb-[0.5px]" />
            pagamento
            <br className="mb-[30px]" />
            <div className="font-normal text-[16px] md:text-[16px] lg:text-[24px] leading-none">
              Seu desejo é uma ordem! Você só
              <div className="mt-[20px]">paga pelo tempo otimizado!</div>
              <Link href="/produtos">
                <button className="mt-[20px] md:mt-[40px] lg:mt-[60px] w-[150px] md:w-[200px] lg:w-[292px] h-[30px] md:h-[40px] lg:h-[48px] bg-[#00E2F4] border border-[#6EDFF6] text-[#001E27] text-[14px] md:text-[16px] lg:text-[20px] font-bold rounded-[10px] hover:bg-[#00c2d4] active:transform active:scale-95 transition-transform">
                  Conheça nossos truques
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[656px] md:h-[500px] lg:h-[656px]">
        <Image
          src="/carrossel2.png"
          alt="Carrossel 2"
          layout="fill"
          objectFit="cover"
          objectPosition="center md:center lg:center 2xl:top-right"
          className="w-full h-full md:h-auto 2xl:object-[top_right] relative z-0"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#001E27]/100 to-transparent z-10"></div>
        <div className="absolute top-1/2 left-4 md:left-20 lg:left-44 transform -translate-y-1/2 text-white text-[20px] md:text-[24px] lg:text-[48px] font-extrabold md:text-left text-center w-full md:w-auto z-20">
          <div className="mb-[1px]">
            Teste Sob
            <br className="mb-[0.5px]" />
            Demanda
            <br className="mb-[0.5px]" />
            <span className="font-normal">do pedido ao</span>
            <br className="mb-[0.5px]" />
            pagamento
            <br className="mb-[30px]" />
            <div className="font-normal text-[16px] md:text-[16px] lg:text-[24px] leading-none">
              Seu desejo é uma ordem! Você só
              <div className="mt-[20px]">paga pelo tempo otimizado!</div>
              <Link href="/produtos">
                <button className="mt-[20px] md:mt-[40px] lg:mt-[60px] w-[150px] md:w-[200px] lg:w-[292px] h-[30px] md:h-[40px] lg:h-[48px] bg-[#00E2F4] border border-[#6EDFF6] text-[#001E27] text-[14px] md:text-[16px] lg:text-[20px] font-bold rounded-[10px] hover:bg-[#00c2d4] active:transform active:scale-95 transition-transform">
                  Conheça nossos truques
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[656px] md:h-[500px] lg:h-[656px]">
        <Image
          src="/carrossel3.png"
          alt="Carrossel 3"
          layout="fill"
          objectFit="cover"
          objectPosition="center md:center lg:center 2xl:top-right"
          className="w-full h-full md:h-auto 2xl:object-[top_right] relative z-0"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#001E27]/100 to-transparent z-10"></div>
        <div className="absolute top-1/2 left-4 md:left-20 lg:left-44 transform -translate-y-1/2 text-white text-[20px] md:text-[24px] lg:text-[48px] font-extrabold md:text-left text-center w-full md:w-auto z-20">
          <div className="mb-[1px]">
            Teste Sob
            <br className="mb-[0.5px]" />
            Demanda
            <br className="mb-[0.5px]" />
            <span className="font-normal">do pedido ao</span>
            <br className="mb-[0.5px]" />
            pagamento
            <br className="mb-[30px]" />
            <div className="font-normal text-[16px] md:text-[16px] lg:text-[24px] leading-none">
              Seu desejo é uma ordem! Você só
              <div className="mt-[20px]">paga pelo tempo otimizado!</div>
              <Link href="/produtos">
                <button className="mt-[20px] md:mt-[40px] lg:mt-[60px] w-[150px] md:w-[200px] lg:w-[292px] h-[30px] md:h-[40px] lg:h-[48px] bg-[#00E2F4] border border-[#6EDFF6] text-[#001E27] text-[14px] md:text-[16px] lg:text-[20px] font-bold rounded-[10px] hover:bg-[#00c2d4] active:transform active:scale-95 transition-transform">
                  Conheça nossos truques
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CarrosselBanner;
