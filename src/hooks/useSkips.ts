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
  totalPrice: number;
  totalPricePerWeek: string;
}

const fetchSkips = async (): Promise<Skip[]> => {
  const { data } = await apiClient.get("/skips/by-location?postcode=NR32&area=Lowestoft");


  return data.map((skip: Skip) => {
    const vatAmount = (skip.price_before_vat * skip.vat) / 100;
    const transportCost = skip.transport_cost || 0;
    const perTonneCost = skip.per_tonne_cost || 0;
    const permitCost = skip.allowed_on_road ? 0 : 84; // Dacă nu e permis pe drum, adăugăm taxa de permis

    const totalPrice = (skip.price_before_vat + transportCost + perTonneCost) + vatAmount + permitCost;
    const weeks = skip.hire_period_days / 7;
    const totalPricePerWeek = Math.round(totalPrice / weeks);

    return {
      ...skip,
      created_at: new Date(skip.created_at),
      updated_at: new Date(skip.updated_at),
      totalPrice,
      totalPricePerWeek,
    };
  });
};

const useSkips = () => {
  return useQuery<Skip[], Error>({
    queryKey: ["skips"],
    queryFn: fetchSkips,
  });
};

export default useSkips;