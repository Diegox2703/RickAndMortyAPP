import Footer from './layout/Footer/Footer'
import Header from './layout/Header/Header'
import Main from './layout/Main/Main'
import Modal from './layout/Modal/Modal'
import SideBar from './layout/SideBar/SideBar'
import './App.css'

export default function App() {
  return (
    <>
      <Header/>
      <Modal/>
      <SideBar/>
      <Main/>
      <Footer/>
    </>
  )
}
