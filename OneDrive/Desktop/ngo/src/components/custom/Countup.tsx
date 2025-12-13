"use client"

import CountUp from "react-countup"
interface prop {
  start?: number;
  end: number;
  duration?: number;
  delay?: number
}
const Countup = ({
  start = 0,
  end,
  duration,
  delay
}: prop) => {
  return (
    <CountUp
      start={start}
      end={end}
      duration={duration}
      delay={delay}
    />
  )


}

export default Countup