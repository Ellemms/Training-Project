import BurgerButtonModal from '@src/shared/BurgerButtonModal/BurgerButtonModal'
import LinkOfNameSite from '@src/shared/LinkNameOfSite/LinkNameOfSite'
import './headerNameOfSite.css'

const HeaderNameOfSite = () => {

    return (
        <div className='headerNameOfSiteContainer'>
            <BurgerButtonModal/>
            <LinkOfNameSite/>
        </div>
    )
}

export default HeaderNameOfSite