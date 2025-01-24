import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@src/store/store'
import UserListTitles_Class from '../classes/UserListTitles_Class'
import { UserListData } from '../classes/UserListData'

const useDownloadData = (UserListDataExR: UserListData, UserListTitlesExR: UserListTitles_Class) => {

    /////States
    const UserListSearchValue = useSelector((store: RootState) => store.userList.UserListSearchValue)
    const ActivePage = useSelector((store: RootState) => store.userList.ActivePage)
    const QuantityOfElements = useSelector((store: RootState) => store.userList.QuantityOfElements)

    /////Dispatch
    const dispatch = useDispatch()

    /////Axios
    const downloadData = async (arg: string = 'newData') => {
        const data = localStorage.getItem('userListArray')

        data && arg === 'localData' ? UserListDataExR.SetStaticArray = JSON.parse(data)
                                    : arg === 'newData' ? (await UserListDataExR.getData(),
                                                           localStorage.setItem('userListArray', JSON.stringify(UserListDataExR.GetStaticArray)))
                                    : null

        UserListDataExR.sortArray(),
        dispatch({type: 'setUserListArray', payload: UserListDataExR.changePage(UserListSearchValue, ActivePage, QuantityOfElements)}),

        UserListTitlesExR.ActivateTitle(),
        dispatch({type: 'setUserListTitlesArray', payload: UserListTitlesExR.getTitlesArray})
    }

    return { downloadData }
}

export default useDownloadData