"use client"
import PageHeader from '@/components/custom/PageHeader'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


const ProjectDetails = [
  {
    id: 1,
    img: "/serviceImg1.jpg",
    jobTitle: "DOCTORS",
    description: "Heart Failure Management"
  },
  {
    id: 2,
    img: "/serviceImg1.jpg",
    jobTitle: "HEALTHCARE",
    description: "Blood Pressure Monitoring"
  },
  {
    id: 3,
    img: "/serviceImg1.jpg",
    jobTitle: "Monitors",
    description: "24/7 Monitoring and Care"
  },
  {
    id: 4,
    img: "/serviceImg1.jpg",
    jobTitle: "ASSISTANCE",
    description: "Optimization Of Therapy"
  },
  {
    id: 5,
    img: "/serviceImg1.jpg",
    jobTitle: "TREATMENT",
    description: "Valve Implantation"
  },
  {
    id: 6,
    img: "/serviceImg1.jpg",
    jobTitle: "SAVING LIVES",
    description: "Children's Health Surgery"
  },
  {
    id: 7,
    img: "/serviceImg1.jpg",
    jobTitle: "HEALTHCARE",
    description: "Latest Equipment Surgery"
  },
  {
    id: 8,
    img: "/serviceImg1.jpg",
    jobTitle: "TREATMENT",
    description: "Heart Transplant Carefully"
  },
  {
    id: 9,
    img: "/serviceImg1.jpg",
    jobTitle: "DOCTORS",
    description: "Recognized Cardiologists"
  },
]
const page = () => {
  return (
    <div className='min-h-screen pt-4'>
      <PageHeader
        titleContent={<div className={cn('px-10 text-white space-y-2.5 relative py-38',)}>
          <div className='text-4xl font-bold  '>Project Style 1</div>
          <Link href={""} className='text-red-500 text-sm font-medium'>CARDIOLY</Link><span className='uppercase text-sm font-medium'> - Project Style 1</span>
        </div>} />
      <div className='max-w-[1200px] grid md:grid-cols-3 md:grid-rows-3 grid-cols-1 grid-rows-9  md:w-full  mx-auto my-25 gap-8 px-7 relative'>
     {ProjectDetails.map(el =><div key={el.id} className='relative group overflow-hidden w-full' >
      <Image src={el.img} alt='project-image' width={400} height={200} className='rounded-md '/>
       <Plus 
       size={25}
       strokeWidth={3}
       className='ml-auto text-white z-10 absolute top-5 right-1 invisible group-hover:right-5 transition-all duration-500 group-hover:visible '/>
      <div className={cn('flex-col absolute top-0 bottom-0 -left-12 w-0  bg-red-400 rounded-sm  group-hover:left-0 group-hover:w-[400px] transition-all ease-in-out  duration-700 text-white  ')}>
        <div className='mt-55 pl-4.5 whitespace-nowrap invisible group-hover:visible  transition-all duration-500'>
          <p className='text-sm font-semibold'>{el.jobTitle}</p>
          <p className='text-2xl font-bold'>{el.description}</p>
        </div>
      </div>
     </div>)}
      </div>
    </div>
  )
}

export default page