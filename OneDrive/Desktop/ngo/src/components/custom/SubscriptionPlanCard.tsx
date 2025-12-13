import { cn } from "@/lib/utils";
import { Check, } from "lucide-react";
import { Button } from "../ui/button";

type props = {
  title: string;
  icon: React.ReactNode;
  className?: string
  iconClassName?: string;
  titleClassName?: string;
  priceClassName?: string;
  lineClassName?: string;
  subServiceClassName ?: string
}
const SubscriptionPlanCard = ({
  title,
  icon,
  className,
  iconClassName,
  titleClassName,
  priceClassName,
  lineClassName,
  subServiceClassName,
}: props) => {
  const subscriptionServices = [
    {
      icon: Check,
      title: "Medical Specialties"
    },
    {
      icon: Check,
      title: "Investigation"
    },
    {
      icon: Check,
      title: "Medical Consultation"
    },
    {
      icon: Check,
      title: "Home Visits"
    },
    {
      icon: Check,
      title: "Treatments"
    },
  ]
  return (
    <div className={cn("rounded-lg bg-white pl-8 overflow-hidden", className)}>
      <div className="flex  items-center">
        <div className={cn("flex-1 text-2xl font-bold", titleClassName)}>{title}</div>
        <div className={cn("bg-red-500 text-white p-4 rounded-bl-full pl-8 pb-8 ", iconClassName)}>
          {icon}
        </div>
      </div>
      <p className={cn("text-lg text-red-500 flex items-center ", priceClassName)}>
        <sup className="font-medium">$</sup> <span className="font-extrabold text-4xl">199</span> <sub className="text-sm">/month</sub>
      </p>
      <div className={cn("border border-slate-400 mr-8 my-10 ", lineClassName)} />
      <ul className="space-y-4 ">
       {subscriptionServices.map((el,i)=>{
      return <li key={i} className={cn("flex gap-2 items-center text-slate-400 ",subServiceClassName)}>
        {<el.icon className="text-black"/>}
        {el.title}
      </li>
       })}
      </ul>
      <div className="m-auto py-10 ">
 <Button className="w-[90%] p-7 cursor-pointer hover:text-red-400 duration-200 transition-all text-xs font-semibold hover:bg-black" >BUY NOW</Button>
      </div>
     
    </div>
  )
}

export default SubscriptionPlanCard