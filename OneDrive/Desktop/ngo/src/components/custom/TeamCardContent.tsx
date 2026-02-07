import { FacebookIcon, InstagramIcon,  Twitter } from "lucide-react";
import Link from "next/link";


const TeamCardContent = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="z-99999 relative bg-white rounded-bl-sm rounded-br-sm pt-10 pb-8   text-center w-[calc(100%+33px)]">
      <div className=" w-1/2 mx-auto bg-red-500 -translate-y-10 text-white text-center uppercase font-semibold rounded-bl-md rounded-br-md  p-2.5  text-[13px]">
        {title}
      </div>
      <div className=" -mt-5 transition-all duration-200">
        <Link href={""} className="capitalize hover:text-red-500 text-2xl font-bold ">
          {description}
        </Link>
      </div>

      <div className="flex gap-5 justify-center mt-6">
        <Link href={""} className="rounded-full  transition-all duration-200 bg-gray-100 size-10 flex justify-center items-center hover:bg-red-500 ">
          <FacebookIcon size={16} />
        </Link>
        <Link href={""} className="rounded-full  transition-all duration-200 bg-gray-100 size-10 flex justify-center items-center hover:bg-red-500">
          <Twitter size={16} />
        </Link>
        <Link href={""} className="rounded-full  transition-all duration-200 bg-gray-100 size-10 flex justify-center items-center hover:bg-red-500">
          <InstagramIcon size={16} />
        </Link>
      </div>
    </div>
  )
}

export default TeamCardContent