import { RiCloseFill } from 'react-icons/ri'
import Input from '../Input'
import { ModalHeader, Container, ModalFormContainer } from './style'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '../Button'
import api from '../../services/api'
import { toast } from 'react-toastify'

const Modal = ({ setModalIsOpen, handleTechs, setUserTec, userTec }) => {
  const schema = yup.object({
    title: yup.string().required('Campo obrigatório'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const handleCloseModal = () => {
    setModalIsOpen(false)
  }

  const tokenUser = JSON.parse(localStorage.getItem('@KenzieHub:token'))

  const onSubmit = (data) => {
    console.log(data)
    api
      .post('/users/techs', data, {
        headers: {
          Authorization: `Bearer ${tokenUser}`,
        },
      })
      .then((response) => setUserTec([...userTec, response.data]))
      .catch((err) => {
        toast.error('Erro no registro')
      })

    toast.success('Tecnologia registrada')
    setModalIsOpen(false)
  }
  return (
    <Container>
      <div>
        <ModalHeader>
          <div>
            <h3>Cadastrar tecnologia</h3>
            <button onClick={() => handleCloseModal()}>
              <RiCloseFill />
            </button>
          </div>
        </ModalHeader>
        <ModalFormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label='Nome'
              type='text'
              name='title'
              register={register}
              errors={errors}
            />
            <div>
              <label>Selecionar status</label>
              <select {...register('status')}>
                <option value='Iniciante'>Iniciante</option>
                <option value='Intermediario'>Intermediário</option>
                <option value='Avancado'>Avançado</option>
              </select>
            </div>
            <Button backgroundColor='#FF577F' type='submit'>
              Cadastrar tecnologia
            </Button>
          </form>
        </ModalFormContainer>
      </div>
    </Container>
  )
}

export default Modal
