import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import Image from "next/image";

interface props {
  img: string;
  title: string;
  description: string
  className?: string;
  imgClassName?: string
};

const Card = ({ img, title, description, className, imgClassName }: props) => {
  return (
    <div className={cn("relative group", className)}>
      <div className="w-full h-[250px] relative rounded-lg">
        <Image src={img} fill alt={"service image"} className={cn("rounded-lg", imgClassName)} />


        <div className="absolute right-6 -bottom-7 rounded-full md:size-18 size-14 bg-red-500 flex justify-center items-center group-hover:bg-white text-white group-hover:text-red-500 transition-all duration-500">
        <Heart />
      </div>
      </div>
      <p className="text-red-500 uppercase mt-4 md:text-sm text-xs font-medium">
        {title}
      </p>
      <p className="capitalize md:text-[22px] text-xl font-bold">{description}</p>
    </div>
  )
}

export default Card