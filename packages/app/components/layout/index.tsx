import React, { FC, useCallback, useRef } from "react";
import Banner from "./banner";

const Layout: FC = ({ children }) => {
  const ref = useRef(null);

  const scrollToTop = useCallback(
    (e) => {
      e.preventDefault();
      if (ref && ref.current) {
        ref.current.scrollTop = 0;
      }
    },
    [ref]
  );

  return (
    <div className="app-container">
      <Banner />
      <div className="content" ref={ref}>
        {children}
        <div className="app-footer">
          <div className="app-footer__content">
            <p>
              <a href="https://grimbakor.com">grimbakor.com</a> © 2020
            </p>
            <p>
              <a href="" onClick={scrollToTop}>
                Top
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
