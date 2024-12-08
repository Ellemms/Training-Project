import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { useEffect } from 'react'
import UserListTitles_Class from '../classes/UserListTitles_Class'
import useGetDataNew from './useGetDataNew'
import { UserListData } from '../../../features/UserListData'

const useDownloadData = (UserListDataExR: UserListData, UserListTitlesExR: UserListTitles_Class) => {

    /////States
    const UserListSearchValue = useSelector((store: RootState) => store.userList.UserListSearchValue)
    const ActivePage = useSelector((store: RootState) => store.userList.ActivePage)
    const QuantityOfElements = useSelector((store: RootState) => store.userList.QuantityOfElements)

    /////Dispatch
    const dispatch = useDispatch()

    const { getDataNew } = useGetDataNew(UserListDataExR, UserListTitlesExR)

    useEffect(() => {
        const data = localStorage.getItem('userListArray')
        data
            ? (UserListDataExR.SetStaticArray = JSON.parse(data),
               UserListDataExR.sortArray(),
               dispatch({type: 'setUserListArray', payload: UserListDataExR.changePage(UserListSearchValue, ActivePage, QuantityOfElements)}),
               
               UserListTitlesExR.ActivateTitle(),
               dispatch({type: 'setUserListTitlesArray', payload: UserListTitlesExR.getTitlesArray}))
            : getDataNew()
    }, [])

    return null
}

export default useDownloadData