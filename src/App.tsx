import React, { useState } from 'react';
import './App.css';

function App(): JSX.Element {

  type FormElement = React.FormEvent<HTMLFormElement>

  const [user, setUser] = useState<string>('')

  const [password, setPassword] = useState<string>('')

  const validateData = () => {
    const regEx = {
      user: /^([a-z]*)$/,
      password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ])*$/,
    }

    if (user === '' || password === '') {
      alert("Tienes campos sin rellenar")
    }

    else if (!user.match(regEx.user)) {
      alert("Usuario erroneo. El campo no permite dígitos, mayúsculas ni caracteres")
    }

    else if (!password.match(regEx.password)) {
      alert("Contraseña erronea. El campo permite números, letras mayúsculas y carácter especial")
    }
  }

  const handleSubmit = (e: FormElement) => {
    e.preventDefault()
    validateData()
  }

  return (
    <div className="App">

      <div className="container">
        <div className="arcVersion">
          <a className="arcVersion__link" href="/#"> <p className="arcVersion__linkA">A</p> Click here to switch to previous RC version</a>
        </div>

        <div className="login">

          <div className="arcLogo">
            ARC
        </div>

          <form className="form" onSubmit={handleSubmit}>

            <div className="form__title">
              <p>SIGN IN</p>
              <p className="form__title__welcome">Welcome!</p>
            </div>

            <div className="form__body">

              <div className="form__inputs">
                <div className="form__inputContainer">
                  <label className="form__label" htmlFor="user">User</label>
                  <input className="form__input" name="user" type="text" onChange={e => setUser(e.target.value)} />
                  <div className="form__underline"></div>
                </div>

                <div className="form__inputContainer">
                  <label className="form__label" htmlFor="password">Password</label>
                  <input className="form__input" name="password" type="password" onChange={e => setPassword(e.target.value)} value={password} />
                  <div className="form__underline"></div>
                </div>
              </div>

              <div className="form__rememberMe">
                <label className="form__labelRememberMe" htmlFor="rememberMe">Remember me</label>

                <input className="form__inputCheckbox" type="checkbox" name="rememberMe" />

                <a className="form__forgotPassword" href="/#">Forgot Password?</a>
              </div>

              <div className="form__privacyPolicy">
                <p>
                  By pressing "Sign In" you agree to the <a className="form__privacyPolicyLink" href="/#">Privacy Policy.</a>
                </p>
              </div>

              <button className="form__button" type="submit">
                Sign in
              </button>
            </div>

          </form>
        </div>

        <div className="singUp">
          <p >Don't have an account? <a className="singUp__link" href="/#">SIGN UP</a></p>
        </div>
      </div>

    </div>
  );
}

export default App;
