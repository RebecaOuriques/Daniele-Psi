import { Link } from "react-router-dom"
import psicologia from '../../assets/psicologia.png'

function Navbar() {
  return (
    <nav className="flex justify-between px-4  border-gray-200 bg-daniAzul text-white ">

      <div className="py-2.5 flex justify-between font-semibold hover:scale-105 transition-transform duration-400 ">
        <img src={psicologia} className="h-5 flex items-center mx-1 hover:text-base"/><p className="text-sm hidden md:none-hidden">Danielle Lins | Psicóloga</p></div>

      <div className="py-2.5  flex items-center justify-around  w-[50vh] transition-transform duration-400">

        <div>
          <Link to={"/"} className="hover:text-daniVermelho font-semibold text-sm">Home</Link>
        </div>
        <div>
          <Link to={"/contato" } className="hover:text-daniVermelho font-semibold text-sm">Contato</Link>
        </div>
        <div>
          <Link to={"/sobre"} className="hover:text-daniVermelho font-semibold text-sm">Sobre</Link>
        </div>
        <div>
          <Link to={"/servico"} className="hover:text-daniVermelho font-semibold text-sm">Servico</Link>
        </div>


      </div>
    </nav>
  )
}

export default Navbar