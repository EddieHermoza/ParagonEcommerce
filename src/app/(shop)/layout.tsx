import {MenuBar} from "@/components/shop"

import {Footer} from "@/components/shop"


export default function ShopLayout({children}:{
    children:React.ReactNode
}){
  return (
    <>
      <MenuBar/>
      <>
          {children}
      </>
      <Footer/>
    </>

  )
}
