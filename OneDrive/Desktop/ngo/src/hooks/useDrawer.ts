import { useState } from "react"


export  const useDrawer = () =>{

   const [isDrawerOpened,openDrawer] = useState(false);

   return {
    isOpened : isDrawerOpened,
    handleOpening : ()=>openDrawer(!isDrawerOpened)
  }

}