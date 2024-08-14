import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-[#001E27] h-auto md:h-[460px]">
      <div className="w-full h-auto md:h-[460px] bg-[#001E27] p-6 md:pl-24 flex flex-col md:flex-row items-center justify-center">
        <Image
          src="/logo-footer.svg"
          alt="Logo Footer"
          width={200}
          height={200}
          className="w-[200px] h-[200px] mb-6 md:mb-0"
        />
        <div className="flex flex-col md:flex-row md:justify-center w-full md:w-auto">
          <div className="md:pl-[50px] mb-6 md:mb-0 text-center md:text-left">
            <Link href="/contato">
              <span className="text-[#E1E1E1] font-montserrat text-[16px] mt-8 block">
                Contato
              </span>
            </Link>
            <Link href="/produtos">
              <span className="text-[#E1E1E1] font-montserrat text-[16px] mt-8 block">
                Produtos
              </span>
            </Link>
            <Link href="/#faq">
              <span className="text-[#E1E1E1] font-montserrat text-[16px] mt-8 block">
                Perguntas Frequentes
              </span>
            </Link>
          </div>
          <div className="md:pl-[50px] mb-6 md:mb-0 text-center md:text-left">
            <Link href="https://forms.gle/gXjNvQjN5qv9Y4Wb6">
              <span
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E1E1E1] font-montserrat text-[16px] mt-8 block"
              >
                Faça parte do nosso Squad de Dev
              </span>
            </Link>
            <Link href="https://www.linkedin.com/company/oondemand">
              <span
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E1E1E1] font-montserrat text-[16px] mt-8 block"
              >
                Nossas redes sociais
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-[76px] bg-[#e5e5e5] flex items-center justify-between">
        <p className="text-[#5E6E89] pl-8">
          ©oOndemand todos direitos reservados
        </p>
        <p className="text-[#5E6E89] pr-8">Designed with ❤️ by Ancor midia</p>
      </div>
    </div>
  );
};

export default Footer;
