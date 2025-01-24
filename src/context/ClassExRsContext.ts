import { UserListData } from "@src/modules/UserList/classes/UserListData";
import MenuList from "@src/modules/ModalMenu/classes/MenuListClass";
import AudioPlayerClass from "@src/modules/MusicPlayer/classes/MusicPlayerClass";
import UserListTitles_Class from "@src/modules/UserList/classes/UserListTitles_Class";


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