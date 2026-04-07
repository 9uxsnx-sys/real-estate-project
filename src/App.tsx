import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Navigation } from './components/layout';
import { ScrollToTop } from './components/ScrollToTop';
import { PropertiesListing, PropertyDetail, Projects, ProjectDetail } from './pages';

export default function App() {
  const navigate = useNavigate();

  const handlePropertyClick = (id: string) => {
    navigate(`/property/${id}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
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
        <Route path="/projects" element={<><Navigation /><Projects /></>} />
        <Route path="/projects/:projectId" element={<><Navigation /><ProjectDetail /></>} />
      </Routes>
    </div>
  );
}
