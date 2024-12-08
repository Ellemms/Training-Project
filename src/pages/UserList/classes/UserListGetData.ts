import axios from "axios"

class UserListGetData {
    public userListGetData = async () => {
        axios.get('https://fakerapi.it/api/v2/persons?_quantity=500&_birthday_start=2005-01-01')
            .then((res) => {
                return res.data
            })
            .catch(err => console.error(err))
    }
}

export { UserListGetData }