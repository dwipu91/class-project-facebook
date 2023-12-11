import { LiaTimesSolid } from "react-icons/lia";
import "./Modal.scss";
const Modal = ({ children, hide }) => {
  return (
    <>
      <div className="modal_blar_area">
        <div className="moda_container">
          <div className="modal_header">
            <div className="header_content">
              <h2>Sing up</h2>
              <p>Its quick eagy </p>
            </div>
            <button onClick={() => hide(false)}>
              <LiaTimesSolid />
            </button>
          </div>
          <div className="modal_body">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
