"use client";
import { useState, createContext, ReactNode, useContext } from "react";
import languages from '../language/index'

const LANGUAGES: any = languages

const LanguageCtx = createContext({} as any)

interface Props {
    children: ReactNode
}

const LanguageProv = ({ children }: Props) => {
    const [language, setLanguage] = useState<any>(LANGUAGES.english)

    const changeLanguage = (event: any) => {
        setLanguage(LANGUAGES[event.target.value])
    }

    return (
        <LanguageCtx.Provider value={{
            texts: language,
            changeLanguage
        }}
        >
            {children}
        </LanguageCtx.Provider>
    )
}

const getTexts = () => useContext(LanguageCtx);

export {
    getTexts,
    LanguageProv,
    LanguageCtx
}