import { useSelector } from 'react-redux'
import './UserListTitles.css'
import { RootState } from '@src/store/store'
import useSortUserList from '../../hooks/useSortUserList'
import { useInitContext } from '@src/context/ContextProvider'
import UserListTitles_Interface from '../../interfaces/UserListTitles_Interface'

const UseListTitles = () => {

   /////Context
   const contextValue = useInitContext()
   /////States
   const UserListTitleArray = useSelector((store: RootState) => store.userList.UserListTitlesArray)
   /////Hooks
   const SortUserList = useSortUserList(contextValue.UserListDataExR, contextValue.UserListTitlesExR)
   
   return (
      <div className="UserListTitles">
         {UserListTitleArray.map((el: UserListTitles_Interface<string>) => {
            return <p className={el.className}
                      id={el.id}
                      onClick={(e) => SortUserList(e)}
                      key={el.className}>{el.textContent}</p>
         })}
      </div>
   )
}

export default UseListTitles