import { Plant } from "../../types/plant";
import plants from "../../data/plants.json";
import PlantDetailPage from "@/app/components/detail/plantDetailPage";

export default async function Page({ params }: { params: { id: string } }) {
  const plantsData = plants.plants as Plant[];
  const { id } = await params;
  console.log("server: plantsData length", plantsData.length);
  console.log("server: params.id", id);
  const plant = plantsData.find((item) => item.id === id);

  if (!plant) {
    return <div>Plant not found</div>;
  }
  return <PlantDetailPage plant={plant} />;
}
