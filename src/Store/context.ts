import { createContext } from "react";

export type User = {
    id: number;
    name: string;
};

type GlobalState = {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
};


export const GlobalStateContext = createContext<GlobalState | undefined>(undefined);
