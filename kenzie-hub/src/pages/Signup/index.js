import { Container, FormContainer, Header } from './style'
import Input from '../../components/Input'
import logo from '../../assets/logo.svg'
import InputSection from '../../components/InputSection'
import Button from '../../components/Button'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/api'
import { toast } from 'react-toastify'
import { useHistory, Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Signup = ({ auth }) => {
  const schema = yup
    .object({
      name: yup.string().required('Campo obrigatório'),
      email: yup
        .string()
        .email('Formato inválido')
        .required('Campo obrigatório'),
      password: yup
        .string()
        .min(8, 'Mínimo de 8 caracteres')
        .required('Campo obrigatório'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais.'),
      course_module: yup.string().required(),
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
    delete data.confirmPassword
    data.bio = 'teste'
    data.contact = 'teste'
    const response = await api.post('/users', data).catch((err) => {
      toast.error('Falha na autenticação, verifique suas credenciais')
    })

    toast.success('Cadastro feito com sucesso')
    history.push('/login')
  }
  return (
    <Container>
      <div>
        <Header>
          <div>
            <img src={logo} alt='logo-kenzie' />
          </div>
          <Link to='/login'>
            <button>Voltar</button>
          </Link>
        </Header>
        <FormContainer>
          <div>
            <h3>Crie sua conta</h3>
            <span>Rapido e grátis, vamos nessa</span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              register={register}
              name='name'
              type='text'
              label='Nome'
              placeholder='Digite aqui seu nome'
              error={errors.name?.message}
            />
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
            <Input
              register={register}
              name='confirmPassword'
              type='password'
              label='Confirmar Senha'
              placeholder='Confirme sua senha'
              error={errors.confirmPassword?.message}
            />
            <InputSection
              name='course_module'
              register={register}
              label='Selecionar módulo'
            />
            <Button type='submit'>Cadastrar</Button>
          </form>
        </FormContainer>
      </div>
    </Container>
  )
}

export default Signup
