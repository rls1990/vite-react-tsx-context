import { createContext, useState } from "react";

interface AuthContextProps {
  auth: null | boolean;
  handleAuth: any;
}

const initialData: AuthContextProps = {
  auth: null,
  handleAuth: null,
};

const AuthContext = createContext<AuthContextProps>(initialData);

const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState<null | boolean>(null);

  const handleAuth = () => {
    if (auth) {
      setAuth(null);
    } else setAuth(true);
  };

  const data: AuthContextProps = { auth, handleAuth };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };

export default AuthContext;
