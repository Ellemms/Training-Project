import UserListInterface from "../interfaces/UserList_Interface"

class UserListChangePage {
    public ChangePage = (staticArray: Array<UserListInterface<string, number>>,
                         searchValue: string,
                         activePage: number,
                         quantityOfElements: number) => {

        const newArray = staticArray.filter((el) => {
            const parFirst = searchValue.toLowerCase().replace(/[ ]/g, '')
            const parSecond = el.name.toLowerCase().replace(/[ ]/g, '')
            return parSecond.includes(parFirst)
        })

        return newArray.slice((activePage - 1) * quantityOfElements, activePage * quantityOfElements)
    }}
    
export { UserListChangePage }