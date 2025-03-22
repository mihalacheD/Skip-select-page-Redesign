import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string | null;
  forbidden: boolean;
  created_at: Date;
  updated_at: Date;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

const fetchSkips = async (): Promise<Skip[]> => {
  const { data } = await apiClient.get("/skips/by-location?postcode=NR32&area=Lowestoft");

  return data.map((skip: Skip) => ({
    ...skip,
    created_at: new Date(skip.created_at),
    updated_at: new Date(skip.updated_at),
  }));
};


const useSkips = () => {
  return useQuery<Skip[], Error>({
    queryKey: ["skips"],
    queryFn: fetchSkips,
  });
};

export default useSkips;