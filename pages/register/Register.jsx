import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="container">
        <div className="register__inner">
          {/* <img
            className="register__img"
            src="https://images.unsplash.com/photo-1632188733972-0b12f9901e47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            alt=""
          /> */}
          <div className="register__form">
            <h3 className="register__title">Register</h3>
            <form>
              <label>
                Email
                <input type="email" placeholder="email" />
              </label>
              <label>
                Username
                <input type="text" placeholder="Your Username" />
              </label>
              <label>
                Password
                <input type="Password" placeholder="Your Password" />
              </label>
              <button className="register__btn">Register</button>
              <Link to="/login" className="register__btn">
                Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
