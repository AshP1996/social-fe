import "./login.scss"
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className="login">
       <div className="card">
        <div className="left">
          <h1>hello world!</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores fuga fugiat repellendus aliquid adipisci esse alias corporis minima culpa at nesciunt a, sequi similique blanditiis quaerat doloremque quam, magnam illum.</p>
          <span>Do you have a register</span>
          
          <Link to="/register">
          <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>login</h1>
          <form >
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="password"/>
            <button>login</button>
          </form>
        </div>
      </div>
    </div>

  )
}
