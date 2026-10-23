import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#FAFAF9] text-slate-900 flex flex-col font-sans selection:bg-slate-200">
        <ScrollToTop />
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            {/* Direct legacy aliases to main single-page anchors */}
            <Route path="/about" element={<Navigate to="/#skills" replace />} />
            <Route path="/projects" element={<Navigate to="/#projects" replace />} />
            <Route path="/contact" element={<Navigate to="/#contact" replace />} />
            {/* 404 handler */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
