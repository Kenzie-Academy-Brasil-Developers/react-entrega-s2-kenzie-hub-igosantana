import { Container } from './style'

const Button = ({ children, backgroundColor = '#59323F', ...rest }) => {
  return (
    <Container {...rest} backgroundColor={backgroundColor}>
      {children}
    </Container>
  )
}

export default Button
