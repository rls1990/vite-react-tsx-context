import React, { createContext, useState } from "react";

interface ThemeContextProps {
  theme: string;
  handleTheme: any;
}

const initialData: ThemeContextProps = {
  theme: "ligth",
  handleTheme: null,
};

const ThemeContext = createContext<ThemeContextProps>(initialData);

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(initialData.theme);

  const handleTheme = (e: any) => {
    //console.log(e.target.value);
    if (e.target.value === "ligth") setTheme("ligth");
    else setTheme("dark");
  };

  const data: ThemeContextProps = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
