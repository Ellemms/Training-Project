import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import './SearchComponent.css'
import { useInitContext } from '../../../../context/ContextProvider'

const SearchComponent = () => {

    /////Context
    const contextValue = useInitContext()
    /////Dispatch
    const dispatch = useDispatch()
    /////Fcs
    const onClickInputResult = () => {
        dispatch({type: 'setStateInputFocus', payload: true})
    }

    const onChangeResultSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const result = contextValue.MenuListExemplar.getResultSearch(e.target.value)
        dispatch({type: 'setStateSearchArray', payload: result})
    }

    return (
        <div className='searchContainer'>
            <div className='searchInputContainer'>
                <input className='searchInput'
                       ref={contextValue.searchInputRef}
                       placeholder='Search in projects...'
                       onClick={onClickInputResult}
                       onChange={(e) => {onChangeResultSearch(e)}}></input>
                <button className='searchButton'>
                    <span className='circleSpan'></span>
                    <span className='barSpan'></span>
                </button>
            </div>
        </div>
    )
}

export default SearchComponent