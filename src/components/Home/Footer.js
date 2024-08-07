const Footer = () => {
  return (
    <div className="w-full h-[460px]">
      <div className="w-full h-[383px] bg-[#001E27] pl-24 flex items-center">
        <img
          src="logo-footer.svg"
          alt="Logo Footer"
          className="w-[200px] h-[200px]"
        />
        <div className="flex">
          <div className="pl-[350px]">
            <p className="text-[#00E2F4] font-montserrat text-[16px]">
              Discovery
            </p>
            <p className="text-[#E1E1E1] font-montserrat text-[16px] mt-8">
              New Season
            </p>
            <p className="text-[#E1E1E1] font-montserrat text-[16px] mt-8">
              Most searched
            </p>
            <p className="text-[#E1E1E1] font-montserrat text-[16px] mt-8">
              Most selled
            </p>
          </div>
          <div className="pl-[120px]">
            <p className="text-[#00E2F4] font-montserrat text-[16px]">About</p>
            <p className="text-[#E1E1E1] font-montserrat text-[16px] mt-8">
              Help
            </p>
            <p className="text-[#E1E1E1] font-montserrat text-[16px] mt-8">
              Shipping
            </p>
            <p className="text-[#E1E1E1] font-montserrat text-[16px] mt-8">
              Affiliate
            </p>
          </div>
          <div className="pl-[120px]">
            <p className="text-[#00E2F4] font-montserrat text-[16px]">Info</p>
            <p className="text-[#E1E1E1] font-montserrat text-[16px] mt-8">
              Contact us
            </p>
            <p className="text-[#E1E1E1] font-montserrat text-[16px] mt-8">
              Privacy Policies
            </p>
            <p className="text-[#E1E1E1] font-montserrat text-[16px] mt-8">
              Terms & Conditions
            </p>
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
