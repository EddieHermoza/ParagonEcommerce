import { LiaStarSolid } from "react-icons/lia";

type Props = {
  rating: number | undefined;
}

export default function Rating({rating}: Props) {
  const roundedRating = Math.round(rating || 0); 
  
  return (
    <ul className="flex gap-2 ">
        {[...Array(roundedRating)].map((_, index) => (
            <li key={index}>
                <LiaStarSolid className="text-aorus h-6 w-6" />
            </li>
         ))}
    </ul>
  );
}