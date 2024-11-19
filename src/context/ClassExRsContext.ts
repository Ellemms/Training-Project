import MenuList from "../modules/ModalMenu/classes/MenuListClass";
import AudioPlayerClass from "../modules/MusicPlayer/classes/MusicPlayerClass";
import UserListClass from "../pages/UserList/classes/UserList_Class";
import UserListTitles_Class from "../pages/UserList/classes/UserListTitles_Class";

interface ClassesContextType {
    MenuListExemplar: MenuList;
    AudioPlayerClassExR: AudioPlayerClass<string>;
    UserListClassExR: UserListClass;
    UserListTitlesExR: UserListTitles_Class;
}

const defClassExrsValue: ClassesContextType = {
    MenuListExemplar : new MenuList(),
    AudioPlayerClassExR : new AudioPlayerClass<string>(),
    UserListClassExR : new UserListClass(),
    UserListTitlesExR : new UserListTitles_Class(),
}

export {defClassExrsValue}