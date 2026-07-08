import React, { createContext, useContext, useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {/* Toast Notification Popup Portal */}
      <div className="fixed bottom-6 right-6 z-[200] flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        {toasts.map(toast => (
          <div 
            key={toast.id} 
            className={`p-4 rounded-xl shadow-lg border-l-4 flex items-center gap-3 bg-white text-slate-800 pointer-events-auto ${
              toast.type === 'success' ? 'border-l-emerald-500' : 'border-l-rose-500'
            } animate-fade-in-up`}
          >
            {toast.type === 'success' ? (
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
            )}
            <span className="text-xs font-semibold">{toast.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
