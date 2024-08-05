import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
};

const CarrosselTecnologias = () => {
  return (
    <div
      style={{
        backgroundColor: "#001E27",
        minHeight: "100vh",
        paddingTop: "0px", // Remove o padding top
        paddingBottom: "0px", // Remove o padding bottom
      }}
    >
      {/* Nova seção abaixo dos cards */}
      <div className="flex justify-center">
        <div className="text-center">
          <span
            className="text-[48px] text-[#00E2F4]"
            style={{
              letterSpacing: "-0.9px",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "700", // Poppins Mixed geralmente usa peso 700 para negrito
            }}
          >
            Nossa
          </span>
          <span
            className="text-[48px] text-white"
            style={{
              letterSpacing: "-0.9px",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "400", // Poppins Mixed geralmente usa peso 400 para regular
            }}
          >
            &nbsp;Caixa Mágica
          </span>
        </div>
      </div>

      {/* Novo texto abaixo */}
      <div className="flex justify-center mt-10">
        <div
          className="text-center"
          style={{
            width: "1109px",
            height: "88px",
          }}
        >
          <span
            className="text-[24px] text-white"
            style={{
              letterSpacing: "0.1px",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "500", // Poppins Medium geralmente usa peso 500
            }}
          >
            Fazemos mágica com tecnologia e para isso usamos o que há de mais
            moderno no mercado, seguindo as tendências das grandes empresas.
          </span>
        </div>
      </div>

      {/* Carrossel de parceiros */}
      <div className="flex justify-center mt-10">
        <div
          className="text-center"
          style={{
            width: "1065px",
            height: "150px",
          }}
        >
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
          >
            <div style={{ padding: "0 20px" }}>
              <img
                src="partner1.png"
                alt="Partner 1"
                style={{ height: "auto", margin: "0 20px", maxHeight: "150px" }}
              />
            </div>
            <div style={{ padding: "0 0px" }}>
              <img
                src="partner2.png"
                alt="Partner 2"
                style={{ height: "auto", margin: "0 20px", maxHeight: "150px" }}
              />
            </div>
            <div style={{ padding: "0 0px" }}>
              <img
                src="partner3.png"
                alt="Partner 3"
                style={{ height: "auto", margin: "0 20px", maxHeight: "150px" }}
              />
            </div>
            <div style={{ padding: "0 0px" }}>
              <img
                src="partner4.png"
                alt="Partner 4"
                style={{ height: "auto", margin: "0 20px", maxHeight: "150px" }}
              />
            </div>
            <div style={{ padding: "0 0px" }}>
              <img
                src="partner5.png"
                alt="Partner 5"
                style={{ height: "auto", margin: "0 20px", maxHeight: "150px" }}
              />
            </div>
            <div style={{ padding: "0 0px" }}>
              <img
                src="partner6.png"
                alt="Partner 6"
                style={{
                  height: "auto",
                  margin: "0 20px",
                  maxHeight: "150px",
                  width: "auto",
                }}
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CarrosselTecnologias;
