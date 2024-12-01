import { createContext ,ReactNode ,useContext} from "react"
import { Terminal } from "../models/terminal.model"
import { useDataBack } from "../../../../../hooks/useDataBack";
import { terminalAdapter } from "../adapters/terminal.adapter";
const TerminalContext=createContext({
  data:[] as Terminal[],
  loading:false,
  error:null as Error | null,
  fetchData:()=>{}
})

export const TerminalProvider=({children}:{children:ReactNode})=>
  {
  const {data,loading,error,fetchData}=useDataBack<Terminal>({
    url:"/admin/terminal",
    jsonAdapter:terminalAdapter,
  })
  return (
    <TerminalContext.Provider value={{data , loading, error,fetchData}}>
      {children}
    </TerminalContext.Provider>
  )
}

export const useTerminal=()=>{
  const context=useContext(TerminalContext)
  if(context===undefined){
    throw new Error("useTerminal must be used within a TerminalProvider")
  }
  return context
}