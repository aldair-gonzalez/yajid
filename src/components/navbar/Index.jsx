import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import CartButton from "./CartButton";

function Navbar() {
  const targetRef = useRef();
  const [margin, setMargin] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleRezize() {
      if (targetRef.current) {
        const { height } = targetRef.current.getBoundingClientRect();
        setMargin(height);
        document.body.style.marginTop = margin + "px";
      }
    }
    handleRezize();
    window.addEventListener("resize", () => handleRezize());
  }, [margin]);

  useEffect(
    () =>
      window.addEventListener("scroll", () =>
        window.scrollY > 50 ? setScrolled(true) : setScrolled(false)
      ),
    [scrolled]
  );

  return (
    <>
      <header className={scrolled ? "Header active" : "Header"} ref={targetRef}>
        <p className="Header-title">Super Yajid</p>
        <div className="Header-icons">
          <div className="Header-wrapper Wrapper">
            <div className="Header-icon">
              <button
                className="Header-button"
                title="Abrir menú de navegación"
              >
                <svg
                  className="Header-buttonSvg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </button>
            </div>
            <h1 className="Header-logo">
              <Link className="Header-logoLink" to="/" title="Super Yajid">
                <img
                  className="Header-logoImg"
                  src="./assets/img/logo/logo.png"
                  alt="Super Yajid"
                />
              </Link>
            </h1>
            <div className="Header-icon Header-icon--end">
              <CartButton />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
