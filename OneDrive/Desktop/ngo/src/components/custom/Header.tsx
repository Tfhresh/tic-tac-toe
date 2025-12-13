import { ArrowRight, FacebookIcon, Linkedin,  Phone, Twitter,  Youtube } from "lucide-react"
import Link from "next/link"

const Header = () => {
  return (
    <div className="lg:flex justify-between px-10 py-6 text-sm font-semibold  text-white 
    hidden">
      <div className="flex gap-1.5 items-center">
        <p>Book online</p>
        <ArrowRight size={18} strokeWidth={2} stroke="red" />
        <p>You can request appointment in 24 hours</p>
      </div>
      <div className="flex gap-5 ">
        <div className="flex gap-1.5 items-center">
          <Phone size={16} />
          <p>Phone :(+00)888.666.88</p>
        </div>
        <ul className="flex gap-5 ">
          <li>
            <Link href={""} className="cursor-pointer">
            <FacebookIcon  size={16} fill="black" className=" rounded" strokeWidth={1}/>
            </Link>
            </li>
          <li>
            <Link href={""} className="cursor-pointer">
            <Twitter  size={16}/>
            </Link>
            </li>
          <li> <Link href={""} className="cursor-pointer"><Linkedin size={16} /></Link></li>
          <li>
            <Link href={""} className="cursor-pointer ">
            <Youtube size={16} fill="white" strokeWidth={1} />
            </Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Header