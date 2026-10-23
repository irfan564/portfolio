import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-28 text-center space-y-5">
      <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-xs font-mono font-semibold text-slate-700">
        404 — Page Not Found
      </div>
      <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
        The page you are looking for does not exist.
      </h1>
      <p className="text-sm text-slate-600 max-w-md mx-auto">
        Please check the URL or head back to the main portfolio overview.
      </p>
      <div className="pt-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 transition-colors shadow-sm"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
};
