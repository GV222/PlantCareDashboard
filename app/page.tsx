import { Plant } from "./types/plant";
import plants from "./data/plants.json";
import Header from "./components/home/headerHome";
import PlantsList from "./components/home/plnatsList";

export default function Home() {
  const plantsData = plants.plants as Plant[];
  console.log(plantsData);
  return (
    <>
      <Header />
      <PlantsList />
    </>
  );
}
