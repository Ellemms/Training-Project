import { UserListData } from "../features/UserListData";
import MenuList from "../modules/ModalMenu/classes/MenuListClass";
import AudioPlayerClass from "../modules/MusicPlayer/classes/MusicPlayerClass";
import UserListTitles_Class from "../pages/UserList/classes/UserListTitles_Class";

interface ClassesContextType {
    MenuListExemplar: MenuList;
    AudioPlayerClassExR: AudioPlayerClass<string>;
    UserListDataExR: UserListData;
    UserListTitlesExR: UserListTitles_Class;
}

const defClassExrsValue: ClassesContextType = {
    MenuListExemplar : new MenuList(),
    AudioPlayerClassExR : new AudioPlayerClass<string>(),
    UserListDataExR : new UserListData(),
    UserListTitlesExR : new UserListTitles_Class(),
}

export {defClassExrsValue}