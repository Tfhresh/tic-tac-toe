"use client"
import PageHeader from "@/components/custom/PageHeader"
import TeamCard from "@/components/custom/TeamCard"

import { cn } from "@/lib/utils"
import { FacebookIcon, InstagramIcon, Twitter } from "lucide-react"
import Link from "next/link"


const page = () => {
  const spiltImages = [
    {
      id: 1,
      src: "/teamImg1.jpg",
      title: "Dr. anna willey",
      description: " Cardiologist",
      linkIcon1: <FacebookIcon size={21} />,
      linkIcon2: <Twitter size={21} />,
      linkIcon3: <InstagramIcon size={21} />
    },
    {
      id: 2,
      src: "/teamImg1.jpg",
      title: "Cardiologist",
      description: "Dr. anna willey",
      linkIcon1: <FacebookIcon size={21} />,
      linkIcon2: <Twitter size={21} />,
      linkIcon3: <InstagramIcon size={21} />
    },
    {
      id: 3,
      src: "/teamImg1.jpg",
      title: "Cardiologist",
      description: "Dr. anna willey",
      linkIcon1: <FacebookIcon size={21} />,
      linkIcon2: <Twitter size={21} />,
      linkIcon3: <InstagramIcon size={21} />

    },
    {
      id: 4,
      src: "/teamImg1.jpg",
      title: "Cardiologist",
      description: "Dr. anna willey",
      linkIcon1: <FacebookIcon size={21} />,
      linkIcon2: <Twitter size={21} />,
      linkIcon3: <InstagramIcon size={21} />
    },
    {
      id: 5,
      src: "/teamImg1.jpg",
      title: "Cardiologist",
      description: "Dr. anna willey",
      linkIcon1: <FacebookIcon size={21} />,
      linkIcon2: <Twitter size={21} />,
      linkIcon3: <InstagramIcon size={21} />
    },
    {
      id: 6,
      src: "/teamImg1.jpg",
      title: "Cardiologist",
      description: "Dr. anna willey",
      linkIcon1: <FacebookIcon size={21} />,
      linkIcon2: <Twitter size={21} />,
      linkIcon3: <InstagramIcon size={21} />
    },
  ]
  const hover = " relative"
  return (
    <div className="min-h-screen pt-4">
      <PageHeader
        titleContent={<div className={cn('px-10 text-white space-y-2.5 relative py-38')}>
          <div className='text-4xl font-bold  '>Our Team Member</div>
          <Link href={""} className=' text-sm font-semibold '>CARDIOLY </Link><span className='uppercase text-sm font-medium'>- Our Team Member</span>
        </div>} />
      {/* <div className={cn("max-w-[1200px] w-full p-4 my-10 grid mx-auto    grid-cols-3  grid-rows-2 gap-8 ", hover)}>
        {spiltImages.map(el =>
          <div key={el.id} className="relative overflow-hidden group">
            <TeamCard
              title={el.title}
              description={el.description}
              src={el.src}
              imgContentClassName="text-center my-4 relative"
              imgClassName=" rounded-sm object-cover"
            />
            <div className={cn("rounded-r-sm absolute top-0 -right-20 group-hover:right-0 bg-red-500 py-26 px-5 space-y-4  flex justify-center items-center flex-col text-white transition-all duration-500 ")}>
              <Link href={""} >
                {el.linkIcon1}
              </Link>
              <Link href={""}>
                {el.linkIcon2}
              </Link>
              <Link href={""}>
                {el.linkIcon3}
              </Link>
            </div>
          </div>
        )
        }
      </div> */}
      <div className="py-20 relative md:px-12 px-6 flex flex-wrap max-sm:flex-col gap-8 justify-center items-center bg-transparent">
          <TeamCard
            src="/teamImg1.jpg"
            title="Cardiologist" description="Dr. anna willey"
            // className="flex-0"
            className="w-[350px]!"
          />
          <TeamCard
            src="/teamImg2.jpg"
            title="Assistant Surgeon" description="Dr. edward berry"
            // className="flex-0"
            className="w-[350px]!"
          />
            <TeamCard 
            src="/teamImg3.jpg"  
            title="Medical Specialist" description="Dr. eliza william"
            // className="flex-0"
            className="w-[350px]!"
            />
        </div>
      {/* <div className="bg-gray-100">
        <div className="px-12 flex gap-8">
          <TeamCardContent
            title=""
            description="" />
          <TeamCardContent title="Assistant Surgeon" description="Dr. edward berry" />
          <TeamCardContent title="Medical Specialist" description="Dr. eliza william" />
        </div>

      </div> */}
    </div>
  )
}

export default page