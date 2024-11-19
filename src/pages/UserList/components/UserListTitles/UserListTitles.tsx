import { useSelector } from 'react-redux'
import './UserListTitles.css'
import { RootState } from '../../../../store/store'
import useSortUserList from '../../hooks/useSortUserList'
import { useInitContext } from '../../../../context/ContextProvider'

const UseListTitles = () => {

   /////Context
   const contextValue = useInitContext()
   /////States
   const UserListTitleArray = useSelector((store: RootState) => store.userList.UserListTitlesArray)
   /////Hooks
   const SortUserList = useSortUserList(contextValue.UserListClassExR, contextValue.UserListTitlesExR)
   
   return (
      <div className="UserListTitles">
         {UserListTitleArray.map((el) => {
            return <p className={el.className}
                      id={el.id}
                      onClick={(e) => SortUserList(e)}
                      key={el.className}>{el.textContent}</p>
         })}
      </div>
   )
}

export default UseListTitles