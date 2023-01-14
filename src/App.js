import './App.css';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ToggleableForm from './ToggleableForm';

function App() {
  let data = [
    { name: 'Log in', component: LoginForm },
    { name: 'Sign up', component: SignupForm }
  ]
  return (
    <section className='main'>
      <h2>Log in / Sign up</h2>
      <ToggleableForm options={data} />
    </section>
  )
}

export default App;
