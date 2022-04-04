import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Login from './components/Login'
import CreateAccount from './components/CreateAccount'
import User from './components/User'
import UserEvents from './components/UserEvents'
import UserEdit from './components/UserEdit'
import EventPage from './components/EventPage'
import Events from './components/Events'
import CreateEvent from './components/CreateEvent'
import NavigationBar from './components/NavigationBar'

function App() {
  return (
    <>
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path = '/' element = {<Login/>} exact/>
        <Route path = '/create-account' element = {<CreateAccount/>} exact/>
        <Route path = '/user/:id' element = {<User/>} exact/>
        <Route path = '/user/:id/events' element = {<UserEvents/>} exact/>
        <Route path = '/user/:id/edit' element = {<UserEdit/>} exact/>
        <Route path ='/events/:id' element = {<EventPage/>}exact/>
        <Route path ='/events' element={<Events/>}exact/>
        <Route path = '/events/create' element = {<CreateEvent/>} exact/>
        <Route path = '*' element = {<Navigate to= '/'/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
