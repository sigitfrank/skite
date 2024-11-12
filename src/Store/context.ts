import { createContext } from "react";
import { User } from "../Types/user";

type GlobalState = {
    user: User | null;
};

export const GlobalStateContext = createContext<GlobalState | undefined>(undefined);
