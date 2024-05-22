
export default function Page ( {params } : { params : { query:string } } ) {
  return (
    <div>
      <h1>Query: {params.query}</h1>
    </div>
  );
}