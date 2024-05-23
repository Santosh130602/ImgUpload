


// import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom';

// import axios from 'axios';
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginError, setLoginError] = useState('');
//   const navigate = useNavigate(); // Import useNavigate hook from 'react-router-dom'

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       // Send POST request to your backend server
//       const response = await axios.post('https://imgupload-6fbc.onrender.com/auth/login', {
//         email,
//         password
//       });
      
//       // Handle success response from backend
//       console.log('Login successful');
//       console.log('Response:', response.data);

//       // Reset login error message
//       setLoginError('');

//       // Redirect the user to the uploadimg route
//       navigate('/uploadimg');
//     } catch (error) {
//       // Handle error response from backend
//       console.error('Login failed:', error.response.data.message);
//       setLoginError(error.response.data.message);
//     }
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit} className="login-form">
//         <h2>Login</h2>
//         {loginError && <p className="login-error">{loginError}</p>}
//         <div className="form-group">
//           <label htmlFor="email">Username</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="login-button">Login</button>
//         <p className="login-redirect">
//           Do not have an account? <Link to="/signup">Create Account</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;













import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate(); // Import useNavigate hook from 'react-router-dom'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when request starts
    
    try {
      // Send POST request to your backend server
      const response = await axios.post('https://imgupload-6fbc.onrender.com/auth/login', {
        email,
        password
      });
      
      // Handle success response from backend
      console.log('Login successful');
      console.log('Response:', response.data);

      // Reset login error message
      setLoginError('');

      // Redirect the user to the uploadimg route
      navigate('/uploadimg');
    } catch (error) {
      // Handle error response from backend
      console.error('Login failed:', error.response.data.message);
      setLoginError(error.response.data.message);
    } finally {
      setLoading(false); // Set loading to false when request completes
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {loginError && <p className="login-error">{loginError}</p>}
        <div className="form-group">
          <label htmlFor="email">Username</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading} // Disable input during loading
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading} // Disable input during loading
          />
        </div>
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'} {/* Show loading text */}
        </button>
        <p className="login-redirect">
          Do not have an account? <Link to="/signup">Create Account</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

