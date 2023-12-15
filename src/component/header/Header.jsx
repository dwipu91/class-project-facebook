import { RiHomeHeartFill } from "react-icons/ri";
import { BsShop } from "react-icons/bs";
import { MdOutlineGroups } from "react-icons/md";
import { LuGamepad2 } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";

import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_logo">
          <img
            src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png"
            alt="facebook icon"
          />
          <input type="text" placeholder="Search Facebook" />
        </div>
        <div className="top_menu">
          <div className="menu_icone">
            <p>
              <RiHomeHeartFill />
            </p>
            <p>
              <BsShop />
            </p>
            <p>
              <MdOutlineGroups />
            </p>
            <p>
              <LuGamepad2 />
            </p>
          </div>
        </div>
        <div className="right_icon">
          <div className="right_icones">
            <Link>
              {" "}
              <IoMenu />
            </Link>
            <Link>
              {" "}
              <FaFacebookMessenger />
            </Link>
            <Link>
              {" "}
              <IoMdNotifications />
            </Link>
            <Link>
              {" "}
              <img
                src="https://scontent.fdac163-1.fna.fbcdn.net/v/t39.30808-6/341528928_192047626491273_8195728121180073815_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGcbBYORFd_ofWLrk19PfLaqCuTKx4_Z5KoK5MrHj9nkiqonK49XRl61ieGQgIIwJOqnFAcdOA2XmK0PhbcOzm8&_nc_ohc=2ZjwoODVMJcAX-T4wyS&_nc_ht=scontent.fdac163-1.fna&oh=00_AfAhjENOlshrUPD6P7hd0VxPY9NoxizM5LvTYy9e2pRSyQ&oe=65819111"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
