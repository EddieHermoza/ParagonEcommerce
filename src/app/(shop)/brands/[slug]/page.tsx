import {CustomBanner} from "@/components/ui";
import {LastProductAdded} from "@/components/shop";
import {ProductGrid} from "@/components/shop";
import {Pagination} from "@/components/ui";
import {FilterBrandPage} from "@/components/shop";
import {Title} from "@/components/ui"
import { Suspense } from "react";
import {Footer} from "@/components/shop";

export default function Page({params}: {params : { slug : string } } ) {
  return (
    <>
      <main>
        <CustomBanner banner={'/images/MSI.webp'} bannerMobile={'/images/MSI_mobile.webp'}/>

        <LastProductAdded/>

        <section className="relative flex flex-col items-center w-full px-5 bg-black">
          <Title title={params.slug}/>
          <div className="w-full max-w-[1500px]">
            <FilterBrandPage/>
          </div>
          <ProductGrid/>
          <div className="w-full py-5 flex-center">
            <Suspense>          
              <Pagination totalPages={11}/>
            </Suspense>
          </div>
        </section>
      </main>
      <Footer/>
    </>

  );
}
