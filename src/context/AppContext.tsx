import React, { createContext, useState } from "react"

interface IApp{
    idBook:string
    setIdBook:(idBook:string)=>void
}

interface IAppProvider{
    children:React.ReactNode
}

export const AppContext=createContext<IApp>({} as IApp)

export const AppContextProvider:React.FC<IAppProvider>=({children})=>{
const[idBook,setIdBook]=useState("")
return(
    <AppContext.Provider value={{idBook,setIdBook}}>
        {children}
    </AppContext.Provider>
)
}

