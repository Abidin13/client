import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="login__inner">
          <h3 className="login__title">Login</h3>
          <form className="login__form">
            <label>
              Email
              <input type="email" placeholder="email" />
            </label>

            <label>
              Password
              <input type="Password" placeholder="Your Password" />
            </label>
            <button className="login__btn">Login</button>
          </form>
          <Link to="/register" className="login__btn">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
