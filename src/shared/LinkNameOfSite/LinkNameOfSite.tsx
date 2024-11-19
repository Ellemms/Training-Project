import { useDispatch } from 'react-redux'
import './linkNameOfSite.css'

const LinkOfNameSite = () => {

    const dispatch = useDispatch()

    return (
        <a href='#'
            className='nameOfSite'
            onClick={() => dispatch({type: 'setNameActivePage', payload: ''})}>isTraining
        </a>
    )
}

export default LinkOfNameSite