import HeaderContainer from '@src/modules/HeaderContainer/HeaderContainer'
import HeaderResultSearch from '@src/modules/ResultSearch/ResultSearch'
import LayerBg from '@src/modules/LayerBg/layerBg'
import ModalMenu from '@src/modules/ModalMenu/ModalMenu'
import UserListComponent from '@src/modules/UserList/UserList'
import './app.css'
import useAppTheme from './hooks/useAppTheme'
import { Route, Routes } from 'react-router-dom'
import { useApp } from './hooks/useApp'
import { WeatherApp } from '@src/modules/WeatherApp/WeatherApp'

function App() {

  /////Hooks
  useApp()
  useAppTheme()
  
  return(
    <div className='mainContainer'>
      <HeaderContainer/>
      <Routes>
        <Route path='' element={null}/>
        <Route path='/User List' element={<UserListComponent/>}/>
        <Route path='Weather' element={<WeatherApp/>}/>
      </Routes>
      <HeaderResultSearch/>
      <LayerBg/>
      <ModalMenu/>
    </div>
  )
}

export default App
