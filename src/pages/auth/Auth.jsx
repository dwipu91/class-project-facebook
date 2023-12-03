import { Link } from "react-router-dom";
import Meta from "../../component/meta/Meta";
import "./Auth.scss";
const Auth = () => {
  return (
    <>
      <Meta title=" Facebook - Login or Sing up" />
      <div className="fb_auth_ariya">
        <div className="fb_aith_container">
          <div className="fb_auth_left">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
              alt=""
            />
            <h2>
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
          <div className="fb_auth_rihg">
            <div className="fb_auth_box">
              <form action="">
                <input
                  type="text"
                  placeholder="Email address or phone number"
                />
                <input type="password" placeholder="Password" />
                <button className="log_in">Log in</button>
              </form>
              <Link to="/"> Forgotten password?</Link>
              <div className="divder"></div>
              <button className="create_button">Create New Account</button>
            </div>
            <p className="fb_auth_decs">
              {" "}
              <Link>Create a Page</Link> for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
