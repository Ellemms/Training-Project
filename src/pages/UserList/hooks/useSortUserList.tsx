import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import UserListTitles_Class from "../classes/UserListTitles_Class"
import { UserListData } from "../../../features/UserListData"



const useSortUserList = (UserListDataExR: UserListData, UserListTitlesExR: UserListTitles_Class) => {

    const UserListSearchValue = useSelector((store: RootState) => store.userList.UserListSearchValue)
    const ActivePage = useSelector((store: RootState) => store.userList.ActivePage)
    const QuantityOfElements = useSelector((store: RootState) => store.userList.QuantityOfElements)

    const dispatch = useDispatch()

    const SortUserList = (e: React.MouseEvent<HTMLParagraphElement>) => {
        UserListDataExR.sortArray(e.currentTarget.textContent?.toString())
        dispatch({type: 'setUserListArray', payload: UserListDataExR.changePage(UserListSearchValue, ActivePage, QuantityOfElements)})
        UserListTitlesExR.ActivateTitle(e.currentTarget?.className)
        dispatch({type: 'setUserListTitlesArray', payload: UserListTitlesExR.getTitlesArray})
    }

    return SortUserList
 }

 export default useSortUserList