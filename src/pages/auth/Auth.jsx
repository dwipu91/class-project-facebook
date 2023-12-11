import { Link } from "react-router-dom";
import Meta from "../../component/meta/Meta";
import "./Auth.scss";
import Modal from "../../component/modal/Modal";
import { AiFillQuestionCircle } from "react-icons/ai";

import { useState } from "react";
import { day, month } from "../../faker/dmy";
import { creatToast, isEmail, isMobile } from "../../helper/Helper";

// key facebook years key
const years = Array.from(
  { length: new Date().getFullYear() - 1903 },
  (_, i) => 1904 + i
).reverse();

const Auth = () => {
  const [modal, setModal] = useState(false);

  const [input, setInput] = useState({
    frist_name: "",
    sur_name: "",
    password: "",
    moe: "",
    day: "",
    month: "",
    year: "",
    gender: "",
  });

  const [border, setBorder] = useState({
    frist_name: true,
    sur_name: true,
    password: true,
    moe: true,
    day: true,
    month: true,
    year: true,
    gender: true,
  });

  //handle input change on new login from
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // from submit handeler
  const handelUserReagister = (e) => {
    e.preventDefault();

    // validation
    if (
      !input.frist_name ||
      !input.sur_name ||
      !input.day ||
      !input.month ||
      !input.year ||
      !input.gender ||
      !input.password
    ) {
      creatToast("all fields are required");
    } else if (!isEmail(input.moe)) {
      creatToast("Email is not");
    } else {
      creatToast("Data stable", "success");
    }
  };

  // handle Input Blur
  const handleInputBlur = (e) => {
    if (e.target.value == "") {
      setBorder((prevState) => ({
        ...prevState,
        [e.target.name]: false,
      }));
    } else {
      setBorder((prevState) => ({
        ...prevState,
        [e.target.name]: true,
      }));
    }
  };

  return (
    <>
      <Meta title=" Facebook - Login or Sing up" />

      {modal && (
        <Modal hide={setModal}>
          <form onSubmit={handelUserReagister} className="sing_up_form">
            <div className="h_form">
              <input
                className={border.frist_name ? "" : "red_border"}
                type="text"
                placeholder="First Name"
                name="frist_name"
                value={input.frist_name}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              <input
                className={border.sur_name ? "" : "red_border"}
                type="text"
                placeholder="Surname"
                name="sur_name"
                value={input.sur_name}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
            </div>{" "}
            <input
              className={border.moe ? "" : "red_border"}
              type="text"
              placeholder="Mobile Number & Emile Address"
              name="moe"
              value={input.moe}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            <input
              className={border.password ? "" : "red_border"}
              type="text"
              placeholder="New Password"
              name="password"
              value={input.password}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {/* new class  */}
            <div className="reg_extra">
              <span className="reg_extra_title">
                Date of birth <AiFillQuestionCircle />{" "}
              </span>

              <div className="reg_ectra_option">
                <select
                  id=""
                  name="day"
                  value={input.day}
                  onChange={handleInputChange}
                >
                  <option value="">Day</option>
                  {day?.map((item, index) => (
                    <option
                      value={item}
                      key={index}
                      selected={new Date().getDate() == item ? true : false}
                    >
                      {item}
                    </option>
                  ))}
                </select>
                <select
                  name="month"
                  id=""
                  value={input.month}
                  onChange={handleInputChange}
                >
                  <option value="">Month</option>
                  {month?.map((item, index) => (
                    <option
                      value={item}
                      key={index}
                      selected={new Date().getMonth() == index ? true : false}
                    >
                      {item}
                    </option>
                  ))}
                </select>
                <select
                  name="year"
                  value={input.year}
                  onChange={handleInputChange}
                  id=""
                >
                  <option value="">Year</option>
                  {years?.map((item, index) => (
                    <option
                      value={item}
                      key={index}
                      selected={new Date().getFullYear() == item ? true : false}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="reg_extra">
              <span className="reg_extra_title">
                Gender <AiFillQuestionCircle />{" "}
              </span>
              <div className="reg_extra_option">
                <label>
                  <span>Male</span>
                  <input
                    name="gender"
                    type="radio"
                    value="Male"
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  <span>Female</span>
                  <input
                    name="gender"
                    type="radio"
                    value="Female"
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  <span>Custom</span>
                  <input
                    name="gender"
                    type="radio"
                    value="Custom"
                    onChange={handleInputChange}
                  />
                </label>
              </div>
            </div>
            <div className="custome_h">
              <p className="custome_gender">
                People who use our service may have uploaded your contact
                information to Facebook. <Link> Learn more.</Link>
              </p>{" "}
              <p className="custome_gender">
                By clicking Sign Up, you agree to our <Link>Terms</Link>,{" "}
                <Link>Privacy Policy</Link> and
                <Link>Cookies Policy</Link>. You may receive SMS notifications
                from us and can opt out at any time
              </p>
            </div>
            <button className="sing_up_btn">Sing up</button>
          </form>
        </Modal>
      )}

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
          <div className="fb_auth_rihgt">
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
              <button className="create_button" onClick={() => setModal(true)}>
                Create New Account
              </button>
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
