import React, {memo, useContext} from 'react';
import {Link} from 'react-router-dom';
import { SetOpenContext } from './context/ControlContext';

const liStyle = {
    padding: "5px",
    listStyle: "none",
}

const NavbarItem = (props) => {
    const setIsOpen2 = useContext(SetOpenContext);
    return (
        <li style={liStyle} onClick={ ()=>{setIsOpen2(false)} }>
            <Link to={props.url}>{props.text}</Link>
        </li>
    )
}

export default memo(NavbarItem);
// export default NavbarItem;