import React from 'react'

const SignIn = () => {
  return (
    <div class="container">
        <header class="header">
            <h1 id="title" class="text-center">LOGIN</h1>
        </header>
        <form action="{{ url_for('login')}}" method="post" id="login-form">
            <div class="text-center">
                <img src="{{url_for('static',filename='img/logo.png')}}" height="72" alt="NIEPMD Logo" />
            </div>
            <div class="form-group">
                <label id="email-label" for="email">User ID</label>
                <input id="email" type="text" name="email" class="form-control" placeholder="Enter your User ID" required></input>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                {/* <!-- <a href="#" style="float: right;font: size 12px;">Forgot Password?</a> --> */}
                <input type="password" class="form-control" placeholder="Enter the password" id="password" name="password"/>
            </div>

            <div class="form-group">
                <button type="submit" id="submit" class="submit-button">Login</button>
            </div>
        </form>
        </div>
  )
}

export default SignIn
