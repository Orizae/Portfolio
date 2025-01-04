'use client'

import React, { createContext, ReactElement, ReactNode, useContext, useState } from "react";

type LanguageContextType = {
  language: string;
  toggleLanguage: () => void;
}

const LanguageContex = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  }

  return (
    <LanguageContex.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContex.Provider>
  )
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContex);
  if (!context) {
    throw new Error('UseLanguage must be used within a LanguageProvider');
  }
  return context
}
