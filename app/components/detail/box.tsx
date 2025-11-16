export default function Box({ children, width = "w-full" }: { children: React.ReactNode; width?: string }) {
  return <div className={`bg-white border border-gray-200 rounded-2xl shadow-md p-6 ${width}`}>{children}</div>;
}
