import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () => {
  return (
    <div>
    <form>
        <div class="form-group">
            <label for="email">Email address:</label>
            <input type="email" className="form-control" id="email"/>
        </div>
        <br />
        <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd"/>
        </div>
        <br />
        <button class="btn btn-success">Submit</button>
    </form>

</div>
  )
}

export default Login