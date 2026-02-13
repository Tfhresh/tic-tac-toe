import { cn } from "@/lib/utils";
import { FacebookIcon, InstagramIcon, Link, Twitter } from "lucide-react";
import Image from "next/image"

type props = {
  src: string;
  imgClassName?: string;
  title?: string;
  description?: string
  descriptionClassName?: string;
  titleClassName?: string;
  imgContentClassName?: string;
  className?: string;
}
const TeamCard = ({
  src,
  imgClassName,
  title,
  description,
  descriptionClassName,
  titleClassName,
  imgContentClassName,
  className
}: props) => {
  return (
    <div className={cn("flex-1 max-sm:w-full pb-10 relative z-[99999] shadow bg-white rounded-sm", className)}>
      <div className="relative h-[300px]">
        <Image
          src={src}
          objectFit="cover"
          objectPosition="center"
          fill
          alt="team image"
          className={cn("", imgClassName)} />
      </div>
        <div className="relative mx-auto bg-red-500 text-white text-center uppercase font-semibold rounded-md  p-2.5  text-[13px] w-fit -mt-5 z-40">
          {title}
        </div>
        <p className={cn("text-red-500 text-center text-lg mt-4", descriptionClassName)}> {description}</p>
    </div>
  )
}

export default TeamCard