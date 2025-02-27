import HeaderModalMenu from './components/HeaderModalMenu/HeaderModalMenu'
import ListOfMenu from './components/ListOfMenu/ListOfMenu'
import Settings from './components/Settings/Settings'
import MusicPlayer from '../MusicPlayer/MusicPlayer'
import { useSelector } from 'react-redux'
import { RootState } from '@src/store/store'
import './modalMenu.css'

const ModalMenu = () => {
    
    /////States
    const stateVisibleMenu = useSelector((store: RootState) => store.modalMenu.stateVisibleMenu)
    /////Styles&Classes
    const modalMenuClass = stateVisibleMenu ? 'modalMenu_Show' : 'modalMenu_Hide'

    return (
        <div className={modalMenuClass}>
            <HeaderModalMenu/>
            <div className='menuScrollbarContainer'>
                <ListOfMenu/>
                <Settings/>
            </div>
            <MusicPlayer/>
        </div>
    )
}

export default ModalMenu