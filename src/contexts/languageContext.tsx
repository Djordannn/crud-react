"use client";

import { create } from "domain";
import { FC, ReactNode, useState } from "react";
import { createContext } from "react";

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
}

export const languageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

interface ILanguageProviderProps {
  children: ReactNode;
}

const LanguageProvider: FC<ILanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>("en");
  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      {children}
    </languageContext.Provider>
  );
};

export default LanguageProvider;
// export default languageContext;
