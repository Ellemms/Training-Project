import { useSelector } from 'react-redux'
import { RootState } from '@src/store/store'
import './UserListItems.css'
import UserListInterface from '../../interfaces/UserList_Interface'

const UserListItems = () => {

    /////States
    const UserListArray = useSelector((store: RootState) => store.userList.UserListArray)

    return (
        <ul className="UserListItems_Ul">
            {UserListArray.map((el: UserListInterface<string, number>) => {
                return  <li className='UserListItems_Li' key={el.id}>
                            <div className='UserListItemsLi_Name'>
                                <span className='UserListItems_Avatar'>
                                        {el.name[0]}
                                </span>
                                <p className='UserListItemsLi_FirstLastName'>{el.name}</p>
                            </div>
                            <div className='UserListItemsLi_Birthday'>{el.birthday}</div>
                            <div className='UserListItemsLi_Email'>{el.email}</div>
                            <div className='UserListItemsLi_Phone'>{el.phone}</div>
                            <div className='UserListItemsLi_Country'>{el.country}</div>
                            <div className='UserListItemsLi_City'>{el.city}</div>
                        </li>
            })}
        </ul>
    )
}

export default UserListItems