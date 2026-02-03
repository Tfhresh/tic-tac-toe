import Image from 'next/image'

const cardiologyImages = [
  { src: "/cardio1.png", alt: "cardiology" },
  { src: "/medicover.png", alt: "cardiology" },
  { src: "/cardio2.png", alt: "cardiology" },
  { src: "/cardio3.png", alt: "cardiology" },
  { src: "/heartTransplant.png", alt: "cardiology" },
  { src: "/heartCare.png", alt: "cardiology" },
];


const CardioImages = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10  py-15 items-center border-b max-">
      {cardiologyImages.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          width={160}
          height={160}
          className={index === 0 ? "ml-10" : ""}
        />
      ))}
    </div>
  )
}

export default CardioImages