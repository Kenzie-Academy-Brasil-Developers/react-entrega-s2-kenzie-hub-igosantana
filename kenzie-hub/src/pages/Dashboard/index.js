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

const Dashboard = ({ modalIsOpen, setModalIsOpen, userTec, setAuth, auth }) => {
  const userStorage = JSON.parse(localStorage.getItem('@KenzieHub:user'))

  const history = useHistory()

  const handleModalOpen = () => {
    setModalIsOpen(true)
  }

  const handleLogout = () => {
    setAuth(false)
    localStorage.clear()
    history.push('/login')
  }

  if (!auth) {
    return <Redirect to='/login' />
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
