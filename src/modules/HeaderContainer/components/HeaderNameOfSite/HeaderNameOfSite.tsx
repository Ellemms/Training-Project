import BurgerButtonModal from '../../../../shared/BurgerButtonModal/BurgerButtonModal'
import LinkNameOfSite from '../../../../shared/LinkNameOfSite/LinkNameOfSite'
import './headerNameOfSite.css'

const HeaderNameOfSite = () => {

    return (
        <div className='headerNameOfSiteContainer'>
            <BurgerButtonModal/>
            <LinkNameOfSite/>
        </div>
    )
}

export default HeaderNameOfSite