import { NavLink } from "react-router";
import "./Header.css";


export default function Header() {
    

    return (
    <header>
        <ul>
            <li><NavLink to={"/"}><h1>Home</h1></NavLink></li>
            <li><NavLink to={"/user"}><h1>User</h1></NavLink></li>
            <li><NavLink to={"/products"}><h1>Products</h1></NavLink></li>
            <li><NavLink to={`/product/${1}`}>Product 1</NavLink></li>
            <li><NavLink to={`/product/${2}`}>Product 2</NavLink></li>
            <li><NavLink to={`/product/${3}`}>Product 3</NavLink></li>
        </ul>
    </header>
    )
}