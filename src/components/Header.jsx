import "../assets/styles/header.css";
import logo from "../assets/images/logo.jpg";

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-title">
        <img src={logo} className="header-logo" />
        <h1 className="headerName">ReactFood</h1>
      </div>
      <nav className="cart">
        <button>Cart 0</button>
      </nav>
    </header>
  );
}
