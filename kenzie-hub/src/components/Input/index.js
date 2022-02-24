import { Container, InputContainer } from './style'

const Input = ({ label, name, register, error, ...rest }) => {
  return (
    <Container>
      <label>{label}</label>
      <InputContainer>
        <input type name {...register(name)} {...rest} />
      </InputContainer>
      <div>{!!error && <span>{error}</span>}</div>
    </Container>
  )
}

export default Input
