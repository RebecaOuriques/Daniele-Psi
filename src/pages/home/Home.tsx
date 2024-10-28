//import { Link } from 'react-router-dom'
import dani2 from '../../assets/dani2.png'
import Sobre from '../sobre/Sobre'
//import WhatsAppButton from '../../components/whatsapp/Whatsapp'

function Home() {
    return (

        <>
            <section className="w-full flex py-12 md:py-12 lg:py-16 xl:py-20 px-2 mx-0 justify-center bg-gradient-to-r from-blue-100 via-purple-50 to-pink-100">
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
                        <div className="space-x-4">
                            <button className="bg-daniRose border-3 rounded-lg p-2 hover:bg-daniVermelho">Agende uma consulta </button>
                            <button className="bg-daniRose border-3 rounded-lg p-2 hover:bg-daniVermelho">Saiba +</button>
                        </div>
                    </div>

                    <div className='container mx-auto w-[50vh] flex'>
                    <img src={dani2} alt="" className=' flex justify-center mt-2 w-[50vh] rounded-lg' />
                </div>
                </div>
               
            </section>
            <Sobre/>
        </>
    )
}

export default Home