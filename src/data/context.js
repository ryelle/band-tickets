import { createContext, useContext } from "react";

const BandContext = createContext(null);

export function BandProvider({ value, children }) {
  return <BandContext.Provider value={value}>{children}</BandContext.Provider>;
}

export function useBand() {
  return useContext(BandContext);
}
