import './UserListFooter.css'
import useUserListFooter from '../../hooks/useUserListFooter'
import useDownloadData from '../../hooks/useDownloadData'
import { useInitContext } from '@src/context/ContextProvider'

const UserListFooter = () => {

    /////Context
    const contextValue = useInitContext()

    /////Hooks
    const { UserListFooterSelect_Ul,
            setQuantityOfElements,
            dispatch,
            QuantityOfElements,
            ActivePage,
            TotalNumberPages } = useUserListFooter(contextValue.UserListDataExR, contextValue.RefUserListScroll)

    const { downloadData } = useDownloadData(contextValue.UserListDataExR, contextValue.UserListTitlesExR)

    return (
        <div className="UserListFooter_Container">
            <div className='UserListFooter_Select'>
                <ul className={UserListFooterSelect_Ul}>
                    {[50, 40, 30, 20, 10].map((el) => <li className='UserListFooterSelect_Li' key={el} onClick={(e) => setQuantityOfElements(e)}>{el}</li>)}
                </ul>
                <p className='UserListSelect_Quantity' onClick={() => dispatch({type: 'setUserListSelect_Visible'})}>{QuantityOfElements}</p>
            </div>
            <button className='UserListRefreshData' onClick={() => downloadData('newData')}>Refresh data</button>
            <div className='UserList_numberPageContainer'>
                <button className='UserList_btnPrevPage'
                        onClick={() => dispatch({type: 'prevNumberActivePage'})}>Prev page</button>
                <p className='UserList_numberPage'>{ActivePage} / {TotalNumberPages}</p>
                <button className='UserList_btnNextPage'
                        onClick={() => dispatch({type: 'nextNumberActivePage'})}>Next page</button>
            </div>
        </div>
    )
}

export default UserListFooter