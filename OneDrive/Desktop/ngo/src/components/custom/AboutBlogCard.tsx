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
    <div className="translate-y-0 hover:-translate-y-4 transition-all duration-500 w-[33.3%] relative  rounded-xl border p-6 bg-white ">
      <Image src={src} alt="blog-pics" width={500} height={600} className="rounded-xl" />
      <div className={cn("size-16 rounded-md text-center   bg-red-500 absolute bottom-38 right-12 text-white  ", titleClassName)}>{title}</div>
      <div className="mt-7 uppercase text-gray-400 text-sm font-medium tracking-wide">
        <Link href={""}>{linkTitle}</Link>
      </div>

      <div className=" mx-auto  whitespace-break-spaces">
        <Link
          href={""}
          className="cursor-pointer hover:text-red-500 text-[25px] font-bold transition-all duration-200 ">
          {linkCaption}
        </Link>
        
          <Link href={""} className="flex gap-2 items-center">
            <div className="bg-red-500 text-white rounded-full flex items-center justify-center size-5"><ChevronRight size={14} /></div>
            <p className="hover:text-red-500 text-sm font-semibold">Read More</p>
          </Link>
      </div>
    </div>
  )
}

export default AboutBlogCard