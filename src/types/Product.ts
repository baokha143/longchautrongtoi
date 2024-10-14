
// Định nghĩa interface Product và Price
export interface Price {
  id: number; 
  measureUnitCode: number; 
  measureUnitName: string; 
  isSellDefault: boolean; 
  price: number; 
  currencySymbol: string; 
  isDefault: boolean; 
  inventory: number;
  isInventory: boolean; 
  level: number; 
}

export interface Product {
  sku: string; 
  name: string;
  shortDescription?: string; 
  image: string; 
  prices: Price[]; 
  brand: string; 
  productRanking: number; 
  displayCode: number; 
  specification: string; 
  category?: {
    id: number;
    name: string; 
    parentName?: string; 
    level: number; 
  }[]; }