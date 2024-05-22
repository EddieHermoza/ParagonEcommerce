import OtherProductCard from "./OtherProductCard"

export default function OtherProductsGrid() {
  return (
    <div className="w-full flex-center flex-wrap py-5 px-10 gap-5 relative max-w-[1600px]">
        <OtherProductCard/>
        <OtherProductCard/>
        <OtherProductCard/>
        <OtherProductCard/>
    </div>
  )
}
