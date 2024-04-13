import { FooterContext } from "./FooterContext";
import { HeaderContext } from "./HeaderContext";
import { MainContext } from "./MainContext";
import { ThemeProvider } from "../../context/ThemeContext";
import { LanguageProvider } from "../../context/LanguageContext";
import { AuthProvider } from "../../context/AuthContext";

export const MyPageContext = () => {
  return (
    <div className="my-page">
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <HeaderContext />
            <MainContext />
            <FooterContext />
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};
