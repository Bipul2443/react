
export interface Product {
    id: number;
    name: string;
    category: 'health' | 'fitness';
    subCategory: string;
    price: number;
    discountPrice?: number;
    rating: number;
    image: string;
    description: string;
    featured?: boolean;
    new?: boolean;
    bestSeller?: boolean;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: "Multivitamin Complex",
      category: "health",
      subCategory: "supplements",
      price: 29.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Complete daily multivitamin with essential nutrients for optimal health and immune support.",
      featured: true,
      bestSeller: true
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      category: "fitness",
      subCategory: "electronics",
      price: 199.99,
      discountPrice: 159.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Track your workouts, heart rate, sleep cycles, and more with this advanced fitness tracker.",
      featured: true,
      new: true
    },
    {
      id: 3,
      name: "Adjustable Dumbbells Set",
      category: "fitness",
      subCategory: "equipment",
      price: 299.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Space-saving adjustable dumbbells that replace 15 sets of weights with a simple dial system.",
      bestSeller: true
    },
    {
      id: 4,
      name: "Plant Protein Powder",
      category: "health",
      subCategory: "nutrition",
      price: 39.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "100% plant-based protein with all essential amino acids and no artificial ingredients.",
      new: true
    },
    {
      id: 5,
      name: "Yoga Mat Premium",
      category: "fitness",
      subCategory: "accessories",
      price: 69.99,
      discountPrice: 49.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Extra thick, eco-friendly yoga mat with alignment lines and non-slip surface.",
      featured: true
    },
    {
      id: 6,
      name: "Omega-3 Fish Oil",
      category: "health",
      subCategory: "supplements",
      price: 24.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1577313126925-53a814e0df1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Ultra-pure, pharmaceutical grade omega-3 fish oil for heart and brain health.",
      bestSeller: true
    },
    {
      id: 7,
      name: "Resistance Bands Set",
      category: "fitness",
      subCategory: "equipment",
      price: 29.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1598971639058-bb4741c18b17?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Set of 5 resistance bands with different tension levels for versatile home workouts."
    },
    {
      id: 8,
      name: "Probiotics Supplement",
      category: "health",
      subCategory: "supplements",
      price: 34.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1628616111353-5e76413fd766?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "50 billion CFU probiotic blend for optimal gut health and immune system support."
    },
    {
      id: 9,
      name: "Foam Roller",
      category: "fitness",
      subCategory: "recovery",
      price: 35.99,
      discountPrice: 29.99,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1607962977588-81072756c544?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "High-density foam roller for muscle recovery, improved flexibility and injury prevention."
    },
    {
      id: 10,
      name: "Melatonin Sleep Aid",
      category: "health",
      subCategory: "supplements",
      price: 14.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1595348020949-87cdfbb44174?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Natural sleep supplement to help regulate sleep cycles and improve sleep quality."
    },
    {
      id: 11,
      name: "Bluetooth Earbuds",
      category: "fitness",
      subCategory: "electronics",
      price: 89.99,
      discountPrice: 69.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Sweat-proof, wireless earbuds with 8-hour battery life perfect for workouts.",
      new: true
    },
    {
      id: 12,
      name: "Collagen Peptides",
      category: "health",
      subCategory: "nutrition",
      price: 39.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1596488637861-bbbc6a97a41a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Grass-fed collagen peptides for skin, hair, nails, joints and gut health support.",
      bestSeller: true
    },
    {
      id: 13,
      name: "Kettlebell Set",
      category: "fitness",
      subCategory: "equipment",
      price: 149.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1603233720024-4ee0fb541826?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Set of 3 premium cast iron kettlebells with vinyl coating for versatile strength training."
    },
    {
      id: 14,
      name: "Vitamin D3 Supplement",
      category: "health",
      subCategory: "supplements",
      price: 19.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "High-potency vitamin D3 supplement for immune support and bone health."
    },
    {
      id: 15,
      name: "Jump Rope",
      category: "fitness",
      subCategory: "equipment",
      price: 19.99,
      discountPrice: 15.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1615671524827-ded7e024b56b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Adjustable, tangle-free jump rope with ball bearings for smooth rotation."
    },
    {
      id: 16,
      name: "Greens Superfood Powder",
      category: "health",
      subCategory: "nutrition",
      price: 49.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1610725664285-7c67443073e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Blend of 40+ vegetables, fruits and superfoods for daily nutrition and energy.",
      featured: true
    }
  ];
  