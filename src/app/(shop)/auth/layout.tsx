import Footer from "@/components/shop/Footer"
export default function AuthLayout({children}:{
    children:React.ReactNode
}){
  return (
    <>
      <main className={`h-[calc(100vh-130px)] bg-[url(/images/ParagonBanner.webp)] bg-center bg-cover relative flex-center filter saturate-150`}>
        {children}
      </main>
      <Footer/>
    </>

  )
}
