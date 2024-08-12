import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-[#00343F] w-full h-[79px] flex justify-center items-center">
      <a href="/">
        <Image src="/logo-header.svg" alt="Logo" width={200} height={200} />
      </a>
    </header>
  );
};

export default Header;
