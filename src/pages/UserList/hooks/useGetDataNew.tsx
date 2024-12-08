import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import UserListTitles_Class from '../classes/UserListTitles_Class'
import { UserListData } from '../../../features/UserListData'

const useGetDataNew = (UserListDataExR: UserListData, UserListTitlesExR: UserListTitles_Class) => {

    /////States
    const UserListSearchValue = useSelector((store: RootState) => store.userList.UserListSearchValue)
    const ActivePage = useSelector((store: RootState) => store.userList.ActivePage)
    const QuantityOfElements = useSelector((store: RootState) => store.userList.QuantityOfElements)

    /////Dispatch
    const dispatch = useDispatch()

    /////Axios
    const getDataNew = () => {
        UserListDataExR.getData(),
        UserListDataExR.sortArray(),
        dispatch({type: 'setUserListArray', payload: UserListDataExR.changePage(UserListSearchValue, ActivePage, QuantityOfElements)}),
        localStorage.setItem('userListArray', JSON.stringify(UserListDataExR.GetStaticArray)),

        UserListTitlesExR.ActivateTitle(),
        dispatch({type: 'setUserListTitlesArray', payload: UserListTitlesExR.getTitlesArray})
    }

    return { getDataNew }
}

export default useGetDataNew