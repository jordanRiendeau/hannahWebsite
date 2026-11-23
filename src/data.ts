export type GalleryItem = {
  id: number
  title: string
  category: 'Apparel' | 'Drinkware' | 'Gifts' | 'Home Decor' | 'Events'
  description: string
  image: string
}

export const galleryItems: GalleryItem[] = [
  { id: 1, title: 'Coastal Birthday Tee', category: 'Apparel', description: 'Personalized celebration shirt', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85' },
  { id: 2, title: 'Seaside Tumbler', category: 'Drinkware', description: 'Custom insulated drinkware', image: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=1200&q=85' },
  { id: 3, title: 'Family Keepsake', category: 'Gifts', description: 'A meaningful custom gift', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=85' },
  { id: 4, title: 'Beach House Sign', category: 'Home Decor', description: 'Handcrafted coastal wall decor', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=85' },
  { id: 5, title: 'Wedding Details', category: 'Events', description: 'Personalized wedding accents', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85' },
  { id: 6, title: 'Custom Mug Set', category: 'Drinkware', description: 'Made-to-order personalized mugs', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=1200&q=85' },
  { id: 7, title: 'Celebration Sweatshirt', category: 'Apparel', description: 'Cozy custom crewneck', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=85' },
  { id: 8, title: 'Personalized Tote', category: 'Gifts', description: 'Everyday custom accessory', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=85' },
]

export const categories = [
  { title: 'Apparel', description: 'Shirts, sweatshirts & hoodies', image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=85' },
  { title: 'Drinkware', description: 'Tumblers, mugs & more', image: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=900&q=85' },
  { title: 'Personalized Gifts', description: 'Thoughtful items made just for them', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=85' },
  { title: 'Home Decor', description: 'Signs and accents for every room', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=85' },
  { title: 'Events & Celebrations', description: 'Weddings, parties & special moments', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=85' },
  { title: 'Custom Creations', description: 'Have an idea? Let’s create it', image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=900&q=85' },
]
