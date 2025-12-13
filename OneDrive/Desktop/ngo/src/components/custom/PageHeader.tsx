import Image from "next/image"
import Header from "./Header"
import NavBar from "./NavBar"
import { cn } from "@/lib/utils"



const PageHeader = ({ className, titleContent }: {
  className?: string;
  titleContent?: React.ReactNode;
}) => {
  return (
    <div className={cn("relative ", className)}>
      <Image src={"/cardioly.jpg"} alt="Background Image" layout="fill" objectFit="cover" objectPosition="center " />
      <div className="relative ">
        <Header />
        {/* <div className=""> */}
          <NavBar />
        {/* </div> */}
      </div>
      {titleContent && <div>{titleContent}</div>}
    </div>
  )
}

export default PageHeader