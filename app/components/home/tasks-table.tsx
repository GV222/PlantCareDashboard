import { Task } from "@/app/types/plant";

export default function TasksTable({ tasks }: { tasks: Task[] }) {
  return (
    <div className="w-auto mt-3 border border-gray-200 rounded-2xl overflow-hidden bg-white">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left text-sm font-semibold p-3">Task</th>
            <th className="text-right text-sm font-semibold p-3">Due</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-b border-gray-200 last:border-0">
              <td className="p-3 text-sm text-gray-700">{task.type}</td>
              <td className="p-3 text-right text-sm text-gray-500">{task.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
