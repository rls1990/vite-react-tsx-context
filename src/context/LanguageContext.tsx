import { createContext, useState } from "react";

const initialLanguage = "es";

interface Translator {
  [key: string]: {
    headerTitle: string;
    headerSubtitle: string;
    headerLigth: string;
    headerDark: string;
    buttonLogin: string;
    buttonLogout: string;
    mainWelcome: string;
    mainHello: string;
    mainContent: string;
    footerTitle: string;
  };
}

interface Texts {
  headerTitle: string;
  headerSubtitle: string;
  headerLigth: string;
  headerDark: string;
  buttonLogin: string;
  buttonLogout: string;
  mainWelcome: string;
  mainHello: string;
  mainContent: string;
  footerTitle: string;
}

const translator: Translator = {
  es: {
    headerTitle: "Mi aplicación CON Context API",
    headerSubtitle: "Mi cabecera",
    headerLigth: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesión",
    buttonLogout: "Cerrar Sesión",
    mainWelcome: "Bienbenid@ invitad@",
    mainHello: "Hola usuari@",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pié de página",
  },
  en: {
    headerTitle: "My application with Context API",
    headerSubtitle: "My header",
    headerLigth: "Ligth",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello User",
    mainContent: "My main context",
    footerTitle: "My footer",
  },
};

interface LanguageContextProps {
  texts: Texts;
  handleLanguage: any;
}

const initialData: LanguageContextProps = {
  texts: translator[initialLanguage],
  handleLanguage: null,
};

const LanguageContext = createContext<LanguageContextProps>(initialData);

const LanguageProvider = ({ children }: any) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState<Texts>(translator[language]);

  const handleLanguage = (e: any) => {
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translator.es);
    } else {
      setLanguage("en");
      setTexts(translator.en);
    }
  };

  const data: LanguageContextProps = { texts, handleLanguage };
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;
