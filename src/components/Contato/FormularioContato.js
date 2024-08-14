const FormularioContato = () => {
  return (
    <div className="bg-[#001e27] min-h-screen flex flex-col lg-flex-row justify-center items-start">
      <div className="flex flex-col items-start max-w-[434px] w-full p-4 lg-mt-neg-200">
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
      <div className="bg-[#00353f] rounded-[20px] p-4 pl-[95px] md-mt-neg-320 lg-mt-neg-320 no-mt-neg max-w-[712px] flex flex-col justify-center">
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
          </div>
          <div className="mb-[10px]">
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
          <div className="mb-[10px]">
            <label
              htmlFor="tipoDemanda"
              className="font-montserrat font-normal text-[16px] text-[#ffffff] mb-4"
            >
              Qual tipo de demanda?
            </label>
            <div className="flex flex-col mt-4">
              <label className="font-montserrat font-normal text-[15px] text-[#ffffff] mb-4">
                <input
                  type="checkbox"
                  name="tipoDemanda"
                  value="novaFuncionalidade"
                  className="mr-2 custom-checkbox"
                />
                Nova funcionalidade (Micro Serviço)
              </label>
              <label className="font-montserrat font-normal text-[15px] text-[#ffffff] mb-4">
                <input
                  type="checkbox"
                  name="tipoDemanda"
                  value="integracaoSistemas"
                  className="mr-2 custom-checkbox"
                />
                Integração com outros sistemas
              </label>
              <label className="font-montserrat font-normal text-[15px] text-[#ffffff] mb-4">
                <input
                  type="checkbox"
                  name="tipoDemanda"
                  value="interfacePersonalizada"
                  className="mr-2 custom-checkbox"
                />
                Interface personalizada (Micro Interface)
              </label>
              <label className="font-montserrat font-normal text-[15px] text-[#ffffff] mb-4">
                <input
                  type="checkbox"
                  name="tipoDemanda"
                  value="outros"
                  className="mr-2 custom-checkbox"
                />
                Outros
              </label>
            </div>
          </div>
          <div className="mb-[10px]">
            <label
              htmlFor="objeçãoAtivacao"
              className="font-montserrat font-normal text-[16px] text-[#ffffff]"
            >
              Qual foi a objeção que você encontrou nessa ativação?
            </label>
            <textarea
              id="objeçãoAtivacao"
              name="objeçãoAtivacao"
              className="w-full max-w-[549px] h-[216px] p-2 mt-2 mb-[15px] rounded-[4px] bg-[#001e27] placeholder:font-montserrat placeholder:text-[14px] placeholder:text-[#809A9F] resize-none"
              placeholder="Descreva o problema ou a necessidade específica que você gostaria de resolver. Quanto mais detalhes, melhor."
            ></textarea>
          </div>
          <div className="mb-[10px]">
            <label
              htmlFor="prioridade"
              className="font-montserrat font-normal text-[16px] text-[#ffffff]"
            >
              Qual prioridade?
            </label>
            <div className="flex flex-col mt-2">
              <label className="font-montserrat font-normal text-[15px] text-[#ffffff] mb-2">
                <input
                  type="radio"
                  name="prioridade"
                  value="altaUrgente"
                  className="mr-2 custom-radio"
                />
                Alta Urgente
              </label>
              <label className="font-montserrat font-normal text-[15px] text-[#ffffff] mb-2">
                <input
                  type="radio"
                  name="prioridade"
                  value="media"
                  className="mr-2 custom-radio"
                />
                Média
              </label>
              <label className="font-montserrat font-normal text-[15px] text-[#ffffff] mb-2">
                <input
                  type="radio"
                  name="prioridade"
                  value="baixa"
                  className="mr-2 custom-radio"
                />
                Baixa
              </label>
            </div>
          </div>
          <div className="mt-4 mb-[50px]">
            <button
              type="submit"
              className="w-full max-w-[549px] h-[68px] bg-[#00E2F4] text-[#12191E] font-montserrat font-light text-[20px] rounded-[4px]"
            >
              Enviar demanda
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioContato;
