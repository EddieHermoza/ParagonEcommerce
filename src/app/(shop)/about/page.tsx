import {CustomBanner} from "@/components/ui"
import { sleep } from "@/lib/utils";

export default async function Page() {
  await sleep(5000)
  return (
    <div>
      <CustomBanner banner="/images/MSI.webp" bannerMobile="/images/MSI_Mobile.webp" />
    </div>
  );
}