import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react'
import './Navigation.css'
import CloseIcon from '@mui/icons-material/Close';
import MenuData from "./MenuData";

export default function Navigation(){
    const [showmenu , setShowmenu] = useState(false)
    const clickAction = () => setShowmenu(!showmenu)
    return(
        <aside>
            <div className="navbar">
                <div className="navbar-toggle" onClick={clickAction}>
                    <Link to={`#`} className="menu-bar">
                        <MenuIcon fontSize="large"/>
                    </Link>
                </div>
            </div>
            <nav className={showmenu? "nav-menu-active":"nav-menu"}>
                <ul className="nav-menu-item" onClick={clickAction}>
                    <li className="navbar-toggle" onClick={()=>setShowmenu(false)}>
                        <Link to={`#`}>
                            <CloseIcon fontSize="large"/>
                        </Link>
                    </li>

                    {MenuData.map((menu,index)=>{
                        return(
                        <li className="menu-text" key={index}>
                            <Link to={menu.path}>
                                {menu.icon}
                                <span>{menu.title}</span>
                            </Link>
                        </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}