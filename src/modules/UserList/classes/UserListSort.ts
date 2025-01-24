import UserListInterface from "../interfaces/UserList_Interface";

class UserListSort {
    public sortArray = (arg: string, staticArray: Array<UserListInterface<string, number>>) => {
        switch (arg) {
            case 'Name': return staticArray.sort((a, b) => a.name.localeCompare(b.name));
            case 'Birthday': return staticArray.sort((a, b) => a.birthday.localeCompare(b.birthday));
            case 'Email': return staticArray.sort((a, b) => a.email.localeCompare(b.email));
            case 'Phone': return staticArray.sort((a, b) => a.phone.localeCompare(b.phone));
            case 'Country': return staticArray.sort((a, b) => a.country.localeCompare(b.country));
            case 'City': return staticArray.sort((a, b) => a.city.localeCompare(b.city));
            
            default: return null
        }
    }
}

export { UserListSort }