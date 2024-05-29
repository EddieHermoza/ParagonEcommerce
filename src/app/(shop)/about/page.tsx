import {CustomBanner} from "@/components/ui"

export default function Page() {
  return (
    <div>
      <h1>Hello Page</h1>
      <CustomBanner banner="/images/MSI.webp" bannerMobile="/images/MSI_Mobile.webp" />
    </div>
  );
}