import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import InstitutionsPage from './pages/InstitutionsPage';
import ForInstitutionsPage from './pages/ForInstitutionsPage';
import AboutPage from './pages/AboutPage';
import AboutTeamPage from './pages/AboutTeamPage';
import FeaturesPage from './pages/FeaturesPage';
import NewsPage from './pages/NewsPage';
import NewsArticlePage from './pages/NewsArticlePage';
import BlogPage from './pages/BlogPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import MediaKitPage from './pages/MediaKitPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import BookDemoPage from './pages/BookDemoPage';
import SplineDebug from './pages/SplineDebug';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminLogin from './pages/admin/AdminLogin';
import AdminPages from './pages/admin/AdminPages';
import AdminTestimonials from './pages/admin/AdminTestimonials';
import AdminContent from './pages/admin/AdminContent';
import AdminMedia from './pages/admin/AdminMedia';
import AdminSettings from './pages/admin/AdminSettings';
import AdminBlockEditor from './pages/admin/AdminBlockEditor';
import ProtectedRoute from './components/admin/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { CMSProvider } from './context/CMSContext';
import { ThemeProvider } from './context/ThemeContext';
import ChatbotWidget from './components/common/ChatbotWidget';

function App() {
  return (
    <AuthProvider>
      <CMSProvider>
        <ThemeProvider>
          <Router>
            <div className="flex flex-col min-h-screen page-surface">
              <div className="page-overlay" />
              <Routes>
                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin" element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                } />
                <Route path="/admin/blocks" element={
                  <ProtectedRoute>
                    <AdminBlockEditor />
                  </ProtectedRoute>
                } />
                <Route path="/admin/pages" element={
                  <ProtectedRoute>
                    <AdminPages />
                  </ProtectedRoute>
                } />
                <Route path="/admin/testimonials" element={
                  <ProtectedRoute>
                    <AdminTestimonials />
                  </ProtectedRoute>
                } />
                <Route path="/admin/content" element={
                  <ProtectedRoute>
                    <AdminContent />
                  </ProtectedRoute>
                } />
                <Route path="/admin/media" element={
                  <ProtectedRoute>
                    <AdminMedia />
                  </ProtectedRoute>
                } />
                <Route path="/admin/settings" element={
                  <ProtectedRoute>
                    <AdminSettings />
                  </ProtectedRoute>
                } />
                
                {/* Public Routes */}
                <Route path="/" element={
                  <>
                    <Header />
                    <HomePage />
                    <Footer />
                  </>
                } />
                <Route path="/contact" element={<Navigate to="/book-demo" replace />} />
                <Route path="/about" element={
                  <>
                    <Header />
                    <AboutPage />
                    <Footer />
                  </>
                } />
                <Route path="/about-team" element={
                  <>
                    <Header />
                    <AboutTeamPage />
                    <Footer />
                  </>
                } />
                <Route path="/book-demo" element={
                  <>
                    <Header />
                    <BookDemoPage />
                    <Footer />
                  </>
                } />
                <Route path="/features" element={
                  <>
                    <Header />
                    <FeaturesPage />
                    <Footer />
                  </>
                } />
                {/* HIDDEN ROUTES - Uncomment to restore */}
                {/* <Route path="/product" element={
                  <>
                    <Header />
                    <ProductPage />
                    <Footer />
                  </>
                } />
                <Route path="/institutions" element={
                  <>
                    <Header />
                    <InstitutionsPage />
                    <Footer />
                  </>
                } />
                <Route path="/for-institutions" element={
                  <>
                    <Header />
                    <ForInstitutionsPage />
                    <Footer />
                  </>
                } />
                <Route path="/news" element={
                  <>
                    <Header />
                    <NewsPage />
                    <Footer />
                  </>
                } />
                <Route path="/news/:id" element={
                  <>
                    <Header />
                    <NewsArticlePage />
                    <Footer />
                  </>
                } />
                <Route path="/blog" element={
                  <>
                    <Header />
                    <BlogPage />
                    <Footer />
                  </>
                } />
                <Route path="/case-studies" element={
                  <>
                    <Header />
                    <CaseStudiesPage />
                    <Footer />
                  </>
                } />
                <Route path="/media-kit" element={
                  <>
                    <Header />
                    <MediaKitPage />
                    <Footer />
                  </>
                } />
                <Route path="/privacy-policy" element={
                  <>
                    <Header />
                    <PrivacyPolicyPage />
                    <Footer />
                  </>
                } />
                <Route path="/spline-debug" element={
                  <>
                    <Header />
                    <SplineDebug />
                    <Footer />
                  </>
                } /> */}
              </Routes>
              <ChatbotWidget />
            </div>
          </Router>
        </ThemeProvider>
      </CMSProvider>
    </AuthProvider>
  );
}

export default App;
