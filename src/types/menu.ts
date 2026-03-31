export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image?: string;
  dietaryInfo?: string[];
  priceNote?: string;
  addOns?: AddOn[];
  hasGradientBg?: boolean; // For items without photos that should use gradient background
}

export interface AddOn {
  name: string;
  price: number;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface MenuChapter {
  id: string;
  title: string;
  description: string;
  categories: MenuCategory[];
}
