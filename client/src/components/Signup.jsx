function Signup() {
  return (
    <main>
      <div className="auth-content">
        <h2 className="heading-secondary ma-bt-lg">Create your account</h2>

        <form action="#" className="form">
          <div className="form__row">
            <div className="form__group">
              <label className="form__label" htmlFor="name">
                Full name
              </label>
              <input
                id="name"
                className="form__input"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form__group ma-bt-md">
              <label className="form__label" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                className="form__input"
                type="password"
                placeholder="••••••••"
                required
                minLength={8}
              />
            </div>
          </div>

          <div className="form__row">
            <div className="form__group">
              <label className="form__label" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                className="form__input"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="passwordConfirm">
                Confirm password
              </label>
              <input
                id="passwordConfirm"
                className="form__input"
                type="password"
                placeholder="••••••••"
                required
                minLength={8}
              />
            </div>

            <div className="form__group">
              <button className="btn btn--green" type="submit">
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Signup;
