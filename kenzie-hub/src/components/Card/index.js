import { Container } from './style'

const Card = ({ title, status }) => {
  return (
    <Container>
      <h3>{title}</h3>
      <span>{status}</span>
    </Container>
  )
}

export default Card
