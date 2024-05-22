import {ProductGrid} from "@/components/shop";
import {Title} from "@/components/ui";
import {Pagination} from "@/components/ui";
import { Suspense } from "react";
import {Footer} from "@/components/shop";

export default function Page({params}:{params:{slug:string}}) {
  return (
    <>
    <main>
      <section className="min-h-[calc(100vh-130px)] w-full relative flex flex-col items-center">
        <Title title={params.slug}/>
        <ProductGrid/>
          <div className="w-full flex-center py-5">
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
