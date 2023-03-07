import { createContext, useState } from "react";

export const AppContext = createContext(null);

function Context({ children }) {
  const [search, setSearch] = useState("");
  const [easterOpen,setEasterOpen] = useState(false)

  return (
    <AppContext.Provider value={{ search, setSearch, easterOpen, setEasterOpen }}>
      {children}
    </AppContext.Provider>
  );
}

export default Context