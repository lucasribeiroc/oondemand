import React, { useState } from "react";

const FormularioContato = () => {
  const initialFormData = {
    nomeParceiro: "",
    nomeResponsavel: "",
    nomeCliente: "",
    emailContato: "",
    whatsapp: "",
    tipoDemanda: [],
    objeçãoAtivacao: "",
    prioridade: "",
  };

  const formatPhoneNumber = (value) => {
    // Remove todos os caracteres não numéricos
    const cleaned = ("" + value).replace(/\D/g, "");

    // Verifica o comprimento do número
    const match =
      cleaned.match(/^(\d{2})(\d{5})(\d{4})$/) ||
      cleaned.match(/^(\d{2})(\d{4})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }

    return value;
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => {
        const newTipoDemanda = checked
          ? [...prevState.tipoDemanda, value]
          : prevState.tipoDemanda.filter((item) => item !== value);
        return { ...prevState, tipoDemanda: newTipoDemanda };
      });
    } else {
      setFormData({
        ...formData,
        [name]: name === "whatsapp" ? formatPhoneNumber(value) : value,
      });
    }
  };

  const isFormValid = () => {
    const {
      nomeParceiro,
      nomeResponsavel,
      nomeCliente,
      emailContato,
      whatsapp,
      tipoDemanda,
      objeçãoAtivacao,
      prioridade,
    } = formData;

    const newErrors = {};

    if (!nomeParceiro)
      newErrors.nomeParceiro = "Nome do Parceiro é obrigatório.";
    if (!nomeResponsavel)
      newErrors.nomeResponsavel = "Nome do Responsável é obrigatório.";
    if (!nomeCliente) newErrors.nomeCliente = "Nome do Cliente é obrigatório.";
    if (!emailContato)
      newErrors.emailContato = "E-mail do Contato é obrigatório.";
    if (!whatsapp) newErrors.whatsapp = "Whatsapp é obrigatório.";
    if (tipoDemanda.length === 0)
      newErrors.tipoDemanda = "Tipo de Demanda é obrigatório.";
    if (!objeçãoAtivacao)
      newErrors.objeçãoAtivacao = "Objeção na Ativação é obrigatória.";
    if (!prioridade) newErrors.prioridade = "Prioridade é obrigatória.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = isFormValid();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsPopupVisible(true);
      return;
    }

    setErrors({});
    setIsPopupVisible(false);

    const response = await fetch(
      "https://app.oondemand.com.br/md-email/ms/enviar-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa("site-oondemand:atg296Kv"),
          secretKey: "sWn5dbfKgMNv8Ouavk49Mt1SlYlu3LRB",
        },
        body: JSON.stringify({
          remetente: {
            email: "notificacao@oondemand.com.br",
            nome: "Site oOnDemand",
          },
          emailDestinatario: "lucas.ribeiro@pdvseven.com.br",
          assunto: "Nova Demanda",
          mensagem: `
Nome do Parceiro: ${formData.nomeParceiro}<br>
Nome do Responsável: ${formData.nomeResponsavel}<br>
Nome do Cliente: ${formData.nomeCliente}<br>
E-mail do Contato: ${formData.emailContato}<br>
Whatsapp: ${formData.whatsapp}<br>
Tipo de Demanda: ${formData.tipoDemanda.join(", ")}<br>
Objeção na Ativação: ${formData.objeçãoAtivacao}<br>
Prioridade: ${formData.prioridade}
          `,
        }),
      }
    );

    if (response.ok) {
      alert("Email enviado com sucesso!");
      setFormData(initialFormData); // Limpar o formulário
    } else {
      alert("Falha ao enviar o email.");
    }
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

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
          Sabemos que, como um{" "}
          <span className="font-montserrat font-bold text-[24px] text-[#00e2f4]">
            parceiro Omie
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
          equipe usará a nossa &#39;tecnomagia&#39; para transformar suas ideias
          em realidade.
        </div>
      </div>
      <div className="bg-[#00353f] rounded-[20px] p-4 pl-[95px] md-mt-neg-320 lg-mt-neg-320 no-mt-neg max-w-[712px] flex flex-col justify-center">
        <p className="font-montserrat font-semibold text-[40px] text-[#ffffff] mt-[50px]">
          Quais Processos Vamos Otimizar Hoje?
        </p>
        <form className="mt-[60px]" onSubmit={handleSubmit}>
          <div className="mb-[10px]">
            <label
              htmlFor="nomeParceiro"
              className="font-montserrat font-normal text-[16px] text-[#ffffff]"
            >
              Nome do Parceiro:
            </label>
            <input
              type="text"
              id="nomeParceiro"
              name="nomeParceiro"
              className="w-full max-w-[549px] h-[49px] p-2 mt-2 mb-[15px] rounded-[4px] bg-[#001e27] placeholder:font-montserrat placeholder:text-[14px] placeholder:text-[#809A9F]"
              placeholder="Qual nome do parceiro?"
              value={formData.nomeParceiro}
              onChange={handleChange}
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
              value={formData.nomeResponsavel}
              onChange={handleChange}
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
              value={formData.nomeCliente}
              onChange={handleChange}
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
              value={formData.emailContato}
              onChange={handleChange}
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
              pattern="\(\d{2}\) \d{4,5}-\d{4}"
              placeholder="(xx) xxxxx-xxxx"
              className="w-full max-w-[549px] h-[49px] p-2 mt-2 mb-[15px] rounded-[4px] bg-[#001e27] placeholder:font-montserrat placeholder:text-[14px] placeholder:text-[#809A9F]"
              value={formData.whatsapp}
              onChange={handleChange}
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
                  checked={formData.tipoDemanda.includes("novaFuncionalidade")}
                  onChange={handleChange}
                />
                Nova funcionalidade (Micro Serviço)
              </label>
              <label className="font-montserrat font-normal text-[15px] text-[#ffffff] mb-4">
                <input
                  type="checkbox"
                  name="tipoDemanda"
                  value="integracaoSistemas"
                  className="mr-2 custom-checkbox"
                  checked={formData.tipoDemanda.includes("integracaoSistemas")}
                  onChange={handleChange}
                />
                Integração com outros sistemas
              </label>
              <label className="font-montserrat font-normal text-[15px] text-[#ffffff] mb-4">
                <input
                  type="checkbox"
                  name="tipoDemanda"
                  value="interfacePersonalizada"
                  className="mr-2 custom-checkbox"
                  checked={formData.tipoDemanda.includes(
                    "interfacePersonalizada"
                  )}
                  onChange={handleChange}
                />
                Interface personalizada (Micro Interface)
              </label>
              <label className="font-montserrat font-normal text-[15px] text-[#ffffff] mb-4">
                <input
                  type="checkbox"
                  name="tipoDemanda"
                  value="outros"
                  className="mr-2 custom-checkbox"
                  checked={formData.tipoDemanda.includes("outros")}
                  onChange={handleChange}
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
              value={formData.objeçãoAtivacao}
              onChange={handleChange}
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
                  checked={formData.prioridade === "altaUrgente"}
                  onChange={handleChange}
                />
                Alta Urgente
              </label>
              <label className="font-montserrat font-normal text-[15px] text-[#ffffff] mb-2">
                <input
                  type="radio"
                  name="prioridade"
                  value="media"
                  className="mr-2 custom-radio"
                  checked={formData.prioridade === "media"}
                  onChange={handleChange}
                />
                Média
              </label>
              <label className="font-montserrat font-normal text-[15px] text-[#ffffff] mb-2">
                <input
                  type="radio"
                  name="prioridade"
                  value="baixa"
                  className="mr-2 custom-radio"
                  checked={formData.prioridade === "baixa"}
                  onChange={handleChange}
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
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-black">
              Erros no Formulário
            </h2>
            <ul className="list-disc list-inside text-black">
              {Object.values(errors).map((error, index) => (
                <li key={index} className="text-black-500">
                  {error}
                </li>
              ))}
            </ul>
            <button
              onClick={closePopup}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormularioContato;
