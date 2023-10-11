"use client";
import { useState, createContext, ReactNode, useContext } from "react";
import languages from '../langs/index'

const LANGUAGES: any = languages

const LanguageContext = createContext({} as any)

interface Props {
    children: ReactNode
}

const LanguageProv = ({ children }: Props) => {
    const [language, setLanguage] = useState<any>(LANGUAGES.bg)

    const changeLanguage = (event: any) => {
        setLanguage(LANGUAGES[event.target.value])
    }

    return (
        <LanguageContext.Provider value={{
            texts: language,
            changeLanguage
        }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

const getTexts = () => useContext(LanguageContext);

export {
    getTexts,
    LanguageProv,
    LanguageContext
}