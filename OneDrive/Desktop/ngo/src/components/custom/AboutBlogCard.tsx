import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface props {
  src: string;
  linkCaption: string;
  title?: React.ReactNode;
  titleClassName?: string;
  linkTitle?: string
}
const AboutBlogCard = ({ src, linkCaption, title, titleClassName, linkTitle }: props) => {
  return (
    <div className="translate-y-0 hover:-translate-y-4 transition-all duration-500 flex-1 max-md:w-full relative  rounded-xl border lg:p-6 p-3 bg-white ">
      <div className="relative md:w-[500px] w-full h-[600px]">
<Image src={src} alt="blog-pics" fill className="rounded-xl" />
      </div>
      <div className={cn("size-16 rounded-md text-center   bg-red-500 absolute bottom-38 right-12 text-white  ", titleClassName)}>{title}</div>
      <div className="mt-7 uppercase text-gray-400 text-sm font-medium tracking-wide">
        <Link href={""} className="text-center block">{linkTitle}</Link>
      </div>

      <div className=" lg:mx-auto text-center  whitespace-break-spaces">
        <Link
          href={""}
          className="cursor-pointer hover:text-red-500 lg:text-[25px] text-sm font-bold transition-all duration-200 ">
          {linkCaption}
        </Link>
        
          <Link href={""} className="flex mt-3 gap-2 justify-center items-center">
            <div className="bg-red-500 text-white rounded-full flex items-center justify-center size-5"><ChevronRight size={14} /></div>
            <p className="hover:text-red-500 lg:text-sm text-xs font-semibold">Read More</p>
          </Link>
      </div>
    </div>
  )
}

export default AboutBlogCard