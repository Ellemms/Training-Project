import useUserListHeader from '../../hooks/useUserListHeader'
import './UserListHeader.css'

const UserListHeader = () => {

    const { UserListSearchValue, setUserListSearchValue } = useUserListHeader()

    return (
        <div className="UserListHeader">
            <h1 className="UserListHeader_Title">Persons</h1>
            <input className='UserListHeader_Search'
                   type='text'
                   value={UserListSearchValue}
                   onChange={(e) => setUserListSearchValue(e)}
                   placeholder='Search in persons...'/>
        </div>
    )
}

export default UserListHeader