const delay = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));
export default async function Page() {
  await delay(5000) 
  return (
    <>
      <h1 className="text-5xl">Dashboard</h1>

    </>
  );
}