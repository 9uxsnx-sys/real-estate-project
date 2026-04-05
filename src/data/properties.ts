export interface Property {
  id: string;
  name: string;
  location: string;
  price: number;
  category: 'For Sale' | 'For Rent' | 'For Investment' | 'Luxury';
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  featured?: boolean;
}

export const properties: Property[] = [
  {
    id: '1',
    name: 'The One',
    location: 'Bel Air, LA',
    price: 690000,
    category: 'For Investment',
    beds: 6,
    baths: 4,
    sqft: 2780,
    image: 'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Ffb4dcf76f877c99402aa9f144703427e9bd68ddd.jpg%3Fscale-down-to=1024?generation=1774857210276085&amp;alt=media',
    featured: true,
  },
  {
    id: '2',
    name: 'Ocean View Villa',
    location: 'Malibu, CA',
    price: 4250000,
    category: 'Luxury',
    beds: 5,
    baths: 6,
    sqft: 4500,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    featured: true,
  },
  {
    id: '3',
    name: 'Modern Hills Estate',
    location: 'Beverly Hills, CA',
    price: 3200000,
    category: 'For Sale',
    beds: 4,
    baths: 5,
    sqft: 3800,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  },
  {
    id: '4',
    name: 'Sunset Boulevard Penthouse',
    location: 'Hollywood Hills, CA',
    price: 1850000,
    category: 'For Sale',
    beds: 3,
    baths: 3,
    sqft: 2100,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
  },
  {
    id: '5',
    name: 'Coastal Investment Property',
    location: 'Santa Monica, CA',
    price: 850000,
    category: 'For Investment',
    beds: 3,
    baths: 2,
    sqft: 1650,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
  },
  {
    id: '6',
    name: 'Downtown Luxury Loft',
    location: 'Downtown LA, CA',
    price: 1200000,
    category: 'Luxury',
    beds: 2,
    baths: 2,
    sqft: 1850,
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800',
  },
  {
    id: '7',
    name: 'Family Home with Pool',
    location: 'Pasadena, CA',
    price: 950000,
    category: 'For Sale',
    beds: 4,
    baths: 3,
    sqft: 2400,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
  },
  {
    id: '8',
    name: 'Investment Opportunity',
    location: 'Venice Beach, CA',
    price: 720000,
    category: 'For Investment',
    beds: 2,
    baths: 2,
    sqft: 1400,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
  },
  {
    id: '9',
    name: 'Garden Estate',
    location: 'Brentwood, CA',
    price: 2800000,
    category: 'Luxury',
    beds: 5,
    baths: 4,
    sqft: 3600,
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800',
  },
  {
    id: '10',
    name: 'Charming Craftsman',
    location: 'Silver Lake, CA',
    price: 580000,
    category: 'For Rent',
    beds: 2,
    baths: 1,
    sqft: 1100,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800',
  },
  {
    id: '11',
    name: 'Hillside Contemporary',
    location: 'Hollywood Hills, CA',
    price: 2100000,
    category: 'For Sale',
    beds: 4,
    baths: 4,
    sqft: 3200,
    image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800',
  },
  {
    id: '12',
    name: 'Beachfront Condo',
    location: 'Malibu, CA',
    price: 1450000,
    category: 'For Sale',
    beds: 2,
    baths: 2,
    sqft: 1600,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
};
