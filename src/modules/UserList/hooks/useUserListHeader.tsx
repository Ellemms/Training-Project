import { useDispatch, useSelector } from "react-redux"
import { useInitContext } from "@src/context/ContextProvider"
import { RootState } from "@src/store/store"
import { ChangeEvent, useEffect } from "react"

const useUserListHeader = () => {
    
   /////Context
   const contextValue = useInitContext()

   /////State
   const QuantityOfElements = useSelector((store: RootState) => store.userList.QuantityOfElements)
   const ActivePage = useSelector((store: RootState) => store.userList.ActivePage)
   const UserListSearchValue = useSelector((store: RootState) => store.userList.UserListSearchValue)

   /////Dispatch
   const dispatch = useDispatch()

   /////Fcs
   const setUserListSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
       dispatch({type: 'setUserListSearchValue', payload: e.target.value})
   }
   
   useEffect(() => {
       dispatch({type: 'setUserListArray', payload: contextValue.UserListDataExR.changePage(UserListSearchValue, ActivePage, QuantityOfElements)})
       dispatch({type: 'resetNumberActivePage'})
   }, [UserListSearchValue])

    return { UserListSearchValue, setUserListSearchValue }
}

export default useUserListHeader