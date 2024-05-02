import { getCurrentUSer } from "@/lib/appwrite/api";
import { useContext, useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const INITIAL_USER = {
  id: "",
  name: "",
  email: "",
};
const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  checkAuthUser: async () => false,
};
const AuthContext = createContext(INITIAL_STATE);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(INITIAL_USER);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();
  const checkAuthUser = async () => {
    setIsLoading(true);
    try {
        console.log("inside getcurr context");
      const currentAccount = await getCurrentUSer();
      console.log(currentAccount);
      if (currentAccount) {
        setUser({
          id: currentAccount.$id,
          name: currentAccount.name,
          
          email: currentAccount.email,
         
        });
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (error) {
      console.log(
        "something happening wrong during the creating centralized context ",
        error
      );
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (
      localStorage.getItem("cookieFallback") === "[]" ||
      localStorage.getItem("cookieFallback") === null
    )
    //  navigate("/sign-in");
    checkAuthUser();
  }, []);

  const value = {
    user,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    setUser,
    checkAuthUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export const useUserContext = () => useContext(AuthContext);
