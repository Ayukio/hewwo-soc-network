import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.title}>HEWWO</div>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} ~~~~~~ <button onClick={props.logout}>Sign out</button></div>
                    : <NavLink to={'/login'}>Sign in</NavLink>}

            </div>
        </header>
    )
}
export default Header;