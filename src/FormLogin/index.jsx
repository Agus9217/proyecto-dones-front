
export const FormLogin = () => {
  return (
    <>
      <form className="form_login">
        <div className="form_login_container">
          <div className="form_login_group_title">
            <h2>Login</h2>
            <p>Ingrese para ver su perfil</p>
          </div>
          <label htmlFor='email' name='email'>email</label>
          <input type="email" id='email' autoComplete="off" />
          <label htmlFor="password" name='password'>password</label>
          <input type="password" id="password" />
          <button type="submit" >Login</button>
        </div>
      </form>
    </>
  )
}
