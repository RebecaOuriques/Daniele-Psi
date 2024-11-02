import dani2 from '../../assets/dani2.png'

function Sobre() {
    return (

        <>

            <div className="justify-around py-3 bg-daniAzul  text-white">
                <div className="px-3 justify-around">

                    <h2 className='font-semibold text-2xl'>Sobre mim</h2>
                    <p className="text-justify text-evenly py-2">
                        <p>Sou Danielle Lins, Psicóloga, Terapeuta Cognitiva Comportamental e Sexual (CRP 05/62079), sou formada pela Universidade Estácio de Sá (2019) e pós graduada em Sexualidade Humana pela Celso Lisboa (2022). Com uma abordagem especializada em Terapia Cognitiva Comportamental (TCC) e Terapia Sexual. Tenho uma trajetória dedicada ao cuidado e à promoção da saúde mental, atuando desde 2020 no Albergue Dercy Gonçalves, uma instituição que acolhe mulheres em situação de vulnerabilidade no município do Rio de Janeiro, comprometida com pesquisas e ações sociais e culturais além de atuar há + de XXX anos como psicóloga clínica.

                            <p className='py-2'>Minha formação é complementada por diversas capacitações em áreas essenciais para o atendimento psicológico. Entre elas, destaco:</p>

                            <p><li> Saúde Mental, Uso de Álcool e Outras Drogas, e População em Situação de Rua – GDEP.</li>
                                <li>Política de Assistência Social e Proteções Afiançadas – GDEP, com foco em cuidados em saúde para prevenção à Covid-19.</li>
                                <li>Terapia Cognitivo Comportamental – Instituto Brasileiro de Hipnose Aplicada, incluindo abordagens específicas para casais.</li>
                                <li>Autoestima e Habilidades Terapêuticas do Psicólogo Clínico.</li>
                            </p>
                            <p className='py-2'> Além disso, participei da 13ª Mostra Regional de Práticas em Psicologia, onde apresentei o trabalho “Autismo e a Psicanálise” e do I Fórum DETRAN/RJ Mulher em Rede, abordando os desafios no contexto atual.
                            </p>
                            Estou comprometida em oferecer um espaço acolhedor e profissional para que cada pessoa possa explorar suas questões emocionais e desenvolver estratégias para uma vida mais saudável e equilibrada.

                        </p>
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