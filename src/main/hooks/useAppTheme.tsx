import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { useEffect } from "react"

const useAppTheme = () => {

    const colorStyle = useSelector((store: RootState) => store.app.colorStyle)

    useEffect(() => {
        document.documentElement.style.setProperty('--bg-color', colorStyle === 'dark' ? 'rgba(33, 33, 33, 0.5)' : 'rgba(255, 255, 255, 0.75)')
        document.documentElement.style.setProperty('--text-color', colorStyle === 'dark' ? '#fff' : '#333')
        ///Header
        document.documentElement.style.setProperty('--burger-span-bg-color', colorStyle === 'dark' ? 'rgba(255, 255, 255, 0.75)' : 'rgba(33, 33, 33, 0.75)')
        ///HeaderSearch
        document.documentElement.style.setProperty('--header-search-border-width', colorStyle === 'dark' ? '0px' : '1px')
        document.documentElement.style.setProperty('--header-search-place-color', colorStyle === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(33, 33, 33, 0.5)')
        document.documentElement.style.setProperty('--header-search-btn-bg', colorStyle === 'dark' ? 'rgba(33, 33, 33, 0.25)' : 'rgba(255, 255, 255, 0.25)')
        document.documentElement.style.setProperty('--header-search-circle-bg', colorStyle === 'dark' ? '#fff' : '#333')
        document.documentElement.style.setProperty('--result-li-hover', colorStyle === 'dark' ? 'rgba(255, 255, 255, 0.25)' : 'rgba(33, 33, 33, 0.25)')
        ///ModalMenu
        document.documentElement.style.setProperty('--scroll-thumb-bg', colorStyle === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(33, 33, 33, 0.5)')
        document.documentElement.style.setProperty('--modal-menu-container-bg', colorStyle === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(33, 33, 33, 0.1)')
        document.documentElement.style.setProperty('--modal-menu-list-hover-bg', colorStyle === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(33, 33, 33, 0.1)')
        ///Settings
        document.documentElement.style.setProperty('--settings-container-bg', colorStyle === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(33, 33, 33, 0.1)')
        document.documentElement.style.setProperty('--settings-slider-translate', colorStyle === 'dark' ? 'translateX(100%)' : 'translateX(0%)')
        document.documentElement.style.setProperty('--settings-slider-bg', colorStyle === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(33, 33, 33, 0.3)')
        ///MusicPlayer
        document.documentElement.style.setProperty('--music-player-bg', colorStyle === 'dark' ? 'rgba(33, 33, 33, 0.1)' : 'rgba(255, 255, 255, 0.1)')
        document.documentElement.style.setProperty('--music-player-shadow', colorStyle === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(33, 33, 33, 0.1)')
        document.documentElement.style.setProperty('--music-player-bar-bg', colorStyle === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(33, 33, 33, 0.5)')
        ///Layer
        document.documentElement.style.setProperty('--layer-bg', colorStyle === 'dark' ? 'rgba(33, 33, 33, 0.5)' : 'rgba(255, 255, 255, 0.25)')
        ///UserList
        document.documentElement.style.setProperty('--us-li-select-ul-bg', colorStyle === 'dark' ? 'rgba(33, 33, 33, 0.85)' : 'rgba(255, 255, 255, 0.85)')
        document.documentElement.style.setProperty('--us-li-select-li-bg', colorStyle === 'dark' ? 'rgba(255, 255, 255, 0.25)' : 'rgba(33, 33, 33, 0.25)')
        document.documentElement.style.setProperty('--us-li-select-btns-hover-bg', colorStyle === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(33, 33, 33, 0.15)')
        document.documentElement.style.setProperty('--us-li-border-bg', colorStyle === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(33, 33, 33, 0.5)')
        document.documentElement.style.setProperty('--us-li-search-bg', colorStyle === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(33, 33, 33, 0.25)')
        document.documentElement.style.setProperty('--us-li-search-place-color', colorStyle === 'dark' ? 'rgba(33, 33, 33, 0.5)' : 'rgba(255, 255, 255, 0.5)')
        document.documentElement.style.setProperty('--us-li-search-focus', colorStyle === 'dark' ? 'rgba(255, 255, 255, 0.75)' : 'rgba(33, 33, 33, 0.5)')
        document.documentElement.style.setProperty('--us-li-search-color', colorStyle === 'dark' ? '#333' : '#fff')
        document.documentElement.style.setProperty('--us-li-avatar-bg', colorStyle === 'dark' ? '#fff' : '#333')
        document.documentElement.style.setProperty('--us-li-avatar-color', colorStyle === 'dark' ? '#333' : '#fff')
        document.documentElement.style.setProperty('--us-li-titles-hover', colorStyle === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(33, 33, 33, 0.15)')
        document.documentElement.style.setProperty('--us-li-titles-triangle', colorStyle === 'dark' ? '#fff' : '#333')

    }, [colorStyle])

    return null
}

export default useAppTheme