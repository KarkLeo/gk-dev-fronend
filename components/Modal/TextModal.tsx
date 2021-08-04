import { Button, TextField } from 'components/Controllers'
import React, { useState } from 'react'
import Modal from './Modal'

const TextModal: React.FC = () => {
  const [status, setStatus] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <button onClick={() => setStatus(true)}>Test</button>
      {status && (
        <Modal title={'Head of my modal'} close={() => setStatus(false)}>
          <TextField
            value={email}
            onChange={setEmail}
            type='email'
            label={'Login'}
          />
          <TextField
            value={password}
            onChange={setPassword}
            type='password'
            label={'Password'}
          />
          <Button>Login</Button>
        </Modal>
      )}
    </>
  )
}

export default TextModal
