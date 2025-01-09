import Navigation from './routes/navigation/navigation.component.jsx'
import LandingPage from './components/landingPage/landingPage.jsx'
import Dashboard from './components/dashboard/dashboard.component.jsx'
import Pantry from './components/pantry/pantry.component.jsx'
import Diet from './components/diet/diet.component.jsx'

import { Routes, Route } from 'react-router-dom'
import Authentication from './routes/authentication/authentication.component.jsx'


const App = () => {
  return (
    <div>
      <Routes> 
        <Route path='/' element={<Navigation/>} >
          <Route index  element={<LandingPage />}/>
          <Route path='patient' element={<Dashboard />}/>
          <Route path='pantryStaff' element={<Pantry />}/>
          <Route path='diet' element={<Diet />}/>
          <Route path='auth' element={<Authentication />}/>
        </Route>
      </Routes>
    </div>
   
   )
}

export default App;
