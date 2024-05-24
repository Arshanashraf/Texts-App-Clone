
import './App.css'
import Home from './components/Home/Home'
import MainNav from './components/Navbar/MainNav'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <>
      <div className='app'>
        <MainNav/>
        <Home/>
        <Footer/>
      </div>
    </>
  )
}

export default App
