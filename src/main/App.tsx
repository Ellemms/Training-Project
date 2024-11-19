import HeaderContainer from '../modules/HeaderContainer/HeaderContainer'
import ResultSearch from '../modules/ResultSearch/ResultSearch'
import LayerBg from '../modules/LayerBg/layerBg'
import ModalMenu from '../modules/ModalMenu/ModalMenu'
import UserListComponent from '../pages/UserList/UserList'
import './app.css'
import useAppTheme from './hooks/useAppTheme'
import { Route, Routes } from 'react-router-dom'
import { useApp } from './hooks/useApp'

function App() {

  /////Hooks
  useApp()
  useAppTheme()
  
  return(
    <div className='mainContainer'>
      <HeaderContainer/>
      <Routes>
        <Route path='' element={null}/>
        <Route path='/User List' element={<UserListComponent/>}></Route>
      </Routes>
      <ResultSearch/>
      <LayerBg/>
      <ModalMenu/>
    </div>
  )
}

export default App
