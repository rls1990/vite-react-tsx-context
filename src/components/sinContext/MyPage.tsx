import { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

const initialTheme = "ligth";
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

const translator: Translator = {
  es: {
    headerTitle: "Mi aplicación sin Context API",
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
    headerTitle: "My application without Context API",
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

export const MyPage = () => {
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translator[language]);
  const [auth, setAuth] = useState<null | boolean>(null);

  const handleTheme = (e: any) => {
    //console.log(e.target.value);
    if (e.target.value === "ligth") setTheme("ligth");
    else setTheme("dark");
  };

  const handleLanguage = (e: any) => {
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translator.es);
    } else {
      setLanguage("en");
      setTexts(translator.en);
    }
  };

  const handleAuth = () => {
    if (auth) {
      setAuth(null);
    } else setAuth(true);
  };

  return (
    <div className="my-page">
      <Header
        theme={theme}
        handleTheme={handleTheme}
        texts={texts}
        handleLanguage={handleLanguage}
        auth={auth}
        handleAuth={handleAuth}
      />
      <Main theme={theme} texts={texts} auth={auth} />
      <Footer theme={theme} texts={texts} />
    </div>
  );
};
