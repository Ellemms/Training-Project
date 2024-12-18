import './resultSearch.css'
import useHeaderResultSearch from "./hooks/useResultSearch"
import { useInitContext } from '@src/context/ContextProvider'

const HeaderResultSearch = () => {

    /////Context
    const contextValue = useInitContext()
    /////Hooks
    const { stateSearchArray, searchListContainer, dispatch } = useHeaderResultSearch(contextValue.searchInputRef)

    return (
        <div className={searchListContainer}>
                <ul className='searchListUl'>
                    {stateSearchArray?.map((el: string, i: number) => {
                        return <li key={i}
                                   className='searchListElement'
                                   onClick={() => dispatch({type: 'setNameActivePage', payload: el}) }>{el}</li>
                    })}
                </ul>
        </div>
    )
} 

export default HeaderResultSearch