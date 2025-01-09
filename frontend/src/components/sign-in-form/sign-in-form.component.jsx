// import { useState, useContext } from 'react'

// import FormInput from '../form-input/form-input.component'
// import Button from '../button/button.component'

// import { UserContext } from '../../contexts/user.context'

// import {
//   // createAuthUserWithEmailAndPassword,
//   createUserDocumentFromAuth,
//   signInAuthUserWithEmailAndPassword,
//   signInWithGooglePopup
// } from '../../utils/firebase/firebase.utils'

// import './sign-in-form.style.scss'

// const defaultFormfields = {
//   email: '',
//   password: ''
// }

// const SignInForm = () => {
//   const [formFields, setFormFields] = useState(defaultFormfields)
//   const { email, password } = formFields

//   // console.log(formFields)

//   const { setCurrentUser } = useContext(UserContext)

//   const resetFormFields = () => {
//     setFormFields(defaultFormfields)
//   }

  
//   // const signInWithGoogle = async() => {
//   //   const { user } = await signInWithGooglePopup()
//   //   await createUserDocumentFromAuth(user)
//   // }

//   const handleSubmit = async (event) => {
//     event.preventDefault()

//     console.log("I am in")

//     try {
//       const  user  = await signInAuthUserWithEmailAndPassword(email, password)
//       // console.log(user)
//       setCurrentUser(user)


//       resetFormFields()
//     } catch (error) {
//       switch (error.code) {
//         case "auth/wrong-password":
//           alert('incorrect password for email')
//           break
//         case 'auth/user-not-found':
//           alert('No user associated with this email')
//           break
//         default:
//           console.log(error)
//       }
      
//       // if(error.code === "auth/wrong-password") {
//       //   alert('Incorrect password for Email')
//       // }

//     }
//   }

//   const handleChange = (event) => {
//     const { name, value } = event.target

//     setFormFields({ ...formFields, [name]: value })
//   }

//   return (
//     <div className='sign-up-container'>
//         <h2>Already have an account</h2>
//       <span>Sign in with your email and password</span>
//       <form onSubmit={handleSubmit} action="">
        

//         <FormInput
//           label="Email"
//           type="email"
//           required
//           onChange={handleChange}
//           name="email"
//           value={email}
//         />

//         <FormInput
//           label="Password"
//           type="password"
//           required
//           onChange={handleChange}
//           name="password"
//           value={password}
//         />

        
//         <div className='buttons-container'>
//           <Button  type="submit">Sign In</Button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default SignInForm


import React, { useState } from 'react';
import axios from 'axios';
import { data } from 'react-router-dom';

const SignInForm = ({ setCurrentUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetFormFields = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("I am in");
    console.log(email)
    console.log(password)

    try {

      const response = await axios.post('http://127.0.0.1:4000/api/v1/auth/login',
      {
        "email": email,
        "password": password,
      });
      const { token } = response.data;
      console.log(token);
      // setCurrentUser(user);

      // Store the token in localStorage or cookies if needed
      localStorage.setItem('jwt', token);

      resetFormFields();
    } catch (error) {
      if (error.response) {
        switch (error.response.data.message) {
          case "Incorrect email or password":
            alert('Incorrect password for email');
            break;
          case 'No user associated with this email':
            alert('No user associated with this email');
            break;
          default:
            console.log(error.response.data.message);
        }
      } else {
        console.log(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;