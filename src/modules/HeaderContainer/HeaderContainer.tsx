import HeaderNameOfSite from "./components/HeaderNameOfSite/HeaderNameOfSite"
import SearchComponent from "./components/SearchComponent/SearchComponent"
import './headerContainer.css'

function HeaderContainer() {
  
  return(
    <div className='headerAppContainer'>
        <HeaderNameOfSite/>
        <SearchComponent/>
    </div>
  )
}

export default HeaderContainer
