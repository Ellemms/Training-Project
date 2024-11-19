import { useDispatch } from 'react-redux'
import './burgerButtonModal.css'

const BurgerButtonModal = () => {

    const dispatch = useDispatch()

    return (
        <div className='burgerButtonModal' onClick={() => dispatch({type: 'setStateVisibleMenu'})}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default BurgerButtonModal