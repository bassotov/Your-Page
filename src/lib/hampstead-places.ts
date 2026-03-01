import {
  Coffee,
  Store,
  ShoppingCart,
  TreePine,
  type LucideIcon,
} from "lucide-react";

export type PlaceCategory = "cafe" | "specialty" | "groceries" | "parks";

export interface Place {
  id: string;
  name: string;
  address: string;
  category: PlaceCategory;
  description: string;
  highlights?: string[]; // emoji highlights of what to buy/see
  coordinates: [number, number]; // [lng, lat]
}

export const categoryConfig: Record<
  PlaceCategory,
  { color: string; icon: LucideIcon; label: string }
> = {
  cafe: {
    color: "bg-amber-500",
    icon: Coffee,
    label: "Cafe & Restaurant",
  },
  specialty: {
    color: "bg-red-500",
    icon: Store,
    label: "Specialty Food",
  },
  groceries: {
    color: "bg-blue-500",
    icon: ShoppingCart,
    label: "Groceries",
  },
  parks: {
    color: "bg-green-600",
    icon: TreePine,
    label: "Parks & Walking",
  },
};

export const places: Place[] = [
  // Cafes & Restaurants
  {
    id: "ginger-and-white",
    name: "Ginger & White",
    address: "4A-5A Perrins Court, NW3 1QS",
    category: "cafe",
    description: "Charming British cafe. A Hampstead institution since 2009.",
    highlights: ["☕ Great coffee", "🥐 Baked goods", "🍳 Breakfast"],
    coordinates: [-0.17776, 51.5557],
  },
  {
    id: "oliviya",
    name: "Oliviya",
    address: "71 Hampstead High Street, NW3 1QP",
    category: "cafe",
    description: "Lebanese restaurant, perfect for a proper meal out.",
    highlights: ["🥙 Lebanese cuisine", "🥗 Vegan options", "🍽️ Great dinner"],
    coordinates: [-0.17774, 51.556],
  },
  {
    id: "pizza-bun",
    name: "Pizza Bun",
    address: "301 West End Lane, NW6 1RD",
    category: "cafe",
    description: "Halal pizza spot with customizable options.",
    highlights: ["🍕 Mixed Pizza Bun"],
    coordinates: [-0.1926, 51.5513],
  },
  {
    id: "have-an-avo",
    name: "Have An Avo",
    address: "100 Fortune Green Road, NW6 1DS",
    category: "cafe",
    description: "Healthy breakfast cafe with amazing brunch options.",
    highlights: ["🍳 Amazing Shakshuka", "🥑 Avocado toast", "🫓 Hummus", "🥞 Pancakes"],
    coordinates: [-0.1966, 51.5546],
  },

  // Specialty Food
  {
    id: "hampstead-butcher-west",
    name: "Hampstead Butcher & Providore",
    address: "244 West End Lane, NW6 1LG",
    category: "specialty",
    description: "Neighbourhood butcher with free-range British meat.",
    highlights: ["🥩 Quality meat", "🥚 Best eggs", "🍷 Wine"],
    coordinates: [-0.1914, 51.5512],
  },
  {
    id: "hampstead-butcher-hampstead",
    name: "Hampstead Butcher & Providore",
    address: "56 Rosslyn Hill, NW3 1ND",
    category: "specialty",
    description: "The original location opened in 2010.",
    highlights: ["🥩 Quality meat", "🥚 Best eggs", "🍷 Wine"],
    coordinates: [-0.17338, 51.55517],
  },
  {
    id: "bayley-and-sage",
    name: "Bayley & Sage",
    address: "25-26 Hampstead High Street, NW3 1QA",
    category: "specialty",
    description: "Fresh food retailer. New to Hampstead in 2025!",
    highlights: ["🧀 Great cheese", "🍰 Amazing tiramisu", "🥖 Delicatessen"],
    coordinates: [-0.17648, 51.55594],
  },
  {
    id: "planet-organic",
    name: "Planet Organic",
    address: "6 Hampstead High Street, NW3 1PR",
    category: "specialty",
    description: "Vibrant health food store with organic produce.",
    highlights: ["🥜 Nut butters", "🍫 Good chocolate", "🌾 Buckwheat"],
    coordinates: [-0.17496, 51.5556],
  },
  {
    id: "artichoke",
    name: "Artichoke",
    address: "36 Heath Street, NW3 6TE",
    category: "specialty",
    description: "Family-run grocer & juice bar since 1888.",
    highlights: ["🥬 Fresh veggies", "🥜 Cashew butter", "☕ Espresso almond butter"],
    coordinates: [-0.17844, 51.55578],
  },
  {
    id: "grocery-post",
    name: "Grocery Post",
    address: "280 West End Lane, NW6 1LJ",
    category: "specialty",
    description: "Corner shop deluxe with cult groceries and great coffee.",
    highlights: ["☕ Fresh coffee beans", "🍬 Various sweets", "🫒 Olive oil"],
    coordinates: [-0.1917, 51.5518],
  },

  // Groceries
  {
    id: "tesco-express",
    name: "Tesco Express",
    address: "23-27 Heath Street, NW3 6TR",
    category: "groceries",
    description: "Convenient supermarket, 50m from the tube.",
    highlights: ["🛒 Everyday essentials", "🕐 Open late"],
    coordinates: [-0.17885, 51.55585],
  },
  {
    id: "berezka",
    name: "Berezka",
    address: "188 Finchley Road, NW3 6BX",
    category: "groceries",
    description: "Russian grocery store with Eastern European products.",
    highlights: ["🇷🇺 Russian products", "🥟 Dumplings", "🌾 Buckwheat"],
    coordinates: [-0.18225, 51.55022],
  },
  {
    id: "little-waitrose",
    name: "Little Waitrose",
    address: "319 West End Lane, NW6 1RN",
    category: "groceries",
    description: "Compact Waitrose for quality everyday essentials.",
    highlights: ["🐟 Salmon", "🫐 Berries", "🥬 Greens"],
    coordinates: [-0.19278, 51.55151],
  },

  // Parks & Walking
  {
    id: "golders-green",
    name: "Golders Green",
    address: "Golders Green, NW11",
    category: "parks",
    description: "Pleasant area for walking with green spaces.",
    highlights: ["🚶 Nice walks", "🌳 Green spaces"],
    coordinates: [-0.185963, 51.564342],
  },
  {
    id: "kenwood-house",
    name: "Kenwood House",
    address: "3 Hampstead Lane, NW3 7JR",
    category: "parks",
    description: "Beautiful historic house with stunning grounds.",
    highlights: ["🏛️ Historic house", "🌸 Gardens", "🖼️ Art collection"],
    coordinates: [-0.1678, 51.5715],
  },
  {
    id: "hampstead-heath",
    name: "Hampstead Heath",
    address: "Hampstead Heath, NW3",
    category: "parks",
    description: "790 acres of ancient parkland. Crown jewel of North London.",
    highlights: ["🏊 Swimming ponds", "🌅 City views", "🌳 Ancient woodland"],
    coordinates: [-0.1637, 51.5605],
  },
  {
    id: "hampstead-heath-extension",
    name: "Hampstead Heath Extension",
    address: "9 Heathgate, NW11 7AR",
    category: "parks",
    description: "The quieter northern extension of the Heath.",
    highlights: ["🎬 Harry Potter filming", "🏠 Hermione's house", "🚶 Quiet walks"],
    coordinates: [-0.1825, 51.5785],
  },
  {
    id: "hampstead-heath-ponds",
    name: "Hampstead Heath Ponds",
    address: "Hampstead Heath, NW5",
    category: "parks",
    description: "Famous swimming ponds in the heart of the Heath.",
    highlights: ["🏊 Wild swimming", "🌿 Natural ponds"],
    coordinates: [-0.159198, 51.563392],
  },
];

// Center of Hampstead for the map
export const HAMPSTEAD_CENTER: [number, number] = [-0.188893, 51.557503];
export const DEFAULT_ZOOM = 15;
