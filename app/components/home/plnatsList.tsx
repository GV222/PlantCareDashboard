import { Plant, Task } from "../../types/plant";
import plants from "../../data/plants.json";
import PlantCard from "./plantCard";

export default function PlantsList() {
  const plantsData = plants.plants as Plant[];
  const tasks = plants.tasks as Task[];
  return (
    <>
      <div className="flex flex-col  ml-14 mt-4">
        <h2 className="text-xl font-semibold">Your Plants</h2>
        <p className="text-sm text-gray-500">
          {plantsData.length} plants - {tasks.length} upcoming tasks
        </p>
      </div>

      <div className="flex flex-wrap gap-7 mt-4 justify-center mr-4 ml-4">
        {plantsData.map((plant) => (
          <PlantCard key={plant.id} plant={plant} tasks={tasks.filter((task) => task.plantId === plant.id)} />
        ))}
      </div>
    </>
  );
}
