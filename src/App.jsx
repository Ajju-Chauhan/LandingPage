
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Introduction from './Component/Introduction/Introduction';

import Header from './Component/Header/Header'
import Main from './Component/Main.jsx/Main';
import ChooseUs from './Component/ChooseUs/ChooseUs';
function App() {
  

  return (
    <>
    <Header/>
    <Main/>
    <Introduction />
    <ChooseUs/>
    <h1>this is from main page</h1>
    </>
   
  )
}

export default App
