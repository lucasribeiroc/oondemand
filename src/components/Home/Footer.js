const Footer = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto bg-[#001E27] p-8 flex flex-col items-center md:flex-row md:items-start">
        <img
          src="logo-footer.svg"
          alt="Logo Footer"
          className="w-[200px] h-[200px] mb-8 md:mb-0"
        />
        <div className="flex flex-col md:flex-row md:ml-24">
          <div className="mb-8 md:mb-0 md:pl-[350px]">
            <p className="text-[#00E2F4] font-montserrat text-[16px]">
              Discovery
            </p>
            <p className="text-[#E1E1E1] font-montserrat text-[16px] mt-4 md:mt-8">
              New Season
            </p>
            <p className="text-[#E1E1E1] font-montserrat text-[16px] mt-4 md:mt-8">
              Most searched
            </p>
            <p className="text-[#E1E1E1] font-montserrat text-[16px] mt-4 md:mt-8">
              Most selled
            </p>
          </div>
          <div className="mb-8 md:mb-0 md:pl-[120px]">
            <p className="text-[#00E2F4] font-montserrat text-[16px]">About</p>
            <p className="text-[#E1E1E1] font-montserrat text-[16px] mt-4 md:mt-8">
              Help
            </p>
            <p className="text-[#E1E1E1] font-montserrat text-[16px] mt-4 md:mt-8">
              Shipping
            </p>
            <p className="text-[#E1E1E1] font-montserrat text-[16px] mt-4 md:mt-8">
              Affiliate
            </p>
          </div>
          <div className="md:pl-[120px]">
            <p className="text-[#00E2F4] font-montserrat text-[16px]">Info</p>
            <p className="text-[#E1E1E1] font-montserrat text-[16px] mt-4 md:mt-8">
              Contact us
            </p>
            <p className="text-[#E1E1E1] font-montserrat text-[16px] mt-4 md:mt-8">
              Privacy Policies
            </p>
            <p className="text-[#E1E1E1] font-montserrat text-[16px] mt-4 md:mt-8">
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-auto bg-[#e5e5e5] flex flex-col md:flex-row items-center justify-between p-4 md:p-0">
        <p className="text-[#5E6E89] mb-2 md:mb-0 md:pl-8">
          ©oOndemand todos direitos reservados
        </p>
        <p className="text-[#5E6E89] md:pr-8">
          Designed with ❤️ by Ancor midia
        </p>
      </div>
    </div>
  );
};

export default Footer;
