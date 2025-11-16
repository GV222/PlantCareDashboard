export default function Header() {
  return (
    <div className="flex items-center gap-2.5 h-20 w-100% border-b border-gray-300 px-4 bg-white">
      <img src="/Imagis/plant-icon.png" alt="Plant Icon" className="h-12 w-12" />
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold">Plant Care Dashboard</h1>
        <p className="text-sm text-gray-500">Nature your green</p>
      </div>
    </div>
  );
}
