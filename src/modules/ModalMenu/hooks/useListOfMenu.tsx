import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import { useInitContext } from "../../../context/ContextProvider"

const useListOfMenu = () => {

    /////Context
    const contextValue = useInitContext()

    /////States
    const stateMenuList = useSelector((store: RootState) => store.modalMenu.stateMenuList)
    const visibleListProjects = useSelector((store: RootState) => store.modalMenu.visibleListProjects)

    /////Dispatch
    const dispatch = useDispatch()

    /////Fcs
    const listVisible = (index: number) => {
        dispatch({type: 'setStateMenuList', payload: contextValue.MenuListExemplar.setVisibleSubcategory(index)})
    }
    
    const changeThePage = (page: string) => {
        dispatch({type: 'setNameActivePage', payload: page})
    }
    
    /////Styles&Classes
    const sectionsContainer = visibleListProjects ? 'sectionsContainer_Show' : 'sectionsContainer_Hide'

    return { sectionsContainer,
             stateMenuList,
             listVisible,
             changeThePage,
             dispatch }
}

export default useListOfMenu