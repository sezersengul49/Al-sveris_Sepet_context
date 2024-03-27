import {BrowserRouter as Saglayici, Routes, Route} from 'react-router-dom'
import Main from './pages/MainPage'
import Basket from './pages/BasketPage'
import Header from './components/Header'


const App = () => {
  return (
     <Saglayici>
      <Header/>

      <Routes>
         <Route path="/" element={ <Main/>} />
         <Route path="/sepet" element={ <Basket/>} />

      </Routes>
     
     
     
     </Saglayici>
    
  )
}

export default App