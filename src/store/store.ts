import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { MusicPlayerReducer, MusicPlayerRoot } from "../modules/MusicPlayer/reducers/MusicPlayer";
import { ModalMenuReducer, ModalMenuRoot } from "../modules/ModalMenu/reducers/ModalMenu";
import { AppReducer, AppRootState } from "../main/reducers/globalReducer";
import { UserListReducer, UserListRoot } from "../pages/UserList/reducers/UserList";
import { HeaderSearch, HeaderSearchRootState } from "../modules/HeaderContainer/reducers/headerSearch";

/////
const Reducers = combineReducers({
    app: AppReducer,
    headerSearch: HeaderSearch,
    musicPlayer: MusicPlayerReducer,
    modalMenu: ModalMenuReducer,
    userList: UserListReducer,
})

/////
export interface RootState {
    app: AppRootState,
    headerSearch: HeaderSearchRootState
    musicPlayer: MusicPlayerRoot,
    modalMenu: ModalMenuRoot,
    userList: UserListRoot,
}

const store = configureStore({reducer: Reducers})

export default store