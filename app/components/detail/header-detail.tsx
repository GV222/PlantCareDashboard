import { Plant } from "@/app/types/plant";
import Link from "next/link";

export default function HeaderDetail({ plant }: { plant: Plant }) {
  return (
    <div className="flex flex-col w-100% border-b gap-3.5 border-gray-300 px-2 bg-white pb-4 pt-2 pr-65 pl-40">
      <Link href="/" className="ml-4 mt-2">
        ← Back to Dashboard
      </Link>
      <div className="flex justify-between ">
        <div className="flex items-center gap-2.5 ">
          <img src="/Imagis/plant-icon.png" alt="Plant Icon" className="h-12 w-12" />
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold">{plant.name}</h1>
            <p className="text-sm text-gray-500">{plant.species}</p>
          </div>
        </div>
        <p className="bg-[#7AB76D] rounded-3xl w-auto h-6 text-center px-2">{plant.healthStatus} </p>
      </div>
    </div>
  );
}
