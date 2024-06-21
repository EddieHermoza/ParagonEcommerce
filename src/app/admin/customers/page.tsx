import {CustomersTbl,FilterCustomerSection} from "@/components/admin";

export default function Page() {
  return (
    <>
      <h1 className="text-5xl">Clientes</h1>
      <FilterCustomerSection/>
      <CustomersTbl/>
    </>
  );
}