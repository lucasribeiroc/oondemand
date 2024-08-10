import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { className, onClick } = props;
  return <div className={`${className} block bg-none`} onClick={onClick} />;
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return <div className={`${className} block bg-none`} onClick={onClick} />;
};

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
        <div className="text-center w-[90%] md:w-[90%] h-auto">
          <Slider
            infinite={true}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={2000}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
            centerMode={true}
            centerPadding="20px"
            responsive={[
              {
                breakpoint: 1930,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            <div className="px-5">
              <img
                src="partner1.png"
                alt="Partner 1"
                className="h-auto mx-5 max-h-[100px] md:max-h-[150px]"
              />
            </div>
            <div className="px-0">
              <img
                src="partner2.png"
                alt="Partner 2"
                className="h-auto mx-5 max-h-[100px] md:max-h-[150px]"
              />
            </div>
            <div className="px-0">
              <img
                src="partner3.png"
                alt="Partner 3"
                className="h-auto mx-5 max-h-[100px] md:max-h-[150px]"
              />
            </div>
            <div className="px-0">
              <img
                src="partner4.png"
                alt="Partner 4"
                className="h-auto mx-5 max-h-[100px] md:max-h-[150px]"
              />
            </div>
            <div className="px-0">
              <img
                src="partner5.png"
                alt="Partner 5"
                className="h-auto mx-5 max-h-[100px] md:max-h-[150px]"
              />
            </div>
            <div className="px-0">
              <img
                src="partner6.png"
                alt="Partner 6"
                className="h-auto mx-5 max-h-[100px] md:max-h-[150px] w-auto"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CarrosselTecnologias;
