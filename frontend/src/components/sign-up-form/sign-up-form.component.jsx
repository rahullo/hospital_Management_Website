import { useState, useContext } from 'react'

import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

import { UserContext } from '../../contexts/user.context'

import './sign-up-form.style.scss'

const defaultFormfields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormfields)
  const { displayName, email, password, confirmPassword } = formFields

  const { setCurrentUser } = useContext(UserContext)

  const resetFormFields = () => {
    setFormFields(defaultFormfields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log("My name is Rahul")

    if (password !== confirmPassword) {
      alert('password do not match')
      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      setCurrentUser(user)

      await createUserDocumentFromAuth(user, { displayName })
      resetFormFields()
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('cannot create user, email already in use')
      } else {
        alert('cannot create user, email already in use', error)
      }
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className='sign-up-container'>
        <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOp
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm
