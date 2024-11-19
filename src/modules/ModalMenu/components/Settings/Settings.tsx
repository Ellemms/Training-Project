import "./settings.css"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../store/store"

const Settings = () => {

    /////States
    const visibleSettings = useSelector((store: RootState) => store.modalMenu.stateVisibleSettings)

    /////Dispatch
    const dispatch = useDispatch()

    /////Fcs
    const setStyleTheme = (style: string) => {
        dispatch({type: 'setColorStyle', payload: style})
        localStorage.setItem('colorStyle', style)
    }

    /////Styles&Classes
    const allSettingsContainer = visibleSettings ? 'listSettingsContainer' : 'listSettingsContainer_Hide'

    return (
        <div className='settingsContainer'>
            <h1 className='settingsTitle' onClick={() => dispatch({type: 'setVisibleSettings'})}>Settings</h1>
            <div className={allSettingsContainer}>
                <div className='settingsColorContainer'>
                    <button className='buttonLightTheme' onClick={() => setStyleTheme('light')}>Light theme</button>
                    <button className='buttonDarkTheme' onClick={() => setStyleTheme('dark')}>Dark theme</button>
                    <span className='sliderSpan'/>
                </div>
            </div>
        </div>
    )
}

export default Settings