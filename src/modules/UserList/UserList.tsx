import UserListTitles from './components/UserListTitles/UserListTitles'
import UserListItems from "./components/UserListItems/UserListItems"
import UserListHeader from "./components/UserListHeader/UserListHeader"
import './UserList.css'
import UserListFooter from "./components/UserListFooter/UserListFooter"
import useDownloadData from './hooks/useDownloadData'
import { useInitContext } from '@src/context/ContextProvider'
import { useEffect } from 'react'

const UserListComponent = () => {

    /////Context
    const contextValue = useInitContext()

    const { downloadData } = useDownloadData(contextValue.UserListDataExR, contextValue.UserListTitlesExR)
    
    useEffect(() => {downloadData('localData')}, [])

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