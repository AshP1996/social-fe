import  "./register.scss"
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Social Media</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores fuga fugiat repellendus aliquid adipisci esse alias corporis minima culpa at nesciunt a, sequi similique blanditiis quaerat doloremque quam, magnam illum.</p>
          <span>Do you have a register</span>
          <Link to="/login">
            <button>login</button>
          </Link>
          
        </div>
        <div className="right">
          <h1>Register</h1>
          <form >
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password"/>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Name" />
            <button>register</button>
          </form>
        </div>
      </div>
    </div>
  )
}
