import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import UserListClass from "../classes/UserList_Class"
import UserListTitles_Class from "../classes/UserListTitles_Class"



const useSortUserList = (UserListClassExR: UserListClass, UserListTitlesExR: UserListTitles_Class) => {

    const UserListSearchValue = useSelector((store: RootState) => store.userList.UserListSearchValue)
    const ActivePage = useSelector((store: RootState) => store.userList.ActivePage)
    const QuantityOfElements = useSelector((store: RootState) => store.userList.QuantityOfElements)

    const dispatch = useDispatch()

    const SortUserList = (e: React.MouseEvent<HTMLParagraphElement>) => {
        UserListClassExR.sortArray(e.currentTarget.textContent?.toString())
        dispatch({type: 'setUserListArray', payload: UserListClassExR.ChangePage(UserListSearchValue, ActivePage, QuantityOfElements)})
        UserListTitlesExR.ActivateTitle(e.currentTarget?.className)
        dispatch({type: 'setUserListTitlesArray', payload: UserListTitlesExR.getTitlesArray})
    }

    return SortUserList
 }

 export default useSortUserList