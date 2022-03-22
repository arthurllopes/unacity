import { createContext, ReactNode, useContext, useState } from "react";

type NavigateContextType = {
    category: string,
    setCategory: any,
    funcao: string,
    setFuncao: any,
};
type NavigateContextProviderProps = {
    children: ReactNode;
};
export const NavigateContext = createContext({} as NavigateContextType)

export function NavigateContextProvider({children}: NavigateContextProviderProps) {
    const [category, setCategory] = useState('restaurante')
    const [funcao, setFuncao] = useState('piscina')

    return (
        <NavigateContext.Provider value={{category, setCategory, funcao, setFuncao}} >
            {children}
        </NavigateContext.Provider>
    )
}

export const useNavigate = () => {
    const context =  useContext(NavigateContext)
    return context
}