import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import './layerBg.css'

const LayerBg = () => {

    /////State
    const stateVisibleMenu = useSelector((store: RootState) => store.modalMenu.stateVisibleMenu)

    /////Dispatch
    const dispatch = useDispatch()

    /////Styles&Classes
    const modalMenuContainer = stateVisibleMenu ? 'modalMenuContainer_Show' : 'modalMenuContainer_Hide'

    return (
        <div className={modalMenuContainer} onClick={() => dispatch({type: 'setStateVisibleMenu'})}/>
    )
}

export default LayerBg