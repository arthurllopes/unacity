import { createContext, ReactNode, useContext, useState } from "react";

type NavigateContextType = {
    category: string,
    setCategory: any,
};
type NavigateContextProviderProps = {
    children: ReactNode;
};
export const NavigateContext = createContext({} as NavigateContextType)

export function NavigateContextProvider({children}: NavigateContextProviderProps) {
    const [category, setCategory] = useState('')

    return (
        <NavigateContext.Provider value={{category, setCategory}} >
            {children}
        </NavigateContext.Provider>
    )
}

export const useNavigate = () => {
    const context =  useContext(NavigateContext)
    return context
}