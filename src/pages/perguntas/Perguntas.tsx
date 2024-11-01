import React, { useState } from 'react';

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
      answer: "Uma sessão geralmente dura entre 45 a 50 minutos, mas isso pode variar conforme a necessidade do paciente."
    },
    {
      question: "A terapia é confidencial?",
      answer: "Sim, a terapia é um espaço seguro e confidencial. Todas as informações compartilhadas durante as sessões são mantidas em sigilo, exceto em situações onde há risco de danos a você ou a terceiros."
    },
    {
      question: "Como sei se preciso de terapia?",
      answer: "Se você está enfrentando dificuldades emocionais, estresse, ansiedade, problemas de relacionamento ou simplesmente deseja um espaço para se entender melhor, a terapia pode ser uma boa opção."
    }
  ];

  return (
    <>
      <div className="px-2">
        <div className="text-daniAzul font-semibold text-center">FAQ - Perguntas Frequentes</div>

        {faqs.map((faq, index) => (
          <div className="border-2 rounded-3xl shadow-lg p-1 my-2" key={index}>
            <div className="flex justify-between items-center" onClick={() => handleToggle(index)}>
              <p className="text-daniAzul font-sans font-semibold text-center py-2">{faq.question}</p>
              <span className={`ml-2 cursor-pointer ${activeIndex === index ? 'rotate-90' : ''}`}>&#9654;</span>
            </div>
            {activeIndex === index && (
              <p className="text-justify p-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Perguntas;
