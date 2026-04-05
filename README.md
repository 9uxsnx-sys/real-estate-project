# VistaHaven Real Estate

A modern, responsive real estate property listing website built with React, TypeScript, and Tailwind CSS.

## Overview

VistaHaven is a clean and scalable property listing platform designed to showcase premium real estate properties. The website features a unified search and filter system, responsive grid/list views, and a modular component architecture ready for future Frappe backend integration.

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS v4
- **Routing:** React Router DOM
- **Fonts:** Geist (custom font family)
- **Build Tool:** Vite

## Features

### Property Listing Page
- **Unified Search Bar:** Location search with integrated filters (sort, property type, project, space range)
- **Responsive Layout:**
  - Mobile: Stacked filter layout with 2-column grid
  - Tablet: 3-row filter layout
  - Desktop: Single row with all controls
- **View Modes:** Toggle between grid (3 columns) and list (2 columns on desktop)
- **Smart Filtering:** Real-time filtering by location, project, property type, and space range

### Property Cards
- **Grid View:** Vertical cards with image, title, project, location, specs, and price
- **List View:** Horizontal cards optimized for mobile, tablet, and desktop
- **Consistent Design:** Subtle shadows, rounded corners, hover effects

## Project Structure

```
src/
├── components/
│   ├── layout/               # Layout components
│   │   ├── Navigation.tsx    # Sticky navigation with logo and CTA
│   │   └── index.ts          # Barrel export
│   │
│   ├── property/             # Property display components
│   │   ├── PropertyCard.tsx  # Grid and list view cards
│   │   └── index.ts          # Barrel export
│   │
│   ├── property-detail/      # (Future) Property page sections
│   │   └── README.md         # Placeholder for Frappe integration
│   │
│   ├── filters/              # Filter components
│   │   ├── HeroSection.tsx   # Unified search & filter bar
│   │   └── index.ts          # Barrel export
│   │
│   └── ui/                   # (Future) Reusable UI primitives
│       └── README.md
│
├── pages/
│   ├── PropertiesListing.tsx # Main listing page
│   └── index.ts              # Barrel export
│
├── types/                    # TypeScript definitions
│   ├── property.ts           # Property + section interfaces
│   ├── project.ts            # Project interface
│   └── index.ts              # Barrel export
│
├── utils/                    # Helper functions
│   ├── formatters.ts         # formatPrice, getPropertyTypeLabel
│   └── index.ts              # Barrel export
│
├── hooks/                    # (Future) Custom React hooks
│   └── index.ts              # Placeholder
│
├── services/               # (Future) API layer
│   └── frappe/               # Frappe REST API integration
│       └── index.ts          # Placeholder
│
├── data/
│   └── properties.ts         # Static property data
│
├── styles/
│   ├── globals.css           # Global styles + font faces
│   └── fonts.css             # Font definitions
│
└── App.tsx                   # Main app with routing
```

## Architecture Philosophy

### Clean Imports with Barrel Exports
All folders have `index.ts` files for clean, consistent imports:
```typescript
// Instead of this:
import { PropertyCard } from '../components/property/PropertyCard';

// We use this:
import { PropertyCard } from '../components/property';
```

### Component Organization
- **Layout:** Navigation, Footer, and page structure components
- **Property:** Anything related to property display (cards, grids, lists)
- **Filters:** Search, filter inputs, and filter state management
- **Property-Detail:** (Future) Individual property page sections
- **UI:** (Future) Generic reusable components (Button, Input, Modal, etc.)

### Type Safety
All types are centralized in `src/types/`:
- `Property` - Main property interface
- `PropertyFeature` - (Future) Features child table structure
- `PropertyAmenity` - (Future) Amenities child table structure
- `PropertyGalleryImage` - (Future) Gallery child table structure
- `PropertyDetail` - Extended property with all sections

## Data Flow

### Current (Static Data)
1. Properties defined in `data/properties.ts`
2. `PropertiesListing` component manages filter state
3. `HeroSection` receives filter state and callbacks
4. `PropertyCard` receives filtered property data
5. Clicking a card navigates to `/property/:id`

### Future (Frappe Backend)
1. Frappe DocTypes: Project, Property, PropertySection, etc.
2. `services/frappe/` will contain API client
3. `hooks/` will contain data fetching hooks:
   - `useProperties()` - Fetch with filters
   - `useProperty(id)` - Single property
   - `useFilters()` - Dynamic filter options
4. `store/` (future) will manage global state

## Styling

### Tailwind Configuration
- Custom colors: `rgb(44,44,44)` (text), `rgb(102,252,117)` (accent)
- Custom font: Geist (300, 400, 600, 700 weights)
- Consistent spacing: 4px base unit
- Max container width: 1360px

### Design Tokens
- **Border radius:** `rounded-3xl` for cards, `rounded-full` for buttons/inputs
- **Shadows:** `0 4px 12px rgba(0,0,0,0.1)` for card elevation
- **Typography:** Geist font family throughout

## Development

### Installation
```bash
npm install
```

### Running Locally
```bash
npm run dev
```
Server runs at `http://localhost:3000/`

### Build for Production
```bash
npm run build
```

## Future Roadmap

### Phase 2: Component Splitting
- Split PropertyCard into smaller components
- Create PropertyGrid and PropertyList containers
- Build reusable UI components (Button, Input, Select)

### Phase 3: Property Detail Page
- Create `/property/:id` route
- Build section components:
  - `PropertyHero` - Gallery + key info
  - `PropertyDescription` - Text section
  - `PropertyFeatures` - Icon list
  - `PropertyAmenities` - Amenities grid
  - `PropertyLocation` - Map + address

### Phase 4: Frappe Integration
- Create Frappe REST API client
- Add data fetching hooks
- Replace static data with API calls
- Implement dynamic filters from Frappe

### Phase 5: Admin Features
- Create admin layout
- Build property management interface
- Add image upload functionality
- Create property form with validation

## Contributing

This project follows a strict folder structure. When adding new components:
1. Place in appropriate folder
2. Export from folder's `index.ts`
3. Import using barrel export pattern
4. Add types to `src/types/`
5. Add utilities to `src/utils/`

## License

Copyright 2024 VistaHaven. All rights reserved.

  Run `npm run dev` to start the development server.