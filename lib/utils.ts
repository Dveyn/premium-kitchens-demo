import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
  }).format(price);
}

export function calculateKitchenPrice(formData: {
  kitchenType: string;
  length: number;
  facadeMaterial: string;
  countertopMaterial: string;
  additionalOptions: string[];
}): number {
  const basePrice = 50000;
  
  const typeMultiplier: Record<string, number> = {
    modular: 1,
    corner: 1.2,
    "u-shaped": 1.5,
    linear: 0.8,
  };
  
  const facadePrice: Record<string, number> = {
    mdf: 15000,
    solid: 35000,
    plastic: 10000,
  };
  
  const countertopPrice: Record<string, number> = {
    ldsp: 8000,
    stone: 25000,
    quartz: 40000,
  };
  
  const optionsPrice: Record<string, number> = {
    lighting: 15000,
    appliances: 80000,
    hardware: 20000,
  };
  
  let total = basePrice * (typeMultiplier[formData.kitchenType] || 1);
  total += (facadePrice[formData.facadeMaterial] || 0) * formData.length;
  total += (countertopPrice[formData.countertopMaterial] || 0) * formData.length;
  
  formData.additionalOptions.forEach((option) => {
    total += optionsPrice[option] || 0;
  });
  
  return Math.round(total);
}
