import { createContext, useContext } from "react";

export const ReadyContext = createContext(false);
export const useReady = () => useContext(ReadyContext);