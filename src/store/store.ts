import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AppReducer, AppRootState } from "@src/main/reducers/globalReducer";
import { MusicPlayerReducer, MusicPlayerRoot } from "@src/modules/MusicPlayer/reducers/MusicPlayer";
import { ModalMenuReducer, ModalMenuRoot } from "@src/modules/ModalMenu/reducers/ModalMenu";
import { UserListReducer, UserListRoot } from "@src/pages/UserList/reducers/UserList";
import { HeaderSearch, HeaderSearchRootState } from "@src/modules/HeaderContainer/reducers/headerSearch";

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