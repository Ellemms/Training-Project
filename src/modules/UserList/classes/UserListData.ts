import UserListInterface from "../interfaces/UserList_Interface"
import { UserDataAdapter } from "./UserListDataAdapter"
import { UserListFilteredArray } from "./UserListFilteredArray"
import { UserListSort } from "./UserListSort"
import { UserListGetData } from "./UserListGetData"
import { UserListChangePage } from "./UserListChangePage"

class UserListData {
    private _staticArray:Array<UserListInterface<string, number>> = []
    private _newArray:Array<UserListInterface<string, number>> = []
    private _userDataAdapter: UserDataAdapter
    private _userListFilteredArray: UserListFilteredArray
    private _userListSort: UserListSort
    private _userListGetData: UserListGetData
    private _userListChangePage: UserListChangePage

    constructor () {
        this._userDataAdapter = new UserDataAdapter ()
        this._userListFilteredArray = new UserListFilteredArray()
        this._userListSort = new UserListSort()
        this._userListGetData = new UserListGetData()
        this._userListChangePage = new UserListChangePage()
    }
    /////GetAndSet
    public get GetStaticArray() {
        return this._staticArray
    }
    public set SetStaticArray(arg: Array<UserListInterface<string, number>>) {
        this._staticArray = arg
    }
    public get GetNewArray() {
        return this._newArray
    }
    /////Methods
    public getData = async () => {
        const data = await this._userListGetData.userListGetData()
        this._staticArray = this._userDataAdapter.adaptUserData(data)
    }
    public changePage = (searchValue: string,
                         activePage: number,
                         quantityOfElements: number) => {
        this._newArray = this._userListFilteredArray.FilteredArray(this._staticArray, searchValue)
        return this._userListChangePage.ChangePage(this._newArray, activePage, quantityOfElements)
    }
    public sortArray = (arg: string = 'Name') => {
        this._userListSort.sortArray(arg, this._staticArray)
    }
}

export { UserListData }