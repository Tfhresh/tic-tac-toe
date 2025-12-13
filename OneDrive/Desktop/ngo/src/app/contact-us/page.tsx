
import PageHeader from "@/components/custom/PageHeader"
import { Button } from "@/components/ui/button"
import { FacebookIcon, Linkedin, Phone, Twitter, Youtube } from "lucide-react"

import Link from "next/link"


const page = () => {
  return (
    <div className="min-h-screen pt-4">
     <PageHeader className="pb-120" />
      <div className="px-10  relative w-full  bg-white">
        <div className="-translate-y-24 z-10 flex justify-center  ">
          <div className="bg-slate-100 w-[40%] text-center py-15  ">
            <div className="text-4xl  mt-10 mb-4">Get In Touch</div>
            <div className="flex gap-5 justify-center items-center">
              <Phone fill="red" stroke="red" />
              <p className="text-2xl font-bold">Phone Number</p>
            </div>
            <div>
              <p>+1 888-654-4329</p>
              <p>+1 888-543-8765</p>
            </div>
            <div className="flex gap-5 justify-center items-center mt-4">
              <Phone fill="red" stroke="red" />
              <p className="text-2xl font-bold">Our Location</p>
            </div>
            <div>
              <p>+1 888-654-4329</p>
              <p>+1 888-543-8765</p>
            </div>
            <div className="flex gap-5 justify-center items-center mt-4">
              <Phone fill="red" stroke="red" />
              <p className="text-2xl font-bold">Phone Number</p>
            </div>
            <div>
              <p>+1 888-654-4329</p>
              <p>+1 888-543-8765</p>
            </div>
              <ul className="flex gap-5 items-center justify-center relative  mt-5 ">
                    <li className="cursor-pointer bg-red-500 p-4.5 rounded-full text-white hover:bg-black hover:text-white ">
                      <Link href={""} >
                        <FacebookIcon  size={16} fill="black " />
                      </Link>
                    </li>
                    <li className="cursor-pointer  bg-red-500 p-4.5 rounded-full text-white hover:bg-black hover:text-white ">
                      <Link href={""} className="cursor-pointer">
                        <Twitter size={16} fill="black" />
                      </Link>
                    </li>
                    <li className="cursor-pointer  bg-red-500 p-4.5 rounded-full text-white hover:bg-black hover:text-white ">
                      <Link href={""} className="cursor-pointer">
                        <Linkedin size={16} fill="black" />
                      </Link>
                    </li>
                    <li className="cursor-pointer  bg-red-500 text-white p-4.5 rounded-full hover:bg-black hover:text-white ">
                      <Link href={""} className="cursor-pointer ">
                        <Youtube size={16} fill="black" strokeWidth={1} />
                      </Link>
                    </li>
                  </ul>
          </div>
          <div className="bg-black w-[60%] p-15">
            <div className="text-4xl text-white font-bold mt-10 leading-10 ">Contact Us</div>
            <p className="text-slate-500 font-medium">
              Feel Free to Contact us any time. We will get back to you as soon as we can!
            </p>
            <form >
              <div className="flex gap-9 mt-4 text-lg">
                <div className="flex-1  space-y-4">
                  <div className="bg-white p-4 rounded-sm">
                    <input type="text" placeholder=" Name" className="outline-none border-none w-full " />
                  </div>
                  <div className="bg-white p-4 rounded-sm">
                    <input type="text" placeholder="Phone" className="outline-none border-none w-full  " />
                  </div>
                </div>
                <div className="flex-1  space-y-4">
                  <div className="bg-white p-4 rounded-sm">
                    <input type="text" placeholder=" Email" className="outline-none border-none w-full " />
                  </div>
                  <div className="bg-white p-4 rounded-sm">
                    <input type="text" placeholder="Subject" className="outline-none border-none w-full " />
                  </div>
                </div>
              </div>
              <textarea
                className="resize-none  rounded-sm pb-8 pt-2 text-slate-500 bg-white w-full font-medium px-4 mt-4" placeholder="message"> 
                </textarea>
                <Button className="bg-red-500 mt-4 text-white px-10 py-7 font-medium text-sm hover:bg-red-500 hover:text-black transition-all duration-500 cursor-pointer">SEND MESSAGE</Button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default page