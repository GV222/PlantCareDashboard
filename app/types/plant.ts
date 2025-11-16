export interface Plant {
  id: string;
  name: string;
  species: string;
  location: string;
  imageUrl: string;
  acquiredDate: string;
  lastWatered: string;
  lastFertilized: string;
  soilType: string;
  potSize: string;
  healthStatus: string;
  notes?: string;
}
export interface Task {
  id: string;
  plantId: string;
  type: "Water" | "Fertilize" | "Repot" | "Prune";
  dueDate: string;
  frequency: string;
  completed: boolean;
}
