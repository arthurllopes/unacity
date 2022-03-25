import { createContext, ReactNode, useContext, useState } from "react";

type NavigateContextType = {
    funcao: string,
    setFuncao: any,
};
type NavigateContextProviderProps = {
    children: ReactNode;
};
export const NavigateContext = createContext({} as NavigateContextType)

export function NavigateContextProvider({children}: NavigateContextProviderProps) {
    const [funcao, setFuncao] = useState('piscina')
    return (
        <NavigateContext.Provider value={{funcao, setFuncao}} >
            {children}
        </NavigateContext.Provider>
    )
}

export const useNavigate = () => {
    const context =  useContext(NavigateContext)
    return context
}