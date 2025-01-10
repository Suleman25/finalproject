import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import NaturePage from './Pages/NaturePage/NaturePage';
import PortraitPage from './Pages/PortraitPage/PortraitPage';
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import WeddingPage from './Pages/WeddingPage/WeddingPage';
import { ROUTES } from './config/routes';

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  return children;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path={ROUTES.LOGIN} element={<Login />} />
          
          {/* Protected Routes */}
          <Route
            path={ROUTES.HOME}
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to={ROUTES.HOME} />} />
          
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/services"
            element={
              <ProtectedRoute>
                <Services />
              </ProtectedRoute>
            }
          />

          <Route
            path={ROUTES.NATURE}
            element={
              <ProtectedRoute>
                <NaturePage />
              </ProtectedRoute>
            }
          />

          <Route
            path={ROUTES.PORTRAIT}
            element={
              <ProtectedRoute>
                <PortraitPage />
              </ProtectedRoute>
            }
          />

          <Route
            path={ROUTES.PRODUCT}
            element={
              <ProtectedRoute>
                <ProductsPage />
              </ProtectedRoute>
            }
          />

          <Route
            path={ROUTES.WEDDING}
            element={
              <ProtectedRoute>
                <WeddingPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;