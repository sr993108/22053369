import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorMessage = ({ message, isDark }) => {
  return (
    <div className={`border rounded-xl p-4 mb-6 ${
      isDark ? 'bg-red-900/20 border-red-500/50' : 'bg-red-100 border-red-200'
    }`}>
      <div className="flex items-center gap-2">
        <AlertCircle className={`w-5 h-5 ${isDark ? 'text-red-400' : 'text-red-500'}`} />
        <p className={isDark ? 'text-red-400' : 'text-red-700'}>{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;