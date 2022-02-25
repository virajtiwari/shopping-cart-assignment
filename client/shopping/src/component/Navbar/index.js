import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import "./Navbar.scss";
import { addSlectedKey } from "../../store/Home/HomeAction";

const Navbar = memo(({ nav }) => {
  const dispatch = useDispatch();
  const handleNavAction = item => {
    console.log('ite', item);
    if(item?.title?.toLowerCase() === 'products') dispatch(addSlectedKey(''))
  }
  return (
    <nav className="navbar navbar-dark bg-dark">
      <ul className="navbarUL">
        {nav?.map((item) => (
          <li className="navbarLI" key={item?.id} onClick={()=>handleNavAction(item)}>
            <Link to={item?.navigation}>{item?.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default Navbar;
