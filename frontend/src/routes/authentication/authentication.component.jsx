
import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx'
import SignInForm from '../../components/sign-in-form/sign-in-form.component.jsx'

import './authentication.styles.scss'

const Authentication = () => {
    return ( 
        <div className='authentication-container'>
            <h1>Sign In Page</h1>
            <SignInForm/>
            <SignUpForm />
        </div>
    )
}

export default Authentication