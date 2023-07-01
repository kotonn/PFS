import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link
            className="navbar-brand nav_ac"
            to="/"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
          >
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
            <Themetoggle />
            <button
              className="menu__button  nav_ac"
              onClick={handleToggle}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="800"
            >
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : "menu__closed"}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper menu_wrapper_style">
              <div className=" p-3">
                <ul className="the_menu">
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/">ホーム</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/usage">使い方</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/subscription">事前登録</Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/contact">お問い合わせ</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <p className="copyright m-0">© 2023 PuTone All right reserved.</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>

    </>
  );
};

export default Headermain;
