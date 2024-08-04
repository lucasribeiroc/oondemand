import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  return (
    <div>
      <header
        style={{
          backgroundColor: "#00343F",
          width: "100%",
          height: "79px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <Image src="/logo.png" alt="Logo" width={200} height={200} />
      </header>
      <div style={{ marginTop: "79px" }}>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={3000}
          style={{ height: "1440px" }}
        >
          <div>
            <Image
              src="/carrossel1.png"
              alt="Carrossel 1"
              layout="responsive"
              width={1440}
              height={1440}
            />
          </div>
          <div>
            <Image
              src="/carrossel1.png"
              alt="Carrossel 1"
              layout="responsive"
              width={1440}
              height={1440}
            />
          </div>
          <div>
            <Image
              src="/carrossel1.png"
              alt="Carrossel 1"
              layout="responsive"
              width={1440}
              height={1440}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
