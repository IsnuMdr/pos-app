'use client';

import React from 'react';
import { ThemeProvider } from './ThemeContext';

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider>
      {/* Add other providers here */}
      {children}
    </ThemeProvider>
  );
};
