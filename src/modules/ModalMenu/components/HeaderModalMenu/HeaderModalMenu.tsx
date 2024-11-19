import BurgerButtonModal from '../../../../shared/BurgerButtonModal/BurgerButtonModal'
import LinkOfNameSite from '../../../../shared/LinkNameOfSite/LinkNameOfSite'
import './headerModalMenu.css'

const HeaderModalMenu = () => {

    return (
        <div className='headerModalContainer'>
            <BurgerButtonModal/>
            <LinkOfNameSite/>
        </div>
    )
}

export default HeaderModalMenu