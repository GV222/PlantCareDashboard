import { Plant } from "@/app/types/plant";
import Box from "./box";

export default function PlantInformation({ plant }: { plant: Plant }) {
  return (
    /*
"acquiredDate": "2024-01-20",
"lastWatered": "2025-11-05",
"lastFertilized": "2025-09-15",
*/
    <Box width="w-160">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold mb-4 ">Plant Information</h2>
        <Box>
          <div className="flex justify-between">
            <h2 className="font-semibold">Age</h2>
            <p>{plant.acquiredDate} years</p>
          </div>
        </Box>
        <Box>
          <div className="flex justify-between">
            <h2 className="font-semibold ">Last Watered</h2>
            <p>{plant.lastWatered} years</p>
          </div>
        </Box>
        <Box>
          <div className="flex justify-between">
            <h2 className="font-semibold">Last Fertilized</h2>
            <p>{plant.lastFertilized} years</p>
          </div>
        </Box>
        <Box>
          <div className="flex justify-between">
            <h2 className="font-semibold">Pot Size</h2>
            <p>{plant.potSize} cm</p>
          </div>
        </Box>
      </div>
    </Box>
  );
}
