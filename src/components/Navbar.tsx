import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileDown } from 'lucide-react';
import { profile } from '../data/profile';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Projects', href: isHome ? '#projects' : '/#projects' },
    { name: 'Skills', href: isHome ? '#skills' : '/#skills' },
    { name: 'Certificate', href: isHome ? '#certificate' : '/#certificate' },
    { name: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHome && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF9]/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand Name */}
          <Link
            to="/"
            className="text-base font-semibold text-slate-900 hover:text-blue-700 transition-colors tracking-tight"
            aria-label="Muhammed Irfan M A Homepage"
          >
            {profile.name}
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-slate-900 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <a
              href={profile.resumeUrl}
              download="Muhammed_Irfan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-sm font-medium text-slate-700 hover:text-slate-900 py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={profile.resumeUrl}
                download="Muhammed_Irfan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 rounded-md text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 transition-colors"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
