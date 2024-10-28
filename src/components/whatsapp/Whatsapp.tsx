import React from 'react';
//import whatsapp from '../../assets/whatsapp.png'

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message }) => {
  const formattedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <WhatsAppButton phoneNumber="5521989409557" message="Olá, gostaria de mais informações sobre o serviço de teparia!" />
    </a>
  );
};

export default WhatsAppButton;
