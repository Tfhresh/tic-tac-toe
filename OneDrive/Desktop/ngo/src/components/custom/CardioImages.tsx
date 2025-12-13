import Image from 'next/image'


const CardioImages = () => {
  return (
     <div className="flex gap-10  py-15 items-center border-b">
              <Image src={"/cardio1.png"} alt="cardiology" width={160} height={160} className="ml-10" />
              <Image src={"/medicover.png"} alt="cardiology" width={160} height={160} />
              <Image src={"/cardio2.png"} alt="cardiology" width={160} height={160} />
              <Image src={"/cardio3.png"} alt="cardiology" width={160} height={160} />
              <Image src={"/heartTransplant.png"} alt="cardiology" width={160} height={160} />
              <Image src={"/heartCare.png"} alt="cardiology" width={160} height={160} />
            </div>
  )
}

export default CardioImages