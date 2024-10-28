import { Link } from "react-router-dom"
import psicologia from '../../assets/psicologia.png'

function Navbar() {
  return (
    <nav className="flex justify-between px-4  border-gray-200 bg-gradient-to-r from-blue-100 via-purple-50 to-pink-100">

      <div className="py-2.5 flex justify-between font-semibold ">
        <img src={psicologia} className="h-5 flex items-center mx-1"/><p className="hover:text-lg text-sm">Danielle Lins | Psicóloga</p></div>

      <div className="py-2.5  flex items-center justify-around  w-[50vh]">

        <div>
          <Link to={"/"} className="hover:text-daniVermelho font-semibold ">Home</Link>
        </div>
        <div>
          <Link to={"/contato" } className="hover:text-daniVermelho font-semibold">Contato</Link>
        </div>
        <div>
          <Link to={"/sobre"} className="hover:text-daniVermelho font-semibold">Sobre</Link>
        </div>


      </div>
    </nav>
  )
}

export default Navbar