import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import UserListClass from '../classes/UserList_Class'
import { useEffect } from 'react'
import UserListTitles_Class from '../classes/UserListTitles_Class'
import useGetDataNew from './useGetDataNew'

const useDownloadData = (UserListClassExR: UserListClass, UserListTitlesExR: UserListTitles_Class) => {

    /////States
    const UserListSearchValue = useSelector((store: RootState) => store.userList.UserListSearchValue)
    const ActivePage = useSelector((store: RootState) => store.userList.ActivePage)
    const QuantityOfElements = useSelector((store: RootState) => store.userList.QuantityOfElements)

    /////Dispatch
    const dispatch = useDispatch()

    const { getDataNew } = useGetDataNew(UserListClassExR, UserListTitlesExR)

    useEffect(() => {
        const data = localStorage.getItem('userListArray')
        data
            ? (UserListClassExR.setStaticArray(JSON.parse(data)),
               UserListClassExR.sortArray(),
               dispatch({type: 'setUserListArray', payload: UserListClassExR.ChangePage(UserListSearchValue, ActivePage, QuantityOfElements)}),
               
               UserListTitlesExR.ActivateTitle(),
               dispatch({type: 'setUserListTitlesArray', payload: UserListTitlesExR.getTitlesArray}))
            : getDataNew()
    }, [])

    return null
}

export default useDownloadData