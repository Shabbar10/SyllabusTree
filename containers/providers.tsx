import ActiveSectionContextProvider from "./active-section";
import React, { Provider } from "react";
import ThemeContextProvider from "./theme-context";
import { AuthProvider } from "../app/context/AuthContext";


type ProvidersProps = {
    children: React.ReactNode
}

export default function Providers({children}: ProvidersProps){
    return(
        <AuthProvider>
        <ActiveSectionContextProvider>
        <ThemeContextProvider>

            {children}
        </ThemeContextProvider>
        </ActiveSectionContextProvider>
        </AuthProvider>
    )
}