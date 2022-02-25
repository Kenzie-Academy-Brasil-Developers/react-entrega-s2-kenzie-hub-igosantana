import Routes from './routes'
import { GlobalStyle } from './styles/global'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Modal from './components/Modal'
import { useState, useEffect } from 'react'
import api from './services/api'

function App() {
  const userStorage = JSON.parse(localStorage.getItem('@KenzieHub:user'))
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [userTec, setUserTec] = useState([])

  const handleTechs = () => {
    api
      .get(`/users/${userStorage.id}`)
      .then((data) => setUserTec(data.data.techs))
  }
  useEffect(() => {
    handleTechs()
  }, [])

  return (
    <>
      {modalIsOpen && (
        <Modal
          setModalIsOpen={setModalIsOpen}
          handleTechs={handleTechs}
          setUserTec={setUserTec}
          userTec={userTec}
        />
      )}
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyle />
      <Routes
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        userTec={userTec}
      />
    </>
  )
}

export default App
