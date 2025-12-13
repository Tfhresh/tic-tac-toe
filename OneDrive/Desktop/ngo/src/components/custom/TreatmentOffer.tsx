import { cn } from "@/lib/utils";

interface props {
title : string | React.ReactNode;
icon?: React.ReactNode;
 description: string| React.ReactNode;
 titleClassName?: string;
 descriptionClassName ?: string;
 iconClassName ?:string
}
const TreatmentOffer = ({ title,
   icon,description 
   ,titleClassName,
   descriptionClassName,
   iconClassName
  }:props) => {
  return (
    <div className={"flex gap-5 items-center "}>
      <div className={cn("rounded-full flex items-center justify-center bg-red-500 text-white p-7",iconClassName)}>
        {icon}
      </div>
      <div >
      <div className={cn("font-semibold text-2xl",titleClassName)}>{title}</div>  
        <p className={cn(" font-semibold text-slate-400",descriptionClassName)}>{description}</p>
      </div>
    </div>
  )
}

export default TreatmentOffer