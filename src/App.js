import './App.css';
import logo from './CoinTrade-logo.svg';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function App() {
  return (
    <div className='App'>
      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className='Modal'>
      <div className='header'>
        <img className='logo-header' src={logo} alt='CoinTrade logo' />
        <h1>CoinTrade</h1>
      </div>
      <Logos />
      <p>Or use your email to register.</p>
      <Form />
    </div>
  );
}

function Logos() {
  return (
    <div className='logos'>
      <Logo
        logo={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
            />
          </svg>
        }
      />
      <Logo
        logo={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m9 7.5 3 4.5m0 0 3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
            />
          </svg>
        }
      />
      <Logo
        logo={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M14.121 7.629A3 3 0 0 0 9.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 0 1-.43 2.65L9 16.5l1.539-.513a2.25 2.25 0 0 1 1.422 0l.655.218a2.25 2.25 0 0 0 1.718-.122L15 15.75M8.25 12H12m9 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
            />
          </svg>
        }
      />
      <Logo
        logo={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
            />
          </svg>
        }
      />
    </div>
  );
}

function Logo({ logo }) {
  return <div className='logo'>{logo}</div>;
}

function Form() {
  return (
    <div>
      <form className='form'>
        <input type='name' id='name' name='name' placeholder='name' />
        <input type='email' id='email' name='email' placeholder='email' />
        <input
          type='password'
          id='password'
          name='password'
          placeholder='password'
        />
        <CheckboxLabels />
        <div className='buttons'>
          <button type='submit' style={{ backgroundColor: '#6161de' }}>
            Sign in
          </button>
          <button type='submit'>Sign up</button>
        </div>
      </form>
    </div>
  );
}

function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label='I agree to the Terms and Privacy Policy'
      />
    </FormGroup>
  );
}

export default App;
