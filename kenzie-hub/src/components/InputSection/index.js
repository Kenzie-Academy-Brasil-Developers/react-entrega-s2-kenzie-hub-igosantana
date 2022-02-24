import { Container, SelectContainer } from './style'

const InputSection = ({ label, register, name, ...rest }) => {
  return (
    <Container>
      <label>{label}</label>
      <SelectContainer {...register(name)} {...rest}>
        <option value='Primeiro módulo (Introdução ao Frontend)'>
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option value='Segundo módulo (Frontend Avançado)'>
          Segundo módulo (Frontend Avançado)
        </option>
        <option value='Terceiro módulo (Introdução ao Backend)'>
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option value='Quarto módulo (Backend Avançado)'>
          Quarto módulo (Backend Avançado)
        </option>
      </SelectContainer>
    </Container>
  )
}

export default InputSection
