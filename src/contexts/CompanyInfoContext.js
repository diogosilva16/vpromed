import { createContext } from "react";

export const CompanyInfoContext = createContext();

export function CompanyInfoContextProvider({children, value}) {
    return(
        <CompanyInfoContext.Provider value={value}>
            {children}
        </CompanyInfoContext.Provider>
    )
}