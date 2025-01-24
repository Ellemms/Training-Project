class UserDataAdapter {
    public adaptUserData = (arg: any) => {
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
}

export { UserDataAdapter }