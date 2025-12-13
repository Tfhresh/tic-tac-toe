"use client";
import { useDrawer } from "@/hooks/useDrawer";
import { cn } from "@/lib/utils";
import { ChevronDown, House, Menu, Search, ShoppingBasket, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";


const homepageLinks = [
  {
    id: 1,
    title: "Home",
    link: "/"
  },
  {
    id: 2,
    title: "About",
    link: "/about"
  },
  {
    id: 3,
    title: "Services",
    link: ""
  },
  {
    id: 4,
    title: "Projects",
    link: "/project"
  },
  {
    id: 5,
    title: "Blog",
    link: ""
  },
  {
    id: 6,
    title: "Contact Us",
    link: "/contact-us"
  },
];

const NavBar = () => {
  const { isOpened, handleOpening } = useDrawer();
  const [isActive, setIsActive] = useState(false);

  useEffect(()=> {
    document.addEventListener("scroll", function() {
      setIsActive(document.documentElement.scrollTop <= 100);
    });
  }, []);

  return (
    <nav className={cn("z-999999 xl:rounded  py-4 px-7 bg-white sm:m-0 transition-all duration-500", !isActive ? "fixed top-0 left-0 right-0" : "xl:mx-10 mt-2")}>
      <div className="lg:flex gap-5 relative hidden ">
        <div className="h-[50px] flex gap-26">
          <Image src="/logo.png" alt="AppLogo" width={200} height={200} />
          <ul className="h-full flex gap-9 text-[17px] font-semibold ">
            {homepageLinks.map(el => <li key={el.id} className="h-full hover:text-red-400 ease-in transition-all duration-200 ">
              <Link href={el.link} className="flex items-center justify-center h-full">
                {el.title}
              </Link>
            </li>)}
            {/* {JSON.stringify(homepageLinks)} */}
          </ul>
        </div>

        <div className="md:hidden flex gap-4 v ">
          <div className="border-r-2 h-full justify-center flex items-center px-4 ">
            <ShoppingBasket size={18} />
          </div>
          <div className="flex justify-center items-center">
            <Search size={18} strokeWidth={4} />
          </div>
        </div>
        <div className="absolute rounded-full size-10 top-1/2 -translate-y-1/2 right-40 border-4 bg-black text-white  z-10  ">
          <div className="justify-center flex items-center h-full ">
            <House size={12} className="cursor-pointer" />
          </div>
        </div>
        <div className="bg-red-500 font-semibold h-[calc(100%+32px)] absolute w-[205px] -top-4 -right-7   rounded-tr  rounded-br  ">
          <h4 className="flex justify-center items-center my-7 text-white font-semibold text-sm">Make appointment</h4>
        </div>
      </div>

      <div className="flex items-center justify-between m-0 fixed top-0 bg-white w-full left-0 lg:hidden">
        <div className="h-[50px]">
          <Image src="/logo.png" alt="AppLogo" width={200} height={200} />
        </div>

        <div className={cn(isOpened ? "bg-[rgba(0,0,0,1)] text-white w-[280px] fixed top-0 right-0 bottom-0 transition-all duration-200 py-5  px-4" : "bg-white text-slate-400 transition-all duration-200   ")}>
          <div className="flex gap-6  ">
            <Search className={cn("translate-y-8.5 text-black hover:cursor-pointer hover:text-red-500",isOpened?"hidden" :"block")} size={17} strokeWidth={2}  />
            <button
              onClick={handleOpening}
              className={cn("sm:block  xl:hidden",)}>
              {isOpened ? <X size={34} className="translate-x-[217px]" /> :
                <Menu size={36} className="translate-y-6.5" />}
            </button>
          </div>

          <ul className="mt-10 group">
            {homepageLinks.map(el => <li key={el.id} className={cn("py-3 px-0 border-b border-slate-200/30 capitalize font-semibold group-hover:cursor-pointer", isOpened ? "block" : "hidden")}>
              <div className="flex  justify-between  ">
                <Link href={el.link}> {el.title}</Link>
                <ChevronDown />
              </div>
            </li>)}
          </ul>
        </div>

      </div>

    </nav>
  )
}

export default NavBar