"use client"
import AboutBlogCard from "@/components/custom/AboutBlogCard";
import CardioImages from "@/components/custom/CardioImages";
import PageHeader from "@/components/custom/PageHeader";
import ServiceDetails from "@/components/custom/ServiceDetails";
import TeamCard from "@/components/custom/TeamCard";
import TeamCardContent from "@/components/custom/TeamCardContent";
import { cn } from "@/lib/utils";
import { Cross, Drill, HeartPulse, MonitorCogIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Countup from "@/components/custom/Countup";



export default function AboutPage() {

  const line = <div className="h-20 w-px bg-slate-400/50 self-center max-[900px]:hidden" />;
  const commentBoxes = [
    {
      id: 1,
      img: "/commentImg2.jpg",
      comment: "The Heart care hospital  specialist doctor were manage my heart surgery",
      name: "Roma Charles",
      jobTitle: "-Heart blockage"
    },
    {
      id: 2,
      img: "/commentImg.jpg",
      comment: "The Heart care hospital  specialist doctor were manage my heart surgery",
      name: "Roma Charles",
      jobTitle: "-Heart blockage"
    },
    {
      id: 3,
      img: "/commentImg3.jpg",
      comment: "The Heart care hospital  specialist doctor were manage my heart surgery",
      name: "Roma Charles",
      jobTitle: "-Heart blockage"
    },
  ]

  const [navigateBox, setNavigateBoxes] = useState(1)
  function toNavigateBoxes(id: number) {
    const findBoxes = commentBoxes.findIndex(el => el.id === id)
    if (findBoxes) {
      setNavigateBoxes(findBoxes)
    }
    return findBoxes
  }

  console.log((navigateBox));

  //  const steps = commentBoxes;
  //  const next  = ()=> navigateBox < 2 && setNavigateBoxes(s =>s + 1)
  //  function toNavigateBoxes (id:number){
  //   if((navigateBox <= 1 && commentBoxes.length === 1) || navigateBox >=3  ) return
  //   setNavigateBoxes(id)
  //  }



  return (
    <div className="min-h-screen">
      <PageHeader
        titleContent={<div className={cn('px-10 text-white space-y-2.5 relative py-38')}>
          <div className='text-5xl font-bold  '>About Us</div>
          <Link href={""} className=' text-sm font-semibold '>CARDIOLY </Link><span className='uppercase text-sm font-semibold'>- About Us</span>
        </div>}
      />

      {/* what we offer section */}
      <div className="px-12 my-30 flex gap-11 max-[900px]:flex-col relative ">
        <div className="relative min-[900px]:w-[calc(50%-24px)] w-full h-[500px]">
          <Image
            src={"/aboutImg1.jpg"}
            alt="about image1"
            fill
            className="object-cover"
          />
          <div className="bg-white absolute bottom-6 left-6 flex gap-2 rounded-md ">
            <div className="rounded-tl-sm">
              <div className="bg-red-500 rounded-br-full rounded-tr-4xl pt-2 pl-3 pr-5 pb-7 ">
                <HeartPulse size={55} stroke="white" />
              </div>
            </div>
            <div className="pt-7 pr-4">
              <div className="text-5xl font-extrabold mb-2 ">
                <Countup
                  end={870}
                  duration={4}
                /><sup className="font-medium ">+</sup>
              </div>
              <p className="text-gray-400  font-medium pb-3 ">Satisfied Patients</p>
            </div>
          </div>
        </div>

        <div className="w-[calc(50%-24px)] max-[900px]:w-full">
          <p className="text-red-500 mb-2 uppercase text-sm font-semibold tracking-widest pt-10">_What We Offer_</p>
          <p className="text-5xl font-bold leading-14">
            Provide Best Healthcare and Heart Specialist</p>
          <p className="text-slate-400 leading-7 my-5">Quickly response provide our specialist doctrors to patients in online conference. We help all heart patients and also provide .</p>
          <div className="border-b flex max-sm:flex-col gap-5 pb-6">
            <ServiceDetails
              className="gap-2 items-center mt-4 "
              title="Expert Nursing"
              titleClassName="my-2"
              descriptClassName="leading-7 font-medium"
              description="Expert Nursing facility give us doctor on home service." />

            <ServiceDetails
              className="gap-2 items-center mt-4  "
              titleClassName="my-2"
              descriptClassName="leading-7 font-medium"
              title="Heath care Expert"
              description="Expert Nursing facility give us doctor on home service." />
          </div>
          <div className="space-y-3 my-5 font-semibold">
            <p >Manage Treatment</p>
            <div className="border-t-4 border-red-500 " />
          </div>
          <div className="space-y-3 my-5 font-semibold">
            <p >Rehabilitation</p>
            <div className="border-t-4 border-red-500 " />
          </div>
        </div>
      </div>
      <div className="p-11 bg-black flex max-[900px]:gap-y-6 justify-between max-[900]:flex-wrap text-white">
        <div className="max-[900px]:w-1/2 flex flex-col justify-center items-center">
          <div className="translate-y-3">
            <HeartPulse className="text-red-500 sm:size-[67px] size-[50px]" strokeWidth={1} />
          </div>
          <p className="sm:pt-8 pt-4 sm:text-5xl text-3xl font-extrabold">
            <Countup end={250} duration={4} /> <sup>+</sup>
          </p>
          <p className="font-medium mt-1.5 max-sm:text-sm">Satisfied Patients</p>
        </div>
        {line}
        <div className="max-[900px]:w-1/2 flex flex-col justify-center items-center">
          <div className="translate-y-3">
            <Cross className="text-red-500 sm:size-[67px] size-[50px]" strokeWidth={1} />
          </div>
          <p className="sm:pt-8 pt-4 sm:text-5xl text-3xl font-extrabold">
            <Countup end={315} duration={4} /><sup>+</sup>
          </p>
          <p className="font-medium mt-1.5 max-sm:text-sm">Health Sections</p>
        </div>
        {line}
        <div className="max-[900px]:w-1/2 flex flex-col justify-center items-center">
          <div className="translate-y-3">
            <MonitorCogIcon className="text-red-500 sm:size-[67px] size-[50px]" strokeWidth={1} />
          </div>
          <p className="sm:pt-8 pt-4 sm:text-5xl text-3xl font-extrabold"> <Countup end={180} duration={4} /><sup>+</sup></p>
          <p className="font-medium mt-1.5 max-sm:text-sm">Kinds of Research</p>
        </div>
        {line}
        <div className="max-[900px]:w-1/2 flex flex-col justify-center items-center">
          <div className="translate-y-3">
            <Drill className="text-red-500 sm:size-[67px] size-[50px]" strokeWidth={1} />
          </div>
          <p className="sm:pt-8 pt-4 sm:text-5xl text-3xl font-extrabold"> <Countup end={250} duration={4} /><sup>+</sup></p>
          <p className="font-medium mt-1.5 max-sm:text-sm">Award Winning</p>
        </div>
      </div>
      <div className="relative">
        <div className="mx-auto max-w-[600px] w-[98%] text-center mt-20 mb-10 space-y-2.5">
          <div className=" text-red-500 tracking-widest font-semibold uppercase text-[13px]">_Expert Doctor_</div>
          <div className="text-4xl font-bold">Meet the Specialist Team</div>
          <div className="text-slate-400">If you have been diagnosed or suspect a heart condition our team of cardiologist
            are available to help at several convenient locations.</div>
        </div>
        <div className="z-60 relative px-12 flex gap-8 justify-center items-center bg-transparent">
          <div className="relative z-40">
            <TeamCard src="/teamImg1.jpg" imgClassName="rounded-tl-sm rounded-tr-sm" />
            <TeamCardContent title="Cardiologist" description="Dr. anna willey" />
          </div>
          <div className="relative z-40">
            <TeamCard src="/teamImg2.jpg" imgClassName="rounded-tl-sm rounded-tr-sm" />
            <TeamCardContent title="Assistant Surgeon" description="Dr. edward berry" />
          </div>
          <div className="relative z-40">
            <TeamCard src="/teamImg3.jpg" imgClassName="rounded-tl-sm rounded-tr-sm" />
            <TeamCardContent title="Medical Specialist" description="Dr. eliza william" />
          </div>
        </div>
        <div className="bg-gray-100 pt-[400px] -mt-[188px] relative z-70">
          <div className="my-4">
            <CardioImages />
          </div>
        </div>
        {/* <div className="-mt-4 relative">
          <Image src="/serviceImg1.jpg" className="w-full h-[500px] object-cover object-center " alt="" width={400} height={400} />
          <div className={cn("absolute top-1/2 -translate-y-1/2 right-10 rounded-sm bg-black text-white ",)}>
            {commentBoxes.map((el) => {
              return <div key={el.id} className={cn("flex gap-4", navigateBox === el.id ? "block" : "hidden")}>
                <div><Image src={el.img} alt="" width={160} height={160} /></div>
                <div>
                  <p>{el.comment}</p>
                  <p>{el.name}</p>
                  <span>{el.jobTitle}</span>
                  <div className="flex gap-2 relative">
                    <button
                      onClick={() => toNavigateBoxes(el.id)}
                      className="bg-gray-500 size-3.5 rounded-full cursor-pointer"></button>
                    <button
                      onClick={() => toNavigateBoxes(el.id)}
                      className="bg-gray-500 size-3.5 rounded-full cursor-pointer"></button>
                    <button
                      onClick={() => toNavigateBoxes(el.id)}
                      className="bg-gray-500 size-3.5 rounded-full cursor-pointer"></button>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div> */}
      </div>
      {/*
      <div className="px-10 my-25">
        <p className="text-red-500 mt-4 font-semibold uppercase text-sm tracking-wide">_Read Our Blog_</p>
        <div className="flex ">
          <div className="text-4xl flex-1 font-bold tracking-wider">Featured News and Advices</div>
          <div className="flex-1 px-7">We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</div>
        </div>
        <div className="flex  gap-7 my-10">
          <AboutBlogCard
            src="/blog1.jpg"
            title={<>
              <div className="text-3xl font-bold leading-9">27</div>
              <p className="uppercase font-medium text-sm">Aug</p>
            </>}
            linkTitle="Treatment"
            linkCaption="Is Running Really Good for the Heart?"
          />
          <AboutBlogCard
            src="/blog2.jpg"
            title={<>
              <div className="text-3xl font-bold leading-9">27</div>
              <p className="uppercase font-medium text-sm">Aug</p>
            </>}
            linkTitle="healthcare"
            linkCaption="Modeling data increase to endovascular therapy"
          />
          <AboutBlogCard
            src="/blog3.jpg"
            title={<>
              <div className="text-3xl font-bold leading-9">27</div>
              <p className="uppercase font-medium text-sm">Aug</p>
            </>}
            linkTitle="discount"
            linkCaption="Get the Exercise Tips for Limited Mobility" />
        </div>
      </div> */}
    </div>
  )
}