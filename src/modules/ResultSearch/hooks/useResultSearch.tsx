import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { RootState } from "@src/store/store"

const useHeaderResultSearch = (searchInputRef: React.ForwardedRef<HTMLInputElement>) => {

    /////State
    const stateSearchArray = useSelector((store: RootState) => store.headerSearch.stateSearchArray)
    const stateInputFocus = useSelector((store: RootState) => store.headerSearch.stateInputFocus)

    /////Dispatch
    const dispatch = useDispatch()

    /////Functions
    const closeResultSearch = (e: MouseEvent) => {
        e.target !== (searchInputRef as React.RefObject<HTMLInputElement>).current ? dispatch({type: 'setStateInputFocus', payload: false}) : null
    }

    useEffect(() => {
        document.body.addEventListener('click', closeResultSearch)
        return () => document.body.removeEventListener('click', closeResultSearch)
    }, [])

    /////Styles&Classes
    const searchListContainer = stateInputFocus && stateSearchArray.length > 0 ? 'searchListContainer' : 'searchListContainer_None'

    return { stateSearchArray, searchListContainer, dispatch }
}

export default useHeaderResultSearch