import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Navigation } from './components/layout';
import { PropertiesListing, PropertyDetail } from './pages';

export default function App() {
  const navigate = useNavigate();

  const handlePropertyClick = (id: string) => {
    navigate(`/property/${id}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <PropertiesListing onPropertyClick={handlePropertyClick} />
            </>
          }
        />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
    </div>
  );
}
