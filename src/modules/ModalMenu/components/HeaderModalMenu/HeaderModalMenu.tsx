import BurgerButtonModal from '@src/shared/BurgerButtonModal/BurgerButtonModal'
import LinkOfNameSite from '@src/shared/LinkNameOfSite/LinkNameOfSite'
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