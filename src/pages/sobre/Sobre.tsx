import dani2 from '../../assets/dani2.png'

function Sobre() {
    return (

        <>

            <div className="justify-around py-3 bg-daniAzul text-white">
                <div className="px-3 justify-around">

                    <h2 className='font-semibold text-2xl'>Sobre mim</h2>
                    <p className="text-justify text-evenly pt-2">
                        <p>Sou Danielle Lins Psicóloga, Terapeuta Cognitiva Comportamental e Sexual (CRP 05/62079).
                            Formada pela Universidade Estácio de Sá (2019) e pós graduada pela Celso Lisboa (2022). Com uma abordagem especializada em Terapia Cognitiva Comportamental (TCC) e Terapia Sexual, estou aqui para ajudá-lo a explorar e superar desafios emocionais e relacionais.
                        </p>
                        <p className="font-semibold pt-4">❤️‍🔥 Sexualidade e Relacionamento</p>
                        A sexualidade e o relacionamento são aspectos fundamentais da vida humana. Ofereço um espaço seguro e respeitoso para discutir suas preocupações, dúvidas e inseguranças. Trabalhando tanto com atendimentos individuais quanto em casal, meu objetivo é promover a compreensão mútua e o fortalecimento das relações.
                        <p className="font-semibold pt-4">Atendimento Individual e em Casal</p>
                        Cada pessoa e cada relacionamento é único. Meu trabalho é personalizado para atender às suas necessidades específicas, proporcionando um espaço de escuta ativa e empatia. Vamos juntos construir caminhos para o autodescobrimento e a melhoria da qualidade de vida.
                        Se você está pronto para iniciar essa jornada de autoconhecimento e transformação, entre em contato e agende uma consulta. Estou aqui para apoiá-lo em cada passo do caminho.

                    </p>
                </div>
                <div className="flex justify-center py-2">
                    <img src={dani2} alt="" className=' flex justify-center mt-2 w-[50vh] rounded-lg' />
                </div>

            </div>
        </>
    )
}

export default Sobre