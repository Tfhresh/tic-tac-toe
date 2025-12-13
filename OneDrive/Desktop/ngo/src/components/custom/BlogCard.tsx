import { cn } from "@/lib/utils";
import { MessageSquare, User } from "lucide-react";
import Image from "next/image"
import Link from "next/link";

interface props {
  src: string;
  linkCaption: string;
  title ?:string;
  titleClassName ?:string
}
const BlogCard = ({ src, linkCaption,title,titleClassName }: props) => {
  return (
    <>
      <div className="w-[33.3%]  relative">
        <Image src={src} alt="blog-pics" width={500} height={600} className="rounded-sm" />
        <div className={cn("text-white bg-red-500 w-1/2 m-auto text-center p-2 absolute top-0 left-1/2 -translate-x-1/2 rounded-br-sm rounded-bl-sm text-sm font-semibold",titleClassName)}>
         {title} 
        </div>
        <div className="rounded  w-[95%] m-auto -translate-y-4 bg-white space-y-2">
          <div className="flex justify-center items-center  gap-5  text-red-500 p-4 text-xs">
            <button
              className="cursor-pointer flex gap-1  font-medium  items-center"
              title="Posted by Admin">
              <User size={16} />
              <p >ADMIN</p>
            </button>
            <div className="flex gap-1 font-medium items-center  ">
              <MessageSquare size={16} />
              <p>COMMENTS</p>
            </div>
          </div>
          <div className=" mx-auto text-center whitespace-break-spaces">
            <Link
              href={""}
              className="cursor-pointer hover:text-red-500 text-[25px] font-bold transition-all duration-200 ">
              {linkCaption}
            </Link>
          </div>
          <p className="text-slate-400 text-center px-10">
            Cardiology is a medical specialty and a branch of internal medicine
          </p>
            <Link href={""} className="flex gap-2 items-center  justify-center">
              <div className="bg-red-500 text-white p-2 rounded-full flex items-center justify-center size-5 text-xs"> &gt;</div>
               <p className="hover:text-red-500 text-sm font-bold">Read More</p>
            </Link>
        </div>
      </div>
    </>

  )
}

export default BlogCard