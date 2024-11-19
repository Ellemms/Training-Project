import UserListClass from '../classes/UserList_Class'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import UserListTitles_Class from '../classes/UserListTitles_Class'
import axios from 'axios'

const useGetDataNew = (UserListClassExR: UserListClass, UserListTitlesExR: UserListTitles_Class) => {

    /////States
    const UserListSearchValue = useSelector((store: RootState) => store.userList.UserListSearchValue)
    const ActivePage = useSelector((store: RootState) => store.userList.ActivePage)
    const QuantityOfElements = useSelector((store: RootState) => store.userList.QuantityOfElements)

    /////Dispatch
    const dispatch = useDispatch()

    /////Axios
    const getDataNew = () => {
        axios.get('https://fakerapi.it/api/v2/persons?_quantity=500&_birthday_start=2005-01-01')
            .then((res) => {
                UserListClassExR.setStaticArray(UserListClassExR.UserListAdapter(res.data.data)),
                UserListClassExR.sortArray(),
                dispatch({type: 'setUserListArray', payload: UserListClassExR.ChangePage(UserListSearchValue, ActivePage, QuantityOfElements)}),
                localStorage.setItem('userListArray', JSON.stringify(UserListClassExR.GetStaticArray))
                
                UserListTitlesExR.ActivateTitle()
                dispatch({type: 'setUserListTitlesArray', payload: UserListTitlesExR.getTitlesArray})
            })
            .catch(err => console.error(err))
    }

    return { getDataNew }
}

export default useGetDataNew