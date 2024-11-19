import { createContext, ReactNode, useRef, useContext, useMemo } from "react"
import { defClassExrsValue } from "./ClassExRsContext"
import { defRefsValue } from "./RefsContext"

/////Context
const combineContext = {...defClassExrsValue, ...defRefsValue}
/////CreateContext
export const Context = createContext(combineContext)
/////InitContext
export const useInitContext = () => useContext(Context)

interface ContextProviderProps {
    children: ReactNode
}

const ContextProvider = (props: ContextProviderProps) => {
    
    /////Refs
    const searchInputRef = useRef<HTMLInputElement>(null)
    const refAudio = useRef<HTMLAudioElement>(null)
    const RefUserListScroll = useRef<HTMLDivElement>(null)
    
    const contextValue = useMemo(() => ({...combineContext,
                          searchInputRef: searchInputRef,
                          refAudio: refAudio,
                          RefUserListScroll: RefUserListScroll}), [combineContext])

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider