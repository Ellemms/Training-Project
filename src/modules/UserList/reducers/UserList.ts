import UserListInterface from '../interfaces/UserList_Interface';
import UserListTitles_Interface from '../interfaces/UserListTitles_Interface';

const initialState = {
    UserListArray: [],
    UserListTitlesArray: [],
    UserListSelect_Visible: false,
    QuantityOfElements: 10,
    ActivePage: 1,
    TotalNumberPages: 1,
    UserListSearchValue: '',
}

export const UserListReducer = (state: UserListRoot = initialState, action: any) => {
    switch (action.type) {
        case 'setUserListArray':
            return {...state, UserListArray: action.payload};
        case 'setUserListTitlesArray':
            return {...state, UserListTitlesArray: action.payload};
        case 'setUserListSelect_Visible':
            return {...state, UserListSelect_Visible: !state.UserListSelect_Visible};
        case 'setQuantityOfElements':
            return {...state, QuantityOfElements: action.payload};
        case 'nextNumberActivePage':
            return {...state, ActivePage: state.ActivePage < state.TotalNumberPages ? state.ActivePage + 1 : state.ActivePage};
        case 'prevNumberActivePage':
            return {...state, ActivePage: state.ActivePage > 1 ? state.ActivePage - 1 : state.ActivePage};
        case 'resetNumberActivePage':
            return {...state, ActivePage: 1};
        case 'setTotalNumberPages':
            return {...state, TotalNumberPages: action.payload};
        case 'setUserListSearchValue':
            return {...state, UserListSearchValue: action.payload};
        default: return state
    }
}

export interface UserListRoot {
    UserListArray: Array<UserListInterface<string, number>>,
    UserListTitlesArray: Array<UserListTitles_Interface<string>>,
    UserListSelect_Visible: boolean,
    QuantityOfElements: number,
    ActivePage: number,
    TotalNumberPages: number,
    UserListSearchValue: string,
}