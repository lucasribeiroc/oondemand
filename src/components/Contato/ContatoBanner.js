import Image from "next/image";
import Link from "next/link";

const ContatoBanner = () => {
  return (
    <div className="w-full">
      <Image
        src="/banner-contato.png"
        alt="Banner Contato"
        layout="responsive"
        width={1920}
        height={1080}
      />
    </div>
  );
};

export default ContatoBanner;
