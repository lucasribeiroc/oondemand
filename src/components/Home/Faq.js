import { useState } from "react";
import FaqModulo from "../FaqModulo";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full h-auto bg-[#001E27] p-4 md:p-8 lg:p-16">
      <div className="text-center pt-20 md:pt-40">
        <p className="font-poppins font-bold text-[24px] md:text-[36px] lg:text-[48px] text-[#00e2f4] inline">
          Sua primeira vez
        </p>
        <p className="font-poppins font-medium text-[24px] md:text-[36px] lg:text-[48px] text-[#f5f5f5] inline">
          {" "}
          por aqui?
        </p>
      </div>
      <div className="w-full md:w-[90%] lg:w-[70%] mx-auto text-center mt-4">
        <p className="font-poppins font-medium text-[16px] md:text-[20px] lg:text-[24px] text-[#f5f5f5]">
          Se é a sua primeira vez aqui, provavelmente você tem algumas dúvidas
          sobre quem somos, o que fazemos e como podemos ajudar sua empresa.
          Estamos aqui para esclarecer tudo!
        </p>
      </div>
      <div className="w-full max-w-[1143px] mx-auto mt-8 space-y-4">
        <FaqModulo />
      </div>
    </div>
  );
};

export default Faq;
