import UserListTitles from './components/UserListTitles/UserListTitles'
import UserListItems from "./components/UserListItems/UserListItems"
import UserListHeader from "./components/UserListHeader/UserListHeader"
import './UserList.css'
import UserListFooter from "./components/UserListFooter/UserListFooter"
import useDownloadData from './hooks/useDownloadData'
import { useInitContext } from '../../context/ContextProvider'

const UserListComponent = () => {

    /////Context
    const contextValue = useInitContext()

    useDownloadData(contextValue.UserListDataExR, contextValue.UserListTitlesExR)

    return (
        <div className="UserListContent">
            <UserListHeader/>
            <UserListTitles/>
            <div className="UserListScrollContainer" ref={contextValue.RefUserListScroll}>
                <UserListItems/>
            </div>
            <UserListFooter/>
        </div>
    )
}

export default UserListComponent