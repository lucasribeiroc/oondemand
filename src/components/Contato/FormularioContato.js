const FormularioContato = () => {
  return (
    <div className="bg-[#001e27] min-h-screen flex justify-center items-start">
      <div className="flex flex-col items-start max-w-[434px] w-full p-4 mt-[-200px]">
        <div className="mb-4">
          <h1 className="font-montserrat font-medium text-[40px] text-[#f5f5f5]">
            Perdendo Vendas por Falta de Funcionalidades?{" "}
            <span className="font-montserrat font-bold text-[40px] text-[#00e2f4]">
              Podemos Ajudar!{" "}
            </span>
          </h1>
        </div>
        <div className="font-montserrat font-medium text-[24px] text-[#f5f5f5]">
          Sabemos que, como uma{" "}
          <span className="font-montserrat font-bold text-[24px] text-[#00e2f4]">
            franquia Omie
          </span>
          , você pode encontrar desafios únicos que exigem soluções específicas.
          Queremos trabalhar juntos para garantir que suas vendas aumentem,
          oferecendo customizações que atendam exatamente às necessidades dos
          seus clientes.
          <br />
          <br />
          <span className="font-montserrat font-bold text-[24px] text-[#f5f5f5]">
            Se o Omie não atende completamente suas demandas, a oOnDemand está
            aqui para resolver isso!
          </span>{" "}
          Preencha o formulário abaixo e nos diga como podemos ajudar. Nossa
          equipe usará a nossa 'tecnomagia' para transformar suas ideias em
          realidade.
        </div>
      </div>
      <div className="bg-[#00353f] rounded-[20px] p-4 pl-[95px] mt-[-320px] max-w-[712px] flex flex-col justify-center">
        <p className="font-montserrat font-semibold text-[40px] text-[#ffffff] mt-[50px]">
          Quais Processos Vamos Otimizar Hoje?
        </p>
        <form className="mt-[60px]">
          <div className="mb-[10px]">
            <label
              htmlFor="nomeFranquia"
              className="font-montserrat font-normal text-[16px] text-[#ffffff]"
            >
              Nome da Franquia:
            </label>
            <input
              type="text"
              id="nomeFranquia"
              name="nomeFranquia"
              className="w-full max-w-[549px] h-[49px] p-2 mt-2 mb-[15px] rounded-[4px] bg-[#001e27] placeholder:font-montserrat placeholder:text-[14px] placeholder:text-[#809A9F]"
              placeholder="Qual nome da franquia?"
            />
          </div>
          <div className="mb-[10px]">
            <label
              htmlFor="nomeResponsavel"
              className="font-montserrat font-normal text-[16px] text-[#ffffff]"
            >
              Nome do Responsável:
            </label>
            <input
              type="text"
              id="nomeResponsavel"
              name="nomeResponsavel"
              className="w-full max-w-[549px] h-[49px] p-2 mt-2 mb-[15px] rounded-[4px] bg-[#001e27] placeholder:font-montserrat placeholder:text-[14px] placeholder:text-[#809A9F]"
              placeholder="Com quem iremos falar?"
            />
          </div>
          <div className="mb-[10px]">
            <label
              htmlFor="nomeCliente"
              className="font-montserrat font-normal text-[16px] text-[#ffffff]"
            >
              Nome do Cliente:
            </label>
            <input
              type="text"
              id="nomeCliente"
              name="nomeCliente"
              className="w-full max-w-[549px] h-[49px] p-2 mt-2 mb-[15px] rounded-[4px] bg-[#001e27] placeholder:font-montserrat placeholder:text-[14px] placeholder:text-[#809A9F]"
              placeholder="Quem é o cliente?"
            />
          </div>
          <div className="mb-[10px]">
            <label
              htmlFor="emailContato"
              className="font-montserrat font-normal text-[16px] text-[#ffffff]"
            >
              E-mail do Contato:
            </label>
            <input
              type="email"
              id="emailContato"
              name="emailContato"
              className="w-full max-w-[549px] h-[49px] p-2 mt-2 mb-[15px] rounded-[4px] bg-[#001e27] placeholder:font-montserrat placeholder:text-[14px] placeholder:text-[#809A9F]"
              placeholder="Insira o e-mail aqui"
            />
            <label
              htmlFor="whatsapp"
              className="font-montserrat font-normal text-[16px] text-[#ffffff]"
            >
              Whatsapp:
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              pattern="\(\d{2}\) \d{5}-\d{4}"
              placeholder="(xx) xxxxx-xxxx"
              className="w-full max-w-[549px] h-[49px] p-2 mt-2 mb-[15px] rounded-[4px] bg-[#001e27] placeholder:font-montserrat placeholder:text-[14px] placeholder:text-[#809A9F]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioContato;
