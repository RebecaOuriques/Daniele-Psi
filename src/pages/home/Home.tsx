//import { Link } from 'react-router-dom'
import dani2 from '../../assets/dani2.png'
import Sobre from '../sobre/Sobre'
import WhatsAppButton from '../../components/whatsapp/Whatsapp'
import Contato from '../contato/Contato';
import Servico from '../servico/Servico';
import Perguntas from '../perguntas/Perguntas';
import Depoimentos from '../depoimentos/Depoimentos';

function Home() {

    const phoneNumber = "5521989409557";
    const message = "Olá, gostaria de agendar uma consulta!";

    const formattedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;
    return (

        <>
            <section className="w-full flex py-12 md:py-12 lg:py-16 xl:py-20 px-2 mx-0 justify-center bg-gradient-to-r text-daniAzul">
                <div className="container flex px-2 md:px-6">
                    <div className="flex flex-col justify-center items-center space-y-4 text-center ">
                        <div className="space-y-2 flex-row ">
                            <h1 className="text-2xl font-bold text-daniAzul tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                Danielle Lins
                            </h1>
                            <p className="mx-auto max-w-[700px] text-daniAzul md:text-xl dark:text-daniAzul"></p>
                            <p className=' text-daniAzul md:text-xl dark:text-daniAzul'>Sou  psicóloga e terapeuta sexual.</p>
                            <p className=' text-daniAzul md:text-xl dark:text-daniAzul'>Seja bem-vindo ao espaço onde o acolhimento e o
                                autoconhecimento se encontram.</p>
                        </div>
                        <div className="space-x-4 flex justify-center items-center">
                            <div className='hover:scale-105 transition-transform duration-300'>
                            <WhatsAppButton
                                phoneNumber={phoneNumber}
                                message="Olá, gostaria de mais informações sobre o serviço de teparia!"
                                showImage={false}
                            />
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-daniRose border-3 rounded-lg p-2 hover:bg-daniVermelho "
                            >
                                Agende sua consulta
                            </a>
                            </div>
                             {/* // <div className='hover:scale-105 transition-transform duration-300'>
                              <button className="bg-daniRose border-3 rounded-lg p-2 hover:bg-daniVermelho">Saiba +</button>
                             </div> */}
                          </div>
                    </div>

                    <div className='container mx-auto w-[50vh] flex'>
                        <img src={dani2} alt="" className=' flex justify-center mt-2 w-[50vh] rounded-lg ' />
                    </div>
                </div>

            </section>
            <Servico />
            <Sobre />
            <Depoimentos />
            <Perguntas />
            <Contato />
        </>
    )
}

export default Home