import UserListInterface from "../interfaces/UserList_Interface"

class UserListFilteredArray {
    public FilteredArray = (staticArray: Array<UserListInterface<string, number>>,
                            searchValue: string) => {

        return staticArray.filter((el) => {
            const parFirst = searchValue.toLowerCase().replace(/[ ]/g, '')
            const parSecond = el.name.toLowerCase().replace(/[ ]/g, '')
            return parSecond.includes(parFirst)
        })
    }}
    
export { UserListFilteredArray }