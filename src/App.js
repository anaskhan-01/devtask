import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className='Some-text'>Some Random Text, Some Random Text,Some Random Text,Some Random Text</div>
      <div className='Login-signup'>
        <a className='Login' href='#'>Login</a>
        <a href='#'>SignUp</a>
      </div>
      <div className='input'>
        <input placeholder='Email Address' type="email" />
        <input placeholder='Password' type="password" />
        <button>
          LOGIN
        </button>
        <p className='forgot'>Forgot Password?</p>
        <p className='or'>or login with</p>
        <div className='Signin-logo'>
          <img src='google.jpeg' alt='google image' />
          <img src='facebook.jpeg' alt='facebook image' />
          <img src='Twitter-Logo.png' alt='twitter image' />
        </div>
        <div className='logo-down'>
          <p>Don't have an account? <a href='#'>Create new now!</a></p>
          <p className='terms'>By signing up, you are agree with our <a href='#'><u><strong>Terms &amp; Conditions</strong></u></a></p><br />
        </div>
      </div>

    </div>
  );
}

export default App;
