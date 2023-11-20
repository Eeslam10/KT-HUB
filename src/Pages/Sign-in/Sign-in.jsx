import { Link } from "react-router-dom";
import "../Sign-in/Sign-in.css";

const SignIn = () => {
  return (
    <>
      <main>
        <aside className="left">
          <form action="">
            <h3>Katsina Tech-Hub</h3>
            <h1>Sign in</h1>
            <section className="email">
              <label for="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Please enter your email"
                required
              />
            </section>

            <section className="password">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Please enter your password"
                required
              />
            </section>
            <article>
              <div className="sign-in">
                <button>
                  <Link to="/Dashboard">Submit</Link>
                </button>
              </div>
              <div className="forgot-password">
                <Link to="/Forgot-password">Forgot-password?</Link>
              </div>
            </article>
            <div className="sign-up">
              <p>
                Don't have an account?<Link to="/Sign-up"> Sign Up</Link>
              </p>
            </div>
          </form>
        </aside>

        <aside className="right"></aside>
      </main>
    </>
  );
};

export default SignIn;
