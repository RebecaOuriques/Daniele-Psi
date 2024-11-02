function Servico() {

    //const [activeIndex, setActiveIndex] = useState(null);


    return (

        <>
            <div className="p-2 m-2 md:grid md:grid-flow-row grid-cols-3 gap-2 justify-around">


                <div className="container p-3 border-2 mb-2 rounded-3xl border-daniAzul shadow-md">
                    <div className="flex justify-center"><PersonalIcon className=" text-daniAzul flex justify-center " /></div>
                    <h2 className="font-semibold text-daniAzul pt-2 text-center">Terapia Individual</h2>
                    <p className="text-justify pt-2 ">
                        A terapia individualizada é um processo único, adaptado às necessidades e objetivos de cada cliente.
                        Utilizo diversas abordagens para ajudar você a enfrentar desafios emocionais, desenvolver autoconhecimento e promover o bem-estar mental.
                    </p>
                </div>

                <div className="container bg-white p-3 border-2 border-daniVermelho mb-2 rounded-3xl shadow-sm">
                    <div className="flex justify-center"><CoupleIcon className="text-daniVermelho flex justify-center " /></div>
                    <h2 className="font-semibold text-daniVermelho pt-2 text-center">Terapia de Casal</h2>
                    <p className="text-justify pt-2">A terapia de casal oferece um espaço seguro para que parceiros explorem e resolvam conflitos,
                        melhorando a comunicação e a intimidade. Ajudo a identificar padrões de comportamento e a construir um relacionamento
                        mais saudável e satisfatório.
                    </p>
                </div>

                <div className="container bg-white p-3 border-2 mb-2 border-daniAzul rounded-3xl shadow-md">
                    <div className="flex justify-center"><GroupIcon className=" text-daniAzul  justify-center " /></div>
                    <h2 className="font-semibold text-daniAzul pt-2 text-center">Terapia em Grupo</h2>
                    <p className="text-justify pt-2">A terapia grupal proporciona um espaço colaborativo onde os participantes podem compartilhar
                        experiências e aprender uns com os outros. Sob orientação profissional, os grupos promovem apoio mútuo e ajudam a
                        desenvolver habilidades sociais e emocionais.
                    </p>
                </div>

                <div className="container bg-white p-3 px-4 border-2 border-daniVermelho mb-2 rounded-3xl shadow-md">
                    <div className="flex justify-center"><SexualityIcon className="text-daniVermelho flex justify-center " /></div>
                    <h2 className="font-semibold text-daniVermelho pt-2 text-center">Terapia Sexual</h2>
                    <p className="text-justify pt-2 ">
                        A terapia sexual aborda questões relacionadas à sexualidade, proporcionando um ambiente acolhedor para discutir preocupações, medos e dificuldades.
                        Através de abordagens personalizadas, busco promover a compreensão e a satisfação na vida sexual dos indivíduos e casais.
                    </p>
                </div>



                <div className="container p-3 border-2 mb-2 rounded-3xl border-daniAzul shadow-md">
                    <div className="flex justify-center "><TimeIcon className=" text-daniAzul flex justify-center " /></div>
                    <h2 className="font-semibold text-daniAzul pt-2 text-center">Terapia de Sessão Única</h2>
                    <p className="text-justify pt-2">
                        A terapia de sessão única é uma opção eficaz para quem busca resolver questões específicas em um tempo reduzido.
                        Nessa abordagem, um único encontro pode trazer insights significativos e estratégias práticas para lidar com problemas pontuais,
                        oferecendo suporte imediato.
                    </p>
                </div>



                <div className="container p-3 border-2 mb-2 rounded-3xl  border-daniVermelho shadow-inner">
                    <div className="flex justify-center"><LectureIcon className=" text-daniVermelho flex justify-center " /></div>
                    <h2 className="font-semibold text-daniVermelho pt-2 text-center">Palestras</h2>
                    <p className="text-justify pt-2">Ministro palestras que abordam temas relevantes da psicologia, oferecendo informações valiosas e promovendo
                        a reflexão. Com conhecimento no assunto, busco inspirar e educar o público, promovendo o entendimento sobre saúde mental e
                        bem-estar emocional.</p>
                </div>

            </div>


        </>
    )
}

function CoupleIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="50"  // Ajuste a largura conforme necessário
            height="50" // Ajuste a altura conforme necessário
            viewBox="0 0 512 512"
            fill="currentColor"
            stroke="currentColor" // Mantém a cor do traço conforme o estilo
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <g>
                <g>
                    <g>
                        <path d="M143.891,239.572c53.747,0,97.472-43.725,97.473-97.472c0-53.747-43.727-97.472-97.473-97.472 S46.419,88.353,46.419,142.1S90.144,239.572,143.891,239.572z" />
                        <path d="M368.109,239.572c53.747,0,97.473-43.725,97.472-97.472c0-53.747-43.725-97.472-97.472-97.472 c-53.748,0-97.473,43.725-97.473,97.472S314.363,239.572,368.109,239.572z" />
                        <path d="M143.893,256.631C64.55,256.631,0,321.176,0,400.513v48.799c0,9.974,8.086,18.06,18.06,18.06h251.654 c9.974,0,18.06-8.086,18.06-18.06v-48.799C287.774,321.998,224.505,256.631,143.893,256.631z" />
                        <path d="M277.24,288.833c-2.528,2.072-2.881,5.8-0.865,8.373c41.185,52.534,35.478,103.328,35.478,152.106 c0,3.649-0.467,7.192-1.345,10.57c-0.986,3.796,1.906,7.49,5.827,7.49H493.94c9.974,0,18.06-8.086,18.06-18.06v-48.799 C512,278.181,369.275,213.415,277.24,288.833z" />
                    </g>
                </g>
            </g>
        </svg>
    );
}

function SexualityIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="50"
            height="50"
            viewBox="0 0 216 256"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <g>
                <circle cx="133.5" cy="125.6" r="18.8" fill="currentColor" />
                <path d="M213.3,151.6l-19.9-52.4c0,0-2.1-20.8-4-28.8C181.1,34.6,141.1,2,97.7,2c-29.3,0-57,13.5-75.1,36.5C-10,80.1-2.8,140.2,38.7,172.9V254h102v-27.1h15c20.8,0,37.7-16.9,37.7-37.7v-26.8h12.7c4.3,0,7.8-3.5,7.8-7.8C213.9,153.5,213.7,152.5,213.3,151.6z M81.6,128v14.2H66.5v15.5H52.2v-15.5H36.6V128l15.7,0.1v-23.5c-6.8-1.1-13.1-4.3-18-9.2c-12.7-12.7-12.6-33.2,0.1-45.8c12.7-12.7,33.2-12.7,45.9,0c3.9,3.9,6.6,8.6,8.1,13.7c5,17.2-4.8,35.2-22,40.3V128H81.6z M138.6,157.3c-17.5,2.8-33.9-8.9-36.7-26.4c-2.8-17.5,9-33.9,26.4-36.7l0.1-37.5l-14,14l-9.3-9.3L135,31.5l29.9,29.9l-9.3,9.3l-14.2-14.2v38.3C153.7,98,163,108,165,120.5C167.8,138,156.1,154.5,138.6,157.3z" fill="currentColor" />
                <path d="M70.2,59.6c-7.2-7-18.7-7.1-25.8,0c-7.1,7.1-7.1,18.7,0,25.8c7.1,7.1,18.7,7.1,25.8,0C77.4,78.3,77.4,66.7,70.2,59.6z" fill="currentColor" />
            </g>
        </svg>
    );
}

function PersonalIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="50"  // Ajuste a largura conforme necessário
            height="50" // Ajuste a altura conforme necessário
            fill="currentColor"
            stroke="currentColor" // Mantém a cor do traço conforme o estilo
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <g>
                <path d="M256,238.428c65.734,0,119.214-53.48,119.214-119.214S321.734,0,256,0c-65.735,0-119.214,53.48-119.214,119.214S190.265,238.428,256,238.428z" />
                <path d="M256,253.693c-97.918,0-177.58,79.662-177.58,177.58v61.375c0,10.687,8.664,19.351,19.351,19.351h316.458c10.687,0,19.351-8.664,19.351-19.351v-61.375C433.58,333.355,353.918,253.693,256,253.693z" />
            </g>
        </svg>
    );
}

function TimeIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 16 16"
            fill="currentColor"
        >
            <g fill="currentColor">
                <path d="M3.994 2c-1.258.015-2.179-.03-2.931.385a1.88 1.88 0 0 0-.838.998C.06 3.82 0 4.343 0 5v6c0 .658.06 1.179.225 1.617.164.439.461.79.838.998.752.416 1.673.37 2.931.385H12.006c1.258-.015 2.179.03 2.932-.385a1.88 1.88 0 0 0 .838-.998c.164-.438.224-.96.224-1.617V5c0-.658-.06-1.179-.225-1.617a1.88 1.88 0 0 0-.838-.998c-.752-.416-1.673-.37-2.931-.385H11v1h1c1.259.015 2.087.06 2.453.262.184.1.29.212.387.472.097.26.16.674.16 1.266v6c0 .592-.063 1.006-.16 1.266-.098.26-.203.371-.387.472-.366.202-1.194.247-2.453.262H4c-1.259-.015-2.09-.06-2.455-.262-.183-.1-.287-.212-.385-.472C1.063 12.006 1 11.592 1 11V5c0-.592.063-1.006.16-1.266.098-.26.202-.371.385-.472C1.91 3.06 2.74 3.015 4 3h2.5V2H3.998z" />
                <path d="M5 0l.001 5c.76-.348 1.535-.737 2.323-1.166A44.09 44.09 0 0 0 9.583 2.5c-.725-.449-1.478-.889-2.26-1.32A43.088 43.088 0 0 0 5 0z" />
                <path d="M6.117 6.247c.167-.07.34-.147.52-.234.184-.092.363-.19.536-.294a8.2 8.2 0 0 0 .494-.338c.161-.121.306-.248.433-.381H9v6H8V6.348c-.448.347-1.012.566-1.494.762z" />
            </g>
        </svg>
    );
}

function GroupIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 48 48"
            fill="currentColor"
        >
            <path d="M18 28C18 30.7625 15.7625 33 13 33C10.2375 33 8 30.7625 8 28C8 25.2375 10.2375 23 13 23C15.7625 23 18 25.2375 18 28Z" fill="currentColor" />
            <path d="M3 40.3333C3 36.7867 9.6625 35 13 35C16.3375 35 23 36.7867 23 40.3333V43H3V40.3333Z" fill="currentColor" />
            <path d="M40 28C40 30.7625 37.7625 33 35 33C32.2375 33 30 30.7625 30 28C30 25.2375 32.2375 23 35 23C37.7625 23 40 25.2375 40 28Z" fill="currentColor" />
            <path d="M28 27C28 29.21 26.21 31 24 31C21.79 31 20 29.21 20 27C20 24.79 21.79 23 24 23C26.21 23 28 24.79 28 27Z" fill="currentColor" />
            <path d="M25 40.3333C25 36.7867 31.6625 35 35 35C38.3375 35 45 36.7867 45 40.3333V43H25V40.3333Z" fill="currentColor" />
            <path fillRule="evenodd" clipRule="evenodd" d="M28.7508 34.185C28.4839 34.2831 28.2206 34.3873 27.9625 34.4975C26.7914 34.998 25.6088 35.6741 24.69 36.5785C24.444 36.8208 24.2105 37.0864 24 37.375C23.7895 37.0864 23.556 36.8208 23.3099 36.5785C22.3912 35.6741 21.2085 34.998 20.0374 34.4975C19.7794 34.3873 19.5161 34.2831 19.2491 34.185C20.7717 33.3961 22.7298 33 24 33C25.2701 33 27.2282 33.3961 28.7508 34.185Z" fill="currentColor" />
            <path fillRule="evenodd" clipRule="evenodd" d="M19.0938 18C24.3405 18 28.5938 14.6421 28.5938 10.5C28.5938 6.35786 24.3405 3 19.0938 3C13.8471 3 9.59381 6.35786 9.59381 10.5C9.59381 11.5062 9.84478 12.4661 10.3 13.3428C9.29455 14.5752 9.04829 16.4411 9.00043 17.6139C8.98301 18.0407 9.49835 18.259 9.84053 18.0033C10.5268 17.4904 11.6167 16.7948 13.0325 16.2753C14.6773 17.3525 16.7898 18 19.0938 18Z" fill="currentColor" />
            <path fillRule="evenodd" clipRule="evenodd" d="M26.3671 17.8655C28.9524 16.1235 30.6034 13.471 30.6034 10.5C30.6034 9.70071 30.4839 8.92447 30.2589 8.18281C30.849 8.06343 31.4669 8 32.1034 8C36.2455 8 39.6034 10.6863 39.6034 14C39.6034 14.9484 39.3284 15.8453 38.8386 16.6427C39.3011 17.4261 39.4655 18.4084 39.5189 19.1475C39.5496 19.5735 39.034 19.7969 38.6839 19.5521C38.2506 19.2491 37.6605 18.8929 36.9362 18.5885C35.6309 19.4692 33.9446 20 32.1034 20C29.8021 20 27.7428 19.1708 26.3671 17.8655Z" fill="currentColor" />
        </svg>
    );
}

function LectureIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 508.164 508.164"
            fill="currentColor"
        >
            <path d="M168.708,94.282c-4.488,24.276-20.672,44.404-42.5,54.4h27.404c23.46,0,45.152,13.668,55.284,34.816l38.76,94.86c7.48,16.116,5.848,38.012-15.572,48.348c-4.964,2.448-10.336,3.604-15.912,3.604c-14.144,0-27.812-8.024-33.252-19.448l-19.72-37.808v79.628h113.765v63.036l-92.005,37.399c-6.936,2.856-10.268,10.812-7.412,17.748c2.108,5.305,7.208,8.5,12.58,8.5c1.7,0,3.4-0.34,5.1-1.02l81.737-33.252v29.987c0,7.48,6.119,13.601,13.6,13.601s13.6-6.12,13.6-13.601v-30.124l81.805,32.708c7.004,2.788,14.891-0.611,17.68-7.548c2.787-7.004-0.613-14.892-7.549-17.68l-91.936-36.788v-62.968h149.6c18.768,0,34-15.232,34-34v-224.4H168.708z M435.199,291.482H278.801v-20.4h156.398V291.482z M435.199,230.282H258.4v-20.4h176.799V230.282z M435.199,169.082H231.2v-20.4h203.999V169.082z M508.164,53.21v0.544c0,14.872-12.057,26.928-26.928,26.928H170c0-21.44-9.119-40.746-23.623-54.4h334.859C496.107,26.282,508.164,38.338,508.164,53.21z M34,80.682c0-33.803,27.397-61.2,61.2-61.2s61.2,27.397,61.2,61.2s-27.397,61.2-61.2,61.2S34,114.485,34,80.682z M226.188,314.473c-12.036,5.813-26.669-0.401-31.008-9.493l-45.56-87.489L149.6,453.526c0,14.212-10.397,26.895-24.541,28.233c-16.225,1.53-29.859-11.172-29.859-27.077c0,15.905-13.634,28.614-29.859,27.07C51.197,480.414,40.8,467.731,40.8,453.526V311.882c0,11.642-9.69,20.964-21.461,20.372C8.303,331.697,0,321.817,0,310.76v-53.278v-47.6c0-26.289,21.312-47.6,47.6-47.6h106.046c18.347,0,35.061,10.54,42.956,27.098l38.577,94.458C239.523,292.937,240.951,307.346,226.188,314.473z M34,80.682c0-33.803,27.397-61.2,61.2-61.2s61.2,27.397,61.2,61.2s-27.397,61.2-61.2,61.2S34,114.485,34,80.682z M226.188,314.473c-12.036,5.813-26.669-0.401-31.008-9.493l-45.56-87.489L149.6,453.526c0,14.212-10.397,26.895-24.541,28.233c-16.225,1.53-29.859-11.172-29.859-27.077c0,15.905-13.634,28.614-29.859,27.07C51.197,480.414,40.8,467.731,40.8,453.526V311.882c0,11.642-9.69,20.964-21.461,20.372C8.303,331.697,0,321.817,0,310.76v-53.278v-47.6c0-26.289,21.312-47.6,47.6-47.6h106.046c18.347,0,35.061,10.54,42.956,27.098l38.577,94.458C239.523,292.937,240.951,307.346,226.188,314.473z" />
        </svg>
    );
}


export default Servico