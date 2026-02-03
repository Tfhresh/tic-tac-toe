"use client";

import Card from "@/components/custom/Card";
import CardioImages from "@/components/custom/CardioImages";
import FeaturedNews from "@/components/custom/FeaturedNews";
import InputField from "@/components/custom/InputField";
import PageHeader from "@/components/custom/PageHeader";
import ServiceDetails from "@/components/custom/ServiceDetails";
import SubscriptionPlanCard from "@/components/custom/SubscriptionPlanCard";
import TreatmentOffer from "@/components/custom/TreatmentOffer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Car, House, Laptop, Phone, PillBottle, WatchIcon, } from "lucide-react";
import Image from "next/image";
import { useState } from "react"

const services = [
  {
    title: "Appointment",
    description: "Book the appointment and go to the healthcare",
    image: "/serviceImg2.jpg",
  },
  {
    title: "Doctor Checkup",
    description: "Doctor checkup patient heart bit and actions",
    image: "/serviceImg2.jpg",
  },
  {
    title: "Manage Treatment",
    description: "Doctors are patients treatment manage easily",
    image: "/serviceImg2.jpg",
  },
  {
    title: "Enjoy The Life",
    description: "Best care get patient & quickly enjoy a life",
    image: "/serviceImg2.jpg",
  },
];

export default function Home() {

  const facilitiesBtn = [
    {
      id: 1,
      btnIcon: Car,
      title: "EMERGENCY"
    },
    {
      id: 2,
      btnIcon: Car,
      title: "FACILITIES"
    },
    {
      id: 3,
      btnIcon: Car,
      title: "REACTION"
    }
  ];

  const [serviceBtn, setServiceBtn] = useState("EMERGENCY");


  const appointmentComponent = (className: string) => <div className={cn("min-[930px]:translate-y-20 flex sm:gap-10  max-sm:flex-col", className)}>
    <div className="flex mt-4 gap-4">
      <Laptop size={60} stroke="red" />
      <div>
        <p className="font-light text-slate-400 ">Have any Question?</p>
        <p className="  font-bold text-lg ">Book an appointment</p>
      </div>
    </div>
    <div className="flex mt-4 gap-4">
      <Phone size={50} stroke="red" />
      <div>
        <h4 className="font-light text-slate-400 ">Have any Question?</h4>
        <p className="  font-bold text-lg ">Book an appointment</p>
      </div>
    </div>
  </div>;



  return (
    <>
      <div className="min-h-screen pt-4 sm:-z-50 ">
        {/* header section */}
        <PageHeader
          titleContent={<div className={cn("lg:w-[60%] relative m-auto md:py-50 py-20 px-5 lg:space-y-4.5 space-y-10")}>
            <div className=" flex justify-center tracking-widest font-semibold ">
              <Button className="bg-red-500 text-white uppercase px-12 rounded py-4 hover:bg-red-500">
                Commit To Be Fit
              </Button>
            </div>
            <h1 className="capitalize lg:text-6xl md:text-5xl sm:text-4xl min-[400px]:text-5xl text-4xl  text-center text-white whitespace-break-spaces font-bold md:leading-[60px] leading-[50px]">
              Healthy Habit are your Heart desire
            </h1>
            <div className="flex sm:flex-row flex-col sm:gap-7 gap-5 justify-center items-center   ">
              <Button className="cursor-pointer max-sm:w-full py-8 px-11 bg-white text-black uppercase text-sm  hover:bg-red-500 hover:text-white transition-all  duration-200  font-medium">ReadMore</Button>
              <Button className="cursor-pointer max-sm:w-full py-8 px-11 bg-transparent border-white border-2 uppercase text-sm hover:bg-white hover:text-black font-bold">Contact us</Button>
            </div>
          </div>}
        />
        <div className={"md:-mt-20 max-md:pt-10 px-7 flex md:flex-row flex-col justify-around gap-5 md:border-b pb-8"}>
          <Card className="flex-1" img={"/serviceImg1.jpg"} title="Surgery" description=" heart surgery" imgClassName=" " />
          <Card className="flex-1" img={"/serviceImg2.jpg"} title="Saving Lives" description=" valve disease" />
          <Card className="flex-1" img={"/serviceImg3.jpg"} title="Great care" description=" children's services" />
        </div>
        <div className="mt-20 ">
          <>
            <div className="text-center space-y-2">
              <h4 className="text-red-400 font-medium md:text-sm text-xs">_SPECIAL SERVICES_</h4>
              <p className="md:text-4xl sm:text-3xl text-[26px] font-bold">Why you should choose us</p>
            </div>
            <div className="flex md:flex-row items-center gap-5 flex-col px-7 py-6  ">
              <div className="space-y-12">
                <ServiceDetails
                  title="Cardio Monitoring"
                  iconClassName="md:size-[65px] size-[40px]"
                  description="we have  highest Cardio Monitoring technologies in our health care."
                />
                <ServiceDetails
                  iconClassName="md:size-[65px] size-[40px]"
                  title="Expert Cardiologist"
                  titleClassName="mt-2"
                  description="Our Expert Cardiologists are easily manage all heart surgeries."
                />
                <ServiceDetails
                  iconClassName="md:size-[65px] size-[40px]"
                  titleClassName="mt-2"
                  title="Comfort Environment"
                  description="Comfort Environment provide to all patient at heath care hospital."
                />
              </div>
              <div className="md:self-auto self-center md:w-[600px] md:h-[400px] max-w-[450px] w-full sm:h-[500px] h-[380px] relative flex justify-center">
                <Image src={"/doctorImg.png"} alt="doctorImage" fill className="max-md:object-cover max-[400px]:object-contain object-center" />
              </div>
              <div className="space-y-12">
                <ServiceDetails
                  iconClassName="md:size-[65px] size-[40px]"
                  size={65}
                  title="Oxygen Therapy"
                  titleClassName="mt-2"
                  description="We have latest Cardio Monitoring technologies in our health care."
                />
                <ServiceDetails
                  iconClassName="md:size-[65px] size-[40px]"
                  title="Septal Mastectomy"
                  description="We have latest Cardio Monitoring technologies in our health care."
                />
                <ServiceDetails
                  iconClassName="md:size-[65px] size-[40px]"

                  title="Coil Embolization"
                  description="We have latest Cardio Monitoring technologies in our health care."
                />
              </div>
            </div>
          </>
          <div className="max-[1100px]:px-3 bg-red-500 flex min-[930px]:flex-row flex-col items-center justify-center min-[1180px]:gap-18 min-[930px]:gap-10 max-[930px]:pt-10">
            <div className="min-[930px]:w-[50%]">
              <h4>_Our Facilities_</h4>
              <p className="text-white sm:text-4xl text-3xl font-bold whitespace-break-spaces">
                We Offering Healthcare Services to Client&apos;s</p>
              <div className="flex gap-5 max-[930px]:gap-2 mt-4 items-center max-[500px]:flex-wrap ">
                {facilitiesBtn.map((el) => {
                  return <button
                    key={el.id}
                    className={cn(" py-2.5 min-[1180px]:px-8 min-[930px]:px-3 max-[930px]:py-1.5 max-[930px]:flex-1 rounded-sm cursor-pointer text-sm font-medium border-none outline-none ",
                      serviceBtn === el.title ? "bg-black text-white" : "bg-white text-black")}
                    onClick={() => setServiceBtn(el.title)}>
                    <div className="flex gap-4 py-2.5 items-center max-[930px]:px-4">
                      <span>
                        <el.btnIcon stroke={cn(serviceBtn === el.title ? "red" : " black")} size={24} />
                      </span>
                      <p >{el.title}</p>
                    </div>
                  </button>
                })}
              </div>
              <div className=" flex-1 flex max-[540px]:flex-col items-center  min-[1180px]:gap-6 gap-3  mt-7">
                <div className="relative w-1/2 shrink-0 h-[200px] max-[540px]:w-full">
                  <Image src={"/serviceImg1.jpg"} alt="serviceImage" fill className="object-cover" />
                </div>
                <p className="whitespace-break-spaces text-white ">
                  Be Right Path for your Start Up with Business Consulting with challenges it presents may seem daunting, but we help you approach change with confidence.
                </p>
              </div>
              {appointmentComponent("flex max-[930px]:hidden")}
            </div>
            <form action="" className="relative bg-black rounded p-6 space-y-3 md:absolutes rightd-6 topa-10 min-[1180px]:w-[450px] min-[930px]:w-[40%] translate-y-16 ">
              <h2 className="text-2xl text-white text-center">Make an Appointment</h2>
              <div className="space-y-5">
                <InputField type="text" placeholder="Your Name *" />
                <InputField type="email" placeholder="Your Email" />
                <select
                  className="text-slate-500 font-medium bg-white w-full p-4 outline-none border-none" >
                  <option value="" > Select Your Doctor</option>
                </select>
                <textarea
                  rows={3}
                  placeholder="Comment"
                  className="text-slate-500 bg-white w-full font-medium p-4 resize-none">

                </textarea>
                <Button className="bg-red-500 text-white cursor-pointer w-full p-6 hover:bg-white hover:text-red-500 text-sm transition-all duration-200">SERVICE AT ONE GLANCE</Button>
              </div>
              {appointmentComponent("hidden max-[930px]:flex absolute left-0 -bottom-[15%] max-sm:-bottom-[30%] space-y-0")}
            </form>
          </div>
          <div className="px-10 min-[900px]:mt-40 sm:mt-52 mt-80">
            <div className="text-center space-y-2 max-w-[700px] mx-auto w-full">
              <p className="text-red-500">_Working Process_</p>
              <p className="text-4xl font-semibold">How We Work?</p>
              <p className="break-all font-medium text-slate-300">Our expert are always provide best health care service. Why Cardioly service is best for the
                heart treatments all types of patients like children, elders etc...</p>
            </div>
            <div className="flex min-[900px]:gap-5 gap-10 my-5  justify-center items-center max-[900px]:flex-wrap">
              {services.map((service, index) => (
                <div key={index} className="min-[900px]:w-[calc((100%-60px)/4)] sm:w-[calc(50%-30px)] w-full">
                  <div className="bg-white border-red-400 rounded-b-full flex items-center justify-center min-[1300px]:h-[200px] min-[900px]:h-[280px]! sm:h-[350px] min-[500px]:h-[550px] h-[400px] relative after:block after:w-[96%] after:h-[50%] after:bg-pink-200 after:absolute after:rounded-b-full after:-z-1 after:left-0 after:bottom-0 after:translate-y-[7%] after:translate-x-[2.2%] hover:after:bg-red-500 after:transition-all after:duration-500">
                    <div className="border-2 relative w-full h-full border-dotted flex justify-center items-center rounded-full ">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="rounded-full w-[calc(100%-40px)]! h-[calc(100%-28px)]! object-center top-3.5! left-5! right-5! bottom-3.5!"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center mt-6 px-2">
                    <p className="text-lg font-semibold">{service.title}</p>
                  </div>
                  <div className="flex justify-center items-center lg:w-[250px] mx-auto">
                    <p className="text-slate-400 text-center">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-200 flex lg:flex-row flex-col gap-6  px-10 py-15">
            <div className="lg:w-[calc(100%/3)] w-full leading-7 space-y-4">
              <h4 className="mt-4 text-red-500 uppercase text-sm font-medium">_What We Offer_</h4>
              <div className="flex flex-col max-lg:flex-row max-md:flex-col gap-5">
                <h2 className="min-[1200px]:text-4xl text-3xl font-bold max-lg:w-1/2 max-md:w-full shrink-0">Reasonable Plan of Treatment</h2>
              <p className="whitespace-break-spaces min-[1200px]:text-[17px] text-[15px] text-slate-400 lg:my-4 max-lg:w-1/2 max-md:w-full shrink-0">
                We provide latest technology with expert specialist doctors in a reasonable cost. They are always provide to patient best care.
              </p>
              </div>
              <div className="mt-2 flex flex-col max-lg:flex-row max-md:flex-col gap-5">
                <TreatmentOffer
                  title="Medical Solutions"
                  className="items-start"
                  description="We are provide the best and health care medical solutions"
                  icon={<PillBottle />}
                  iconClassName="min-[1200px]:size-20 size-16 p-0 shrink-0"
                />
                <TreatmentOffer
                  title="Heart rate monitor"
                  className="items-start"
                  description="Our doctor check patient heart rate on heart rate monitor"
                  icon={<WatchIcon />}
                  iconClassName="min-[1200px]:size-20 size-16 p-0 shrink-0"
                />
              </div>
            </div>
            <div className="lg:w-[calc((100%/3)*2)] flex max-md:flex-col gap-6">
              <div className="md:w-1/2">
                <SubscriptionPlanCard
                  title="Basic Plan"
                  icon={<House className="m-auto" size={24} />} />
              </div>
              <div className="md:w-1/2">
                <SubscriptionPlanCard
                  title="Professional Plan"
                  titleClassName="text-white"
                  icon={<House className="m-auto" size={24} />}
                  className="bg-red-500"
                  iconClassName="bg-white text-black"
                  priceClassName="text-white"
                  lineClassName="border-white"
                  subServiceClassName="text-white"
                />
              </div>
            </div>
          </div>
          <div className="bg-white w-full">
            <CardioImages />
            <FeaturedNews />
          </div>
        </div>
      </div>
    </>
  );
}
