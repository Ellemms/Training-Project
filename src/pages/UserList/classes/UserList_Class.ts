import UserListInterface from "../interfaces/UserList_Interface"

class UserListClass {
    private _StaticArray:Array<UserListInterface<string,number>> = []
    private _newArray:Array<UserListInterface<string,number>> = []

    public get GetStaticArray() {
        return this._StaticArray
    }

    public setStaticArray(arg: Array<UserListInterface<string, number>>) {
        this._StaticArray = arg
    }

    public get GetNewArray() {
        return this._newArray
    }
    
    public UserListAdapter = (arg: any) => {
        return arg.map((el: any) => {
            return {
                name: el.firstname + ' ' + el.lastname,
                birthday: el.birthday,
                email: el.email,
                phone: el.phone,
                country: el.address.country,
                city: el.address.city,
                id: el.id
            }
        })
    }

    public sortArray = (arg: string = 'Name') => {
        switch (arg) {
            case 'Name': return this._StaticArray.sort((a, b) => a.name.localeCompare(b.name));
            case 'Birthday': return this._StaticArray.sort((a, b) => a.birthday.localeCompare(b.birthday));
            case 'Email': return this._StaticArray.sort((a, b) => a.email.localeCompare(b.email));
            case 'Phone': return this._StaticArray.sort((a, b) => a.phone.localeCompare(b.phone));
            case 'Country': return this._StaticArray.sort((a, b) => a.country.localeCompare(b.country));
            case 'City': return this._StaticArray.sort((a, b) => a.city.localeCompare(b.city));
            
            default: return null
        }
    }

    public ChangePage = (UserListSearchValue: string, activePage: number, quantityOfElements: number) => {

        this._newArray = this._StaticArray.filter((el) => {
            const parFirst = UserListSearchValue.toLowerCase().replace(/[ ]/g, '')
            const parSecond = el.name.toLowerCase().replace(/[ ]/g, '')
            return parSecond.includes(parFirst)
        })

        return this._newArray.slice((activePage - 1) * quantityOfElements, activePage * quantityOfElements)
    }}
    
export default UserListClass