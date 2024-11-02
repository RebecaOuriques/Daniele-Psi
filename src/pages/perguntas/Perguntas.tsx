import { useState } from 'react';

function Perguntas() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "O que é psicologia e como pode me ajudar?",
      answer: "A psicologia é a ciência que estuda o comportamento humano e os processos mentais. Através da terapia, é possível entender melhor suas emoções, comportamentos e relações, promovendo o bem-estar e o desenvolvimento pessoal."
    },
    {
      question: "Quanto tempo dura uma sessão?",
      answer: "Uma sessão geralmente dura entre 45 a 55 minutos, mas isso pode variar conforme a necessidade do paciente."
    },
    {
      question: "A terapia é confidencial?",
      answer: "Sim, a terapia é um espaço seguro e confidencial. Todas as informações compartilhadas durante as sessões são mantidas em sigilo, exceto em situações onde há risco de danos a você ou a terceiros."
    },
    {
      question: "Como sei se preciso de terapia?",
      answer: "Se você está enfrentando dificuldades emocionais, estresse, ansiedade, problemas de relacionamento ou simplesmente deseja um espaço para se entender melhor, a terapia pode ser uma boa opção."
    },
    {
      question: "Qual é a importancia da Sexualidade e Relacionamento?",
      answer: "A sexualidade e o relacionamento são aspectos fundamentais da vida humana. Ofereço um espaço seguro e respeitoso para discutir suas preocupações, dúvidas e inseguranças. Trabalhando tanto com atendimentos individuais quanto em casal, meu objetivo é promover a compreensão mútua e o fortalecimento das relações."
    },
    {
      question: "Como é o seu atendimento??",
      answer: "Cada pessoa é única. Meu trabalho é personalizado para atender às suas necessidades específicas, proporcionando um espaço de escuta ativa e empatia. Vamos juntos construir caminhos para o autodescobrimento e a melhoria da qualidade de vida."
    }
  ];

  return (
    <>
      <div className="p-2 bg-daniAzul">
        <div className="text-white font-semibold text-center text-xl p-2">FAQ - Perguntas Frequentes</div>

        {faqs.map((faq, index) => (
          <div className="border-2 rounded-2xl text-center shadow-lg p-1 my-2" key={index}>
            <div className="flex justify-between items-center" onClick={() => handleToggle(index)}>
              <p className="text-white font-sans font-semibold text-start py-2">{faq.question}</p>
              <span className={`ml-2 cursor-pointer ${activeIndex === index ? 'rotate-90' : ''}`}>&#9654;</span>
            </div>
            {activeIndex === index && (
              <p className="text-justify p-2 text-white">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Perguntas;
