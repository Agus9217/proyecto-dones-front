
export const FormLogin = () => {
  return (
    <>
      <form className="form_login">
        <div className="form_login_container">
          <label htmlFor='email' name='email'>Ingrese su email</label>
          <input type="email" id='email' />
          <label htmlFor="password" name='password'>Ingrese su password</label>
          <input type="password" id="password" />
          <button type="submit" >Login</button>
        </div>
      </form>
    </>
  )
}
