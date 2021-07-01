import React from 'react';
import s from './Menu.module.css'
import {NavLink} from "react-router-dom";

const Menu = (props) => {
    return (
        <nav className={s.menu}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>My profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
            </div>
        </nav>
    )
}
export default Menu;