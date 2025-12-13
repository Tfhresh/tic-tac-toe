import { cn } from "@/lib/utils";
import { FacebookIcon, InstagramIcon, Link, Twitter } from "lucide-react";
import Image from "next/image"

 type props = {
  src:string;
  imgClassName ?:string; 
  title?:string;
  description ?: string
  descriptionClassName?:string;
  titleClassName?:string;
  imgContentClassName?:string
 }
const TeamCard = ({
  src,
  imgClassName,
  title,
  description,
  descriptionClassName,
  titleClassName,
  imgContentClassName
}:props) => {
  return (
    <div className="relative">
      <Image 
      src={src} 
      objectFit="cover"
      objectPosition="center"
      width={400} 
      height={300} 
      alt="team image" 
      className={imgClassName}/>
      <div className={cn("",imgContentClassName)}>
       <p className={cn("text-2xl font-semibold",titleClassName)}>{title}</p>
       <p className={cn("text-red-500",descriptionClassName)}> {description}</p> 
      </div>
      
    </div>
  )
}

export default TeamCard