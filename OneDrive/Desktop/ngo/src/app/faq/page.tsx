"use client";

import PageHeader from "@/components/custom/PageHeader"
import { cn } from "@/lib/utils"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react";
import { Minus, Plus } from "lucide-react";




const AccordionQuestion = ({ value }: { value: string; }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccordionItem value={value} className="md:w-[calc(50%-20px)] w-full">
      <AccordionTrigger onClick={() => setIsOpen(!isOpen)} className="flex items-center hover:cursor-pointer hover:no-underline border pl-5 pr-3 w-full">
        <div className="font-bold text-base ">
          How can I book the appointment date?
        </div>
        <div className="size-8 rounded-full flex items-center justify-center bg-red-500">
          {isOpen ? <Plus className="text-muted-foregroundd pointer-events-none [data-state=open]
                     size-4 shrink-0 translate-y-0.5 transition-transform duration-200 text-white" /> :
            <Minus className="[data-state=closed] text-white" />}
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-base pt-8 font-medium text-slate-400 tracking-wide px-4">
        There are many variations of healthcare of Lorem Ipsum available, but the majority have suffered alteration in some steps, by installing
      </AccordionContent>
    </AccordionItem>
  )
}



const page = () => {
  return (
    <div className="min-h-screen pt-4">
      <PageHeader
        titleContent={
          <div className={cn('px-10 text-white space-y-2.5 relative py-38')}>
            <div className='text-5xl font-bold'>FAQ</div>
            <Link href={""} className=' text-sm font-semibold hover:text-red-500 '>CARDIOLY </Link><span className='uppercase text-sm font-semibold'>- FAQ</span>
          </div>}
      />
      {/*cardiology common question section */}
      <section className="my-10 ">
        <div className="space-y-3 text-center">
          <div className="max-w-[800px] mx-auto w-full px-2.5">
            <div className="text-red-500  font-semibold uppercase text-sm tracking-widest ">_Common Questions_</div>
            <div className="lg:text-4xl text-2xl font-bold">Cardiology Common Questions</div>
            <p className="text-center text-slate-500">
              You will find answers to about our latest technologies and health care specialists service and
              more. Please feel free to contact us if you don&apos;t get your question&apos;s answer in below.
            </p>
          </div>
        </div>
        <Accordion type="single" collapsible className="flex flex-wrap my-10 md:gap-10 gap-4 md:px-10 px-5">
          {Array.from(new Array(10)).map((_, index) => <AccordionQuestion key={index} value={`item${index + 1}`} />)}
        </Accordion>
      </section>
      {/* general question section */}
      <section>
        <div className="space-y-3 text-center">
          <div className="text-red-500  font-semibold uppercase text-sm tracking-widest ">_General Question_</div>
          <div className="max-w-[800px] mx-auto w-full px-2.5">
            <div className="lg:text-4xl text-2xl font-bold">Frequently Asked Questions</div>
            <p className=" text-center text-slate-500 max-sm:text-xs">
              You will find answers to about our latest technologies and health care specialists service and
              more. Please feel free to contact us if you don&apos;t get your question&apos;s answer in below.
            </p>
          </div>
        </div>
        <div className="lg:px-10 px-5 my-20">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className=" flex  items-center hover:cursor-pointer hover:no-underline border pl-5 pr-3">
                <div className="font-bold text-base ">
                  What is the most common procedure of heart surgery?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base pt-8 font-medium text-slate-400 tracking-wide px-4">
                There are many variations of healthcare of Lorem Ipsum available, but the majority have suffered alteration in some steps, by installing technology in healthcare hospital. You don&apos;t believable experts handle all treatments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className=" flex  items-center hover:cursor-pointer hover:no-underline border pl-5 pr-3">
                <div className="font-bold text-base ">
                  Are heart operations are painful on treatment?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base pt-8 font-medium text-slate-400 tracking-wide px-4">
                There are many variations of healthcare of Lorem Ipsum available, but the majority have suffered alteration in some steps, by installing technology in healthcare hospital. You don&apos;t believable experts handle all treatments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className=" flex  items-center hover:cursor-pointer hover:no-underline border pl-5 pr-3">
                <div className="font-bold text-base ">
                  what is the description of underlying diagnosis?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base pt-8 font-medium text-slate-400 tracking-wide px-4">
                There are many variations of healthcare of Lorem Ipsum available, but the majority have suffered alteration in some steps, by installing technology in healthcare hospital. You don&apos;t believable experts handle all treatments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className=" flex  items-center hover:cursor-pointer hover:no-underline border pl-5 pr-3">
                <div className="font-bold text-base ">
                  Do you use anesthetics for elder & child patients?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base pt-8 font-medium text-slate-400 tracking-wide px-4">
                There are many variations of healthcare of Lorem Ipsum available, but the majority have suffered alteration in some steps, by installing technology in healthcare hospital. You don&apos;t believable experts handle all treatments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className=" flex  items-center hover:cursor-pointer hover:no-underline border pl-5 pr-3">
                <div className="font-bold text-base ">
                  How long does the children heart recovery take?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base pt-8 font-medium text-slate-400 tracking-wide px-4">
                There are many variations of healthcare of Lorem Ipsum available, but the majority have suffered alteration in some steps, by installing technology in healthcare hospital. You don&apos;t believable experts handle all treatments.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

      </section>
    </div>
  )
}

export default page