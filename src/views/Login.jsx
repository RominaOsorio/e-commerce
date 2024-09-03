import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Form, InputGroup } from 'react-bootstrap'
import { FaUser } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'

const Login = () => {
  const { login } = useContext(AuthContext)
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (user === 'admin' && password === '1234') { login() }

    navigate('/productos')
  }

  return (

    <Container className='my-5'>
      <Form onSubmit={handleSubmit} className='col-10 col-sm-8 col-md-6 col-lg-4 m-auto border border-light-subtle rounded-5 p-5 mt-5'>
        <legend className='mb-3 text-center'>Inicia Sesión</legend>
        <Form.Group className='mt-2'>
          <Form.Label>Ingresa tu nombre de usuario</Form.Label>
          <InputGroup>
            <InputGroup.Text><FaUser /></InputGroup.Text>
            <Form.Control
              type='text'
              name='name'
              onChange={(e) => setUser(e.target.value)}
              value={user}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className='mt-2'>
          <Form.Label>Ingresa tu contraseña</Form.Label>
          <InputGroup>
            <InputGroup.Text><RiLockPasswordFill /></InputGroup.Text>
            <Form.Control
              type='password'
              name='password'
              autoComplete='off'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </InputGroup>
        </Form.Group>

        <div className='text-center'>
          <Button className='mt-3 px-5' type='submit' variant='dark'>Enviar</Button>
        </div>
      </Form>
    </Container>
  )
}

export default Login