import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const incrementTime = () => {
      setTime((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        seconds = parseInt(seconds) + 1;
        if (seconds === 60) {
          seconds = 0;
          minutes = parseInt(minutes) + 1;
        }
        if (minutes === 60) {
          minutes = 0;
          hours = parseInt(hours) + 1;
        }
        if (hours === 24) {
          hours = 0;
          days = parseInt(days) + 1;
        }

        return {
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        };
      });
    };

    const interval = setInterval(incrementTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#001E27]">
      <header className="bg-[#00343F] w-full h-[79px] flex justify-center items-center">
        <a href="#">
          <Image src="/logo.png" alt="Logo" width={200} height={200} />
        </a>
      </header>
      <div className="relative h-[656px]">
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
      </div>
      <div className="flex items-center justify-start p-8">
        <div className="flex items-center w-full">
          <Image src="/cartola.png" alt="Cartola" width={362} height={362} />
          <div
            className="ml-[55px] pl-4 text-[#00E2F4] font-bold text-[36px] uppercase leading-none" // Aumenta a margem esquerda ligeiramente
            style={{ letterSpacing: "0.105em" }}
          >
            <div>Num Passe</div>
            <div>De Mágica</div>
          </div>
          <div className="flex flex-col items-center justify-center ml-auto text-white text-[11.55px] font-light font-poppins pr-5 mr-12">
            <div className="flex space-x-4">
              <div className="flex flex-col items-center">
                <div className="text-center">Dias</div>
                <div
                  style={{
                    fontSize: "59.42px",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "400",
                    color: "white",
                  }}
                >
                  {time.days}
                </div>
              </div>
              <div className="flex items-center">
                <div
                  style={{
                    fontSize: "59.42px",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "400",
                    color: "white",
                    marginTop: "10px", // Ajuste a margem conforme necessário
                  }}
                >
                  :
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-center">Horas</div>
                <div
                  style={{
                    fontSize: "59.42px",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "400",
                    color: "white",
                  }}
                >
                  {time.hours}
                </div>
              </div>
              <div className="flex items-center">
                <div
                  style={{
                    fontSize: "59.42px",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "400",
                    color: "white",
                    marginTop: "10px", // Ajuste a margem conforme necessário
                  }}
                >
                  :
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-center">Minutos</div>
                <div
                  style={{
                    fontSize: "59.42px",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "400",
                    color: "white",
                  }}
                >
                  {time.minutes}
                </div>
              </div>
              <div className="flex items-center">
                <div
                  style={{
                    fontSize: "59.42px",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "400",
                    color: "white",
                    marginTop: "10px", // Ajuste a margem conforme necessário
                  }}
                >
                  :
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-center">Segundos</div>
                <div
                  style={{
                    fontSize: "59.42px",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "400",
                    color: "white",
                  }}
                >
                  {time.seconds}
                </div>
              </div>
            </div>
            <div
              className="mt-1 text-[#00E2F4] font-semibold" // Reduz a margem superior para aproximar o texto do contador
              style={{
                fontSize: "19.81px",
                fontFamily: "Montserrat, sans-serif",
                letterSpacing: "0.105em", // Convertido para em
                marginLeft: "10px", // Aumenta a margem esquerda em 10px
              }}
            >
              DE BUROCRACIA DESAPARECERAM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
