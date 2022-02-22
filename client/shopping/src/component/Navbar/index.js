import React, { memo } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.scss";

const index = memo(({ nav }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <ul className="navbarUL">
        {nav?.map((item) => (
          <li className="navbarLI" key={item?.id}>
            <Link to={item?.navigation}>{item?.title}</Link>
            {/* <a className="active" href="#home">
              {item?.title}
            </a> */}
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default index;
