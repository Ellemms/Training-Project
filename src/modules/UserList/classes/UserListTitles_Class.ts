import UserListTitles_Interface from "../interfaces/UserListTitles_Interface";

class UserListTitles_Class {
    private _titlesArray: Array<UserListTitles_Interface<string>> = [
        {textContent: 'Name', className: 'UserListTitles_Name', id: 'active'},
        {textContent: 'Birthday', className: 'UserListTitles_Birthday', id: ''},
        {textContent: 'Email', className: 'UserListTitles_Email', id: ''},
        {textContent: 'Phone', className: 'UserListTitles_Phone', id: ''},
        {textContent: 'Country', className: 'UserListTitles_Country', id: ''},
        {textContent: 'City', className: 'UserListTitles_City', id: ''},
    ]

    get getTitlesArray() {
        return this._titlesArray
    }

    public ActivateTitle = (argClassName: string = 'UserListTitles_Name') => {
        this._titlesArray = this._titlesArray.map((el) => ({...el, id: el.className === argClassName ? 'active' : ''}))
    }
}

export default UserListTitles_Class