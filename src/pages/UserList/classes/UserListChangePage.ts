import UserListInterface from "../interfaces/UserList_Interface"

class UserListChangePage {
    public ChangePage = (newArray: Array<UserListInterface<string, number>>,
                         activePage: number,
                         quantityOfElements: number) => {
        return newArray.slice((activePage - 1) * quantityOfElements, activePage * quantityOfElements)
    }
}

export { UserListChangePage }