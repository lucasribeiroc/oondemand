import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#00343F] w-full h-[79px] flex justify-center items-center">
      <Link href="/">
        <Image src="/logo-header.svg" alt="Logo" width={200} height={200} />
      </Link>
    </header>
  );
};

export default Header;
