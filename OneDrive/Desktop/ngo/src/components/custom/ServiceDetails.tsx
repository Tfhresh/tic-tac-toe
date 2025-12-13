import { cn } from '@/lib/utils';
import { CircleCheckIcon } from 'lucide-react'
import React from 'react'

type props = {
  title: string;
  description: string;
  size?: number;
  className?: string;
  descriptClassName?: string
  titleClassName?: string
  iconClassName?: string;
}
const ServiceDetails = ({ title, description, className, descriptClassName, titleClassName, iconClassName }: props) => {
  return (
    <div className={cn("flex gap-4", className)}>
      <CircleCheckIcon className={iconClassName} stroke="red" />
      <div>
        <h2 className={cn("font-bold text-xl", titleClassName)}>{title}</h2>
        <div className={cn("text-slate-400 ", descriptClassName)}>{description}</div>
      </div>
    </div>
  )
}

export default ServiceDetails