import { useEffect } from "react"
import { useInitContext } from "../../context/ContextProvider"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store"

export const useApp = () => {

    /////Context
    const contextValue = useInitContext()
    /////Router
    const navigate = useNavigate()
        /////States
    const nameActivePage = useSelector((store: RootState) => store.app.nameActivePage)
    /////Dispatch
    const dispatch = useDispatch()
    /////useEffects
    useEffect(() => {
        navigate(nameActivePage)
        localStorage.setItem('nameActivePage', nameActivePage)
    }, [nameActivePage])

    useEffect(() => {
        dispatch({type: 'setStateSearchArray', payload: contextValue.MenuListExemplar.getResultSearch('')});
        dispatch({type: 'setStateMenuList', payload: contextValue.MenuListExemplar.getCategories});
        dispatch({type: 'setStateTitleTrack', payload: contextValue.AudioPlayerClassExR.getFirstTrack.audioTitle});
        dispatch({type: 'setStateSrcTrack', payload: contextValue.AudioPlayerClassExR.getFirstTrack.audioSrc});
    }, [])

    return null
}