import Link from "next/link";
import { Plant, Task } from "../../types/plant";
import TasksTable from "./tasksTable";

export default function PlantCard({ plant, tasks }: { plant: Plant; tasks: Task[] }) {
  return (
    <Link href={`/plant-detail/${plant.id}`}>
      <div className="h-auto w-auto bg-white rounded-lg shadow-md p-4 flex flex-col justify-between border border-gray-200 pb-8 cursor-pointer">
        <div>
          <div className="pl-4">
            <h2 className="text-xl font-semibold">{plant.name}</h2>
            <p className="text-sm text-gray-500">{plant.species}</p>
          </div>
          <img src="/Imagis/img-placeholder.jpg" alt={plant.name} className="h-100 w-85 object-cover rounded-lg mx-auto mt-3" />
          <div className="pl-4 mt-3">
            <p className="text-sm text-gray-500">Location: {plant.location}</p>
          </div>
        </div>
        <div className="pl-4 pr-4 mt-1 ">
          <div className="flex justify-between ">
            <h3>Upcoming Tasks</h3>
            <p className="bg-[#7AB76D] rounded-3xl w-8 text-center">{tasks.length} </p>
          </div>
          <TasksTable tasks={tasks} />
        </div>
      </div>
    </Link>
  );
}
