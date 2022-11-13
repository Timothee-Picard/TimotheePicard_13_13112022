import { Link } from "react-router-dom";
import { Outlet  } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Logo from "../../assets/argentBankLogo.png"

export default function Layout() {
    const pathname = useLocation().pathname
  return (
    <>
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link className="main-nav-item" to="/connexion">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
        </nav>
        <main>
            <Outlet />
        </main>
        <footer className="footer">
            <p className="footer-text">Copyright 2020 Argent Bank</p>
        </footer>
    </>
  )
}
