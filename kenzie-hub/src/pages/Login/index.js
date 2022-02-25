import { Container, FormContainer, Header, SpanContainer } from './style'
import Input from '../../components/Input'
import logo from '../../assets/logo.svg'
import Button from '../../components/Button'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'

const Login = ({ auth, setAuth }) => {
  const schema = yup
    .object({
      email: yup
        .string()
        .email('Formato inválido')
        .required('Campo obrigatório'),
      password: yup
        .string()
        .min(8, 'Mínimo de 8 caracteres')
        .required('Campo obrigatório'),
    })
    .required()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const history = useHistory()

  if (auth) {
    return <Redirect to='/dashboard' />
  }

  const onSubmit = async (data) => {
    const response = await api.post('/sessions', data).catch((err) => {
      toast.error('Verifique suas credenciais')
    })

    const { token, user } = response.data
    localStorage.setItem('@KenzieHub:token', JSON.stringify(token))
    localStorage.setItem('@KenzieHub:user', JSON.stringify(user))

    toast.success('Login feito com sucesso')
    setAuth(true)
    history.push('/dashboard')
  }
  return (
    <Container>
      <div>
        <Header>
          <div>
            <img src={logo} alt='logo-kenzie' />
          </div>
        </Header>
        <FormContainer>
          <div>
            <h3>Login</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              register={register}
              name='email'
              type='email'
              label='Email'
              placeholder='Digite aqui seu email'
              error={errors.email?.message}
            />
            <Input
              register={register}
              name='password'
              type='password'
              label='Senha'
              placeholder='Digite aqui sua senha'
              error={errors.password?.message}
            />
            <Button type='submit' backgroundColor='#ff577f'>
              Entrar
            </Button>
            <SpanContainer>
              <span>Ainda não possui uma conta?</span>
            </SpanContainer>

            <Link to='/signup'>
              <Button backgroundColor='#868e96'>Cadastre-se</Button>
            </Link>
          </form>
        </FormContainer>
      </div>
    </Container>
  )
}

export default Login
