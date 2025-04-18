import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/templates/Layout';
import Home from '../pages/Home';
import Experience from '../pages/Experience';
import Experiences from '../pages/Experiences';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Resume from '../pages/Resume';

// Simple NotFound component
const NotFound = () => (
  <div style={{ textAlign: 'center', padding: '50px' }}>
    <h2>Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
  </div>
);

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Main route */}
          <Route path="/" element={<Home />} />
          
          {/* Experience routes */}
          <Route path="/experience" element={<Experiences />} />
          <Route path="/experience/:jobId" element={<Experience />} />
          
          {/* Skills route */}
          <Route path="/skills" element={<Skills />} />
          
          {/* Projects route */}
          <Route path="/projects" element={<Projects />} />
          
          {/* About route */}
          <Route path="/about" element={<About />} />
          
          {/* Resume route */}
          <Route path="/resume" element={<Resume />} />
          
          {/* 404 catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
