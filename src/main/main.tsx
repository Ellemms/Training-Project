// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from '../store/store.ts'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from '../context/ContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ContextProvider>
            <Provider store={store}>
                {/* <StrictMode> */}
                    <App />
                {/* </StrictMode>, */}
            </Provider>
        </ContextProvider>
    </BrowserRouter>
)
