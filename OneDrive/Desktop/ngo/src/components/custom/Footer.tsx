"use client"
import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image"
// import TreatmentOffer from "./TreatmentOffer"
import { ChevronRight, ChevronUp, FacebookIcon, Linkedin, LocateIcon, Phone, Twitter, Youtube } from "lucide-react"
import { useState } from "react"


const INFORMATION_LINK = [
  {
    text: "About Us",
    link: ""
  },
  {
    text: "Service",
    link: ""
  },
  {
    text: "Best Seller",
    link: ""
  },
  {
    text: "Privacy Policy",
    link: ""
  },
  {
    text: "Expert Tips",
    link: ""
  },
  {
    text: "Customers",
    link: ""
  },
  {
    text: "Collections",
    link: ""
  },
  {
    text: "Career",
    link: ""
  },
  {
    text: "Change Location",
    link: ""
  },
];

const latestNews = [
  {
    title: "is running really good for the heart?",
    img: "/blog1.jpg",
    description: "August 27,2020"
  },
  {
    title: "Modeling data increase to endovascular therapy",
    img: "/blog1.jpg",
    description: "August 27,2020"
  }
]

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // const toggleVisibility = () => {
  //   if (window.pageYOffset > 300) {
  //     setIsVisible(true)
  //   }
  //   else {
  //     setIsVisible(false)
  //   }
  // }
  const scrollToTop = () => {
    // setIsAnimating(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  // setTimeout(() => {
  //   setIsAnimating(false);
  //   setIsVisible(false)
  // }, 500)

  // useEffect(() => {
  //   window.addEventListener("scroll", toggleVisibility)
  //   return () => {
  //     window.removeEventListener("scroll", toggleVisibility)
  //   }
  // }, [])
  return (
    <>
      <div className="bg-slate-100 px-10 ">
        <div className="border-b-2">
          <div className="flex items-center gap-8 ">
            <div className="py-2  px-4 my-7 border-r border-slate-300">
              <Image src="/logo.png" alt="AppLogo" width={200} height={200} />
            </div>
            <div className="flex px-4 my-7 py-2 gap-2.5 items-center">
              <div className="size-15  rounded-full bg-red-500 text-white flex items-center justify-center">
                <LocateIcon size={25} />
              </div>
              <div className="leading-7">
                <p className="font-bold text-xl">Our Clinic Address</p>
                <p className=" font-medium">456, Lorem Street, USA</p>
              </div>
            </div>
            <div className="flex px-4 py-2 gap-2.5 items-center">
              <div className="size-15  rounded-full bg-red-500 text-white flex items-center justify-center">
                <Phone size={25} />
              </div>
              <div className="leading-7 text-center">
                <p className="font-bold text-xl">Phone Number</p>
                <p className=" font-medium">(+00)888.666.88</p>
              </div>
            </div>
            <div className=" ml-auto">
              <ul className="flex gap-7 items-center justify-center  ">
                <li className="cursor-pointer bg-white p-3 rounded-full hover:bg-red-500 hover:text-white ">
                  <Link href={""} >
                    <FacebookIcon size={16} fill="black " />
                  </Link>
                </li>
                <li className="cursor-pointer bg-white p-3 rounded-full hover:bg-red-500 hover:text-white ">
                  <Link href={""} className="cursor-pointer">
                    <Twitter size={16} fill="black" />
                  </Link>
                </li>
                <li className="cursor-pointer bg-white p-3 rounded-full hover:bg-red-500 hover:text-white ">
                  <Link href={""} className="cursor-pointer">
                    <Linkedin size={16} fill="black" />
                  </Link>
                </li>
                <li className="cursor-pointer bg-white p-3 rounded-full hover:bg-red-500 hover:text-white ">
                  <Link href={""} className="cursor-pointer ">
                    <Youtube size={16} fill="black" strokeWidth={1} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-10 flex mx-auto px-4 gap-5 ">
          <div className="w-[300px]">
            <div className="text-2xl font-semibold">Information</div>
            <div className="flex flex-wrap gap-2 leading-8 font-medium mt-4">
              {INFORMATION_LINK.map(el => <Link key={el.text} href={el.link} className="w-[calc((100%-8px)/2)] flex items-center gap-3  hover:text-red-500 text-sm">
                <ChevronRight size={16} />
                {el.text}
              </Link>)}
            </div>
          </div>
          <div className="" >
            <div className="text-2xl font-semibold mb-4 ">Latest News</div>
            {latestNews.map(el => <div key={el.title} className="flex justify-center gap-2 ">
              <Image src={el.img} alt="news-image" width={40} height={40} className="rounded-full object-cover object-fit" />
              <div>
                <div className="text-base capitalize tracking-wide">{el.title}</div>
                <p>{el.description}</p>
              </div>
            </div>)}
          </div>
          <div className="w-[25%]">
            <div className="text-2xl font-semibold mb-4  ">Newsletter</div>
            <p className="whitespace-break-spaces ">Sign up today for hints, tips and the latest product news</p>
            <input type="text" placeholder="Your email address" className="rounded p-4 pr-7 mt-4 border-none outline-none placeholder:text-slate-400 placeholder:text-[17px] bg-white " />
            <Button className="text-white hover:bg-red-500 py-6 px-8 text-[13px] font-semibold transition-all duration-500 cursor-pointer text-center mt-4">SUBMIT</Button>
          </div>
          <div className="w-[25%]">
            <div className="text-2xl font-semibold mb-4 ">Opening Hours</div>
            <div className="flex  gap-2 leading-10  ">
              <div className="w-full font-medium">
                <p>Mon - Tue</p>
                <p>Wed - Thur</p>
                <p>Fri - Sat</p>
                <p>Saturday</p>
                <p>Sunday</p>
              </div>
              <div className="w-full text-red-500 font-semibold text-right">
                <p>10:00 - 18:00</p>
                <p>10:00 – 17:00</p>
                <p>10:00 - 12:30</p>
                <p>10:00 - 12:30</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-500 text-white flex p-10 px-12 items-center text-sm font-medium">
        <div>Copyright © 2025 Cardioly Demo3, All Rights Reserved.</div>
        <div className="ml-auto flex justify-center items-center gap-5">
          <Link href={""}>FAQ</Link>
          <Link href={""}>About Us </Link>
          <Link href={""}>Contact Us</Link>
        </div>
      </div>
      <div
        onClick={scrollToTop}
        className="size-10 bg-red-500 rounded-full text-white flex items-center justify-center fixed bottom-2.5 right-4.5 cursor-pointer hover:bg-black outline-3 outline-white  ">
        <ChevronUp size={28} />
      </div>
    </>
  )
}

export default Footer