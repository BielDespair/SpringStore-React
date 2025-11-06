import { NavLink } from "react-router";
import "./Header.css";


export default function Header() {
    

    return (
    <header>
        <ul>
            <li><NavLink to={"/"}><h1>Home</h1></NavLink></li>
            <li><NavLink to={"/user"}><h1>User</h1></NavLink></li>
        </ul>
    </header>
    )
}