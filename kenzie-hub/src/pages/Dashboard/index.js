import {
  Container,
  Header,
  ListTechsContainer,
  SectionHeader,
  SectionTec,
  SectionUser,
} from './style'
import Card from '../../components/Card'
import Logo from '../../assets/logo.svg'
import { HiPlus } from 'react-icons/hi'
import { useHistory, Redirect } from 'react-router-dom'
import api from '../../services/api'
import { useEffect } from 'react'

const Dashboard = ({
  modalIsOpen,
  setModalIsOpen,
  userTec,
  setAuth,
  auth,
  setUserTec,
}) => {
  const userStorage = JSON.parse(localStorage.getItem('@KenzieHub:user'))

  const history = useHistory()

  const handleModalOpen = () => {
    setModalIsOpen(true)
  }

  const handleTechs = async () => {
    const response = await api.get(`/users/${userStorage.id}`)
    setUserTec(response.data.techs)
  }

  useEffect(() => {
    handleTechs()
  }, [userTec])

  const handleLogout = () => {
    setAuth(false)
    localStorage.clear()
    history.push('/')
  }

  if (!auth) {
    return <Redirect to='/' />
  }

  return (
    <Container>
      <div>
        <Header>
          <div>
            <img src={Logo} alt='logo' />
          </div>
          <button onClick={handleLogout}>Sair</button>
        </Header>
        <hr />
        <SectionUser>
          <h2>{userStorage.name}</h2>
          <span>{userStorage.course_module}</span>
        </SectionUser>
        <hr />
        <SectionTec>
          <SectionHeader>
            <h3>Tecnologias</h3>

            <button onClick={() => handleModalOpen()}>
              <HiPlus />
            </button>
          </SectionHeader>
          <ListTechsContainer>
            {userTec.map((tec) => {
              return <Card title={tec.title} status={tec.status} key={tec.id} />
            })}
          </ListTechsContainer>
        </SectionTec>
      </div>
    </Container>
  )
}

export default Dashboard
