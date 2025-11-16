import { Plant, Task } from "../../types/plant";
import TasksTable from "../home/tasksTable";
import Box from "./box";
import HeaderDetail from "./headerDetail";
import plants from "../../data/plants.json";
import PlantInformation from "./plantInformation";

export default function PlantDetailPage({ plant }: { plant: Plant }) {
  const tasks = plants.tasks.filter((task) => task.plantId === plant.id) as Task[];

  return (
    <>
      <HeaderDetail plant={plant} />
      <div className="mr-40 ml-40 mt-6 mb-10 flex gap-5">
        <div className="flex flex-col gap-4">
          <Box width="w-160">
            <img src="/Imagis/img-placeholder.jpg" alt={plant.name} className="h-100 w-85 object-cover rounded-lg mx-auto mt-3" />
          </Box>
          <Box>
            <h2 className="text-lg font-semibold mb-4 ">Notes</h2>
            <p className="text-sm text-gray-700">{plant.notes}</p>
          </Box>
        </div>
        <div className="flex flex-col gap-4">
          <PlantInformation plant={plant} />
          <Box width="w-160">
            <h2 className="text-lg font-semibold">All tasks</h2>
            <TasksTable tasks={tasks} />
          </Box>
        </div>
      </div>
    </>
  );
}
