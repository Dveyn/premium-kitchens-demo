export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  fullDescription: string;
  price: number;
  image: string;
  images: string[];
  features: string[];
  specifications: {
    materials?: string[];
    dimensions?: string;
    colors?: string[];
    warranty?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export interface CalculatorFormData {
  kitchenType: string;
  length: number;
  facadeMaterial: string;
  countertopMaterial: string;
  additionalOptions: string[];
}
