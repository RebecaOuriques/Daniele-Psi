import { Link } from "react-router-dom"
import instagram from '../../assets/instagram.png'
//import WhatsAppButton from "../whatsapp/Whatsapp"
import whatsapp from '../../assets/whatsapp.png'


function Footer() {


  return (

    <>
      <div className="bg-gradient-to-r from-blue-100 via-purple-50 to-pink-100 min-h-[10vh] flex justify-center p-2"><Link to={'https://www.instagram.com/psi.daniellelins/'}>
        <img src={instagram} alt="" className="w-8" />
      </Link>
        <img src={whatsapp} alt="" className="w-8" />
      </div>

    </>
  )
}

export default Footer
