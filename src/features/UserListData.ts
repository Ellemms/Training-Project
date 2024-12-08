import UserListInterface from "../pages/UserList/interfaces/UserList_Interface"
import { UserDataAdapter } from "../pages/UserList/classes/UserListDataAdapter"
import { UserListChangePage } from "../pages/UserList/classes/UserListChangePage"
import { UserListSort } from "../pages/UserList/classes/UserListSort"
import { UserListGetData } from "../pages/UserList/classes/UserListGetData"

class UserListData {
    private _staticArray:Array<UserListInterface<string, number>> = []
    private _userDataAdapter: UserDataAdapter
    private _userListChangePage: UserListChangePage
    private _userListSort: UserListSort
    private _userListGetData: UserListGetData

    constructor () {
        this._userDataAdapter = new UserDataAdapter ()
        this._userListChangePage = new UserListChangePage()
        this._userListSort = new UserListSort()
        this._userListGetData = new UserListGetData()
    }
    /////GetAndSet
    public get GetStaticArray() {
        return this._staticArray
    }
    public set SetStaticArray(arg: Array<UserListInterface<string, number>>) {
        this._staticArray = arg
    }
    /////Methods
    public getData = () => {
        const data = this._userListGetData.userListGetData()
        this._staticArray = this._userDataAdapter.adaptUserData(data)
    }
    public changePage = (searchValue: string,
                         activePage: number,
                         quantityOfElements: number) => {

        return this._userListChangePage.ChangePage(this._staticArray, searchValue, activePage, quantityOfElements)
    }
    public sortArray = (arg: string = 'Name') => {
        this._userListSort.sortArray(arg, this._staticArray)
    }
}

export { UserListData }