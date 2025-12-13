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
          </div>} />
        <div className={"md:-mt-20 max-md:pt-10 px-7 flex md:flex-row flex-col justify-around gap-5 md:border-b pb-8"}>
          <Card className="flex-1" img={"/serviceImg1.jpg"} title="Surgery" description=" heart surgery" imgClassName=" " />
          <Card className="flex-1" img={"/serviceImg2.jpg"} title="Saving Lives" description=" valve disease" />
          <Card className="flex-1" img={"/serviceImg3.jpg"} title="Great care" description=" children's services" />
        </div>
        <div className="mt-20 ">
          <>
            <div className="text-center space-y-2">
              <h4 className="text-red-400 font-medium md:text-sm text-xs">_SPECIAL SERVICES_</h4>
              <p className="md:text-4xl text-3xl font-bold">Why you should choose us</p>
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
          {/* <div className="bg-red-500  md:flex items-center justify-center gap-18   ">
            <div className="w-[50%] ">
              <h4>_Our Facilities_</h4>
              <p className="text-white text-4xl font-bold whitespace-break-spaces">
                We Offering Healthcare Services to Client&apos;s</p>
              <div className="flex flex-wrap gap-5 mt-4 items-center ">
                {facilitiesBtn.map((el) => {
                  return <button
                    key={el.id}
                    className={cn(" py-2.5 px-8 rounded-sm cursor-pointer text-sm font-medium border-none outline-none ",
                      serviceBtn === el.title ? "bg-black text-white" : "bg-white text-black")}
                    onClick={() => setServiceBtn(el.title)}>
                    <div className="flex gap-4 py-2.5 items-center">
                      <span>
                        <el.btnIcon stroke={cn(serviceBtn === el.title ? "red" : " black")} size={24} />
                      </span>
                      <p >{el.title}</p>
                    </div>
                  </button>
                })}
              </div>
              <div className=" flex-1 flex items-center  gap-6  mt-7">
                <Image src={"/serviceImg1.jpg"} alt="serviceImage" width={200} height={1} />
                <p className="whitespace-break-spaces text-white ">
                  Be Right Path for your Start Up with Business Consulting with challenges it presents may seem daunting, but we help you approach change with confidence.
                </p>
              </div>
            </div>
            <form action="" className=" bg-black rounded p-6 space-y-3 md:absolutes rightd-6 topa-10 w-[450px] translate-y-16 ">
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
            </form>
          </div>
          <div className="px-10">
            <div className="flex gap-10">
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
            </div>
            <div className="text-center space-y-2 mt-20">
              <p className="text-red-500">_Working Process_</p>
              <p className="text-4xl font-semibold">How We Work?</p>
              <p className="break-all w-1/2 m-auto font-medium text-slate-300">Our expert are always provide best health care service. Why Cardioly service is best for the
                heart treatments all types of patients like children, elders etc...</p>
            </div>
            <div className="flex gap-5 my-5  justify-center items-center">
              <div >
                <div className="border-b-8 border-red-400 rounded-b-full    ">
                  <div className="border-dotted  flex justify-center items-center  rounded-full ">
                    <Image
                      src={"/serviceImg2.jpg"}
                      alt="service image"
                      width={1}
                      height={1} 
                       className="rounded-full  size-50 object-center " />
                  </div>
                </div>

                <div className=" flex justify-center items-center  mt-6 ">
                  <p className="text-lg font-semibold ">Appointment</p>
                </div>
                <div className="flex justify-center items-center w-[250px]">
                  <p className="text-slate-400 text-center"> Book the appointment and go to the healthcare</p>
                </div>
              </div>
              <div>
               <div className="border-b-8 border-red-400 rounded-b-full    ">
                  <div className="border-dotted  flex justify-center items-center  rounded-full ">
                    <Image
                      src={"/serviceImg2.jpg"}
                      alt="service image"
                      width={1}
                      height={1} 
                       className="rounded-full  size-50 object-center " />
                  </div>
                </div>
                <div className=" flex justify-center items-center w-[250px] mt-6 ">
                  <p className="text-lg font-semibold ">Doctor Checkup</p>
                </div>
                <div className="flex justify-center items-center w-[250px]">
                  <p className="text-slate-400 text-center"> Doctor checkup patient heart bit and actions</p>
                </div>
              </div>
              <div>
                <div className="border-b-8 border-red-400 rounded-b-full    ">
                  <div className="border-dotted  flex justify-center items-center  rounded-full ">
                    <Image
                      src={"/serviceImg2.jpg"}
                      alt="service image"
                      width={1}
                      height={1} 
                       className="rounded-full  size-50 object-center " />
                  </div>
                </div>
                <div className=" flex justify-center items-center  mt-6 ">
                  <p className="text-lg font-semibold ">Manage Treatment</p>
                </div>
                <div className="flex justify-center items-center w-[250px]">
                  <p className="text-slate-400 text-center"> Doctors are patients treatment manage easily</p>
                </div>
              </div>
              <div>
               <div className="border-b-8 border-red-400 rounded-b-full    ">
                  <div className="border-dotted  flex justify-center items-center  rounded-full ">
                    <Image
                      src={"/serviceImg2.jpg"}
                      alt="service image"
                      width={1}
                      height={1} 
                       className="rounded-full  size-50 object-center " />
                  </div>
                </div>
                <div className=" flex justify-center items-center w-[250px] mt-6 ">
                  <p className="text-lg font-semibold ">Enjoy The Life</p>
                </div>
                <div className="flex justify-center items-center w-[250px]">
                  <p className="text-slate-400 text-center"> Best care get patient & quickly enjoy a life</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-200 flex  gap-6  px-10 py-15">
            <div className="w-[33.3%] leading-7 space-y-4">
              <h4 className="mt-4 text-red-500 uppercase text-sm font-medium">_What We Offer_</h4>
              <div className="text-4xl font-bold">Reasonable Plan of Treatment</div>
              <div className="whitespace-break-spaces text-[17px] text-slate-400 py-4 ">
                We provide latest technology with expert specialist doctors in a reasonable cost. They are always provide to patient best care.
              </div>
              <div className="space-y-5 mt-2">
                <TreatmentOffer
                  title="Medical Solutions"
                  description="We are provide the best and health care medical solutions"
                  icon={<PillBottle />}
                />
                <TreatmentOffer
                  title="Heart rate monitor"
                  description="Our doctor check patient heart rate on heart rate monitor"
                  icon={<WatchIcon />}
                />
              </div>
            </div>
            <div className="w-[33.3%] ">
              <SubscriptionPlanCard
                title="Basic Plan"
                icon={<House className="m-auto" size={24} />} />
            </div>
            <div className="w-[33.3%]">
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
          <div className="bg-white w-full">
            <CardioImages />
            <FeaturedNews />
          </div> */}
        </div>
      </div>
    </>
  );
}
